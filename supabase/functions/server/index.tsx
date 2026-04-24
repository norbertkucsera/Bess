import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-cfbfb431/health", (c) => {
  return c.json({ status: "ok" });
});

// Envitron API integration
let envitronToken: string | null = null;
let tokenExpiry: number = 0;

// Authenticate with Envitron API
async function getEnvitronToken(): Promise<string> {
  // Check if we have a valid token
  if (envitronToken && Date.now() < tokenExpiry) {
    return envitronToken;
  }

  const username = Deno.env.get('ENVITRON_EMAIL');
  const password = Deno.env.get('ENVITRON_PASSWORD');

  if (!username || !password) {
    throw new Error('Envitron credentials not configured');
  }

  try {
    const response = await fetch('https://api.envitron.nl/public-api/token/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.log(`Envitron authentication error: ${response.status} - ${errorText}`);
      throw new Error(`Envitron authentication failed: ${response.status}`);
    }

    const data = await response.json();
    envitronToken = data.access || data.access_token || data.token;

    if (!envitronToken) {
      console.log(`Envitron authentication response: ${JSON.stringify(data)}`);
      throw new Error('No access token in authentication response');
    }

    // Set token expiry to 14 minutes (tokens expire in 15 minutes based on API response)
    tokenExpiry = Date.now() + (14 * 60 * 1000);

    return envitronToken;
  } catch (error) {
    console.log(`Error authenticating with Envitron API: ${error}`);
    throw error;
  }
}

// Get battery data from Envitron
app.get("/make-server-cfbfb431/battery-data", async (c) => {
  try {
    const token = await getEnvitronToken();

    // Fetch buildings to find the one with battery (accu)
    const buildingsResponse = await fetch('https://api.envitron.nl/public-api/buildings/', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    });

    if (!buildingsResponse.ok) {
      const errorText = await buildingsResponse.text();
      console.log(`Error fetching buildings: ${buildingsResponse.status} - ${errorText}`);
      return c.json({ error: `Failed to fetch buildings: ${buildingsResponse.status}` }, 500);
    }

    const buildings = await buildingsResponse.json();
    console.log(`Fetched ${buildings.length} buildings from Envitron API`);

    // Find building with battery (contains "accu" in name)
    const batteryBuilding = buildings.find((b: any) =>
      b.name.toLowerCase().includes('accu') || b.name.toLowerCase().includes('battery')
    );

    if (!batteryBuilding) {
      console.log('No building with battery found');
      return c.json({ error: 'No building with battery found' }, 404);
    }

    const buildingUuid = batteryBuilding.uuid;
    console.log(`Using building: ${batteryBuilding.name} (${buildingUuid})`);

    // Fetch battery capacity data
    const capacityResponse = await fetch(
      `https://api.envitron.nl/public-api/buildings/${buildingUuid}/electricity/capacity/actual/`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
      }
    );

    let capacityData = null;
    if (capacityResponse.ok) {
      capacityData = await capacityResponse.json();
      console.log('Battery capacity data:', JSON.stringify(capacityData));
    } else {
      console.log(`Error fetching capacity: ${capacityResponse.status}`);
    }

    // Fetch battery state of charge (SoC)
    const socResponse = await fetch(
      `https://api.envitron.nl/public-api/buildings/${buildingUuid}/electricity/capacity/actual/soc/`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
      }
    );

    let socData = null;
    if (socResponse.ok) {
      socData = await socResponse.json();
      console.log('Battery SoC data:', JSON.stringify(socData));
    } else {
      console.log(`Error fetching SoC: ${socResponse.status}`);
    }

    // Fetch current electricity consumption
    const actualResponse = await fetch(
      `https://api.envitron.nl/public-api/buildings/${buildingUuid}/electricity/actual/`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
      }
    );

    let actualData = null;
    if (actualResponse.ok) {
      actualData = await actualResponse.json();
      console.log('Current electricity data:', JSON.stringify(actualData));
    } else {
      console.log(`Error fetching actual consumption: ${actualResponse.status}`);
    }

    // Calculate battery metrics from the API responses
    const totalCapacity = capacityData?.capacity || capacityData?.total_capacity || 38;
    const stateOfCharge = socData?.soc || socData?.state_of_charge || socData?.percentage || 64;
    const availableDischarge = (totalCapacity * stateOfCharge) / 100;
    const availableCharge = totalCapacity - availableDischarge;

    return c.json({
      totalCapacity: Number(totalCapacity.toFixed(1)),
      currentCharge: Number(stateOfCharge.toFixed(0)),
      availableDischarge: Number(availableDischarge.toFixed(1)),
      availableCharge: Number(availableCharge.toFixed(1)),
      status: 'Connected',
      power: actualData?.power || actualData?.current_power || 0,
      buildingName: batteryBuilding.name,
      buildingUuid: buildingUuid,
    });
  } catch (error) {
    console.log(`Error in battery-data endpoint: ${error}`);
    return c.json({ error: `Internal server error while fetching battery data: ${error.message}` }, 500);
  }
});

// Get market prices from ENTSO-E
app.get("/make-server-cfbfb431/market-prices", async (c) => {
  try {
    const apiToken = Deno.env.get('ENTSOE_API_TOKEN');

    if (!apiToken) {
      console.log('ENTSO-E API token not configured');
      return c.json({ error: 'ENTSO-E API token not configured' }, 500);
    }

    // Get today and tomorrow dates in ENTSO-E format (YYYYMMDDhhmm)
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 2); // Get 2 days of data

    const formatDate = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}${month}${day}0000`;
    };

    const periodStart = formatDate(today);
    const periodEnd = formatDate(tomorrow);

    // Fetch day-ahead prices from ENTSO-E
    const url = new URL('https://web-api.tp.entsoe.eu/api');
    url.searchParams.set('securityToken', apiToken);
    url.searchParams.set('documentType', 'A44'); // Price Document
    url.searchParams.set('in_Domain', '10YRO-TEL------P'); // Romania
    url.searchParams.set('out_Domain', '10YRO-TEL------P'); // Romania
    url.searchParams.set('periodStart', periodStart);
    url.searchParams.set('periodEnd', periodEnd);

    console.log(`Fetching ENTSO-E prices from ${periodStart} to ${periodEnd}`);

    const response = await fetch(url.toString());

    if (!response.ok) {
      const errorText = await response.text();
      console.log(`ENTSO-E API error: ${response.status} - ${errorText}`);
      return c.json({ error: `Failed to fetch market prices: ${response.status}` }, 500);
    }

    const xmlData = await response.text();

    // Parse XML to extract price data
    // ENTSO-E returns XML format with price points
    const priceRegex = /<price.amount>([^<]+)<\/price.amount>/g;
    const positionRegex = /<position>([^<]+)<\/position>/g;

    const prices: number[] = [];
    const positions: number[] = [];

    let priceMatch;
    while ((priceMatch = priceRegex.exec(xmlData)) !== null) {
      prices.push(parseFloat(priceMatch[1]));
    }

    let positionMatch;
    while ((positionMatch = positionRegex.exec(xmlData)) !== null) {
      positions.push(parseInt(positionMatch[1]));
    }

    if (prices.length === 0) {
      console.log('No price data found in XML response');
      return c.json({ error: 'No price data available' }, 404);
    }

    // Calculate statistics
    const avgPrice = prices.reduce((a, b) => a + b, 0) / prices.length;
    const maxPrice = Math.max(...prices);
    const minPrice = Math.min(...prices);
    const currentHour = now.getHours();
    const currentPrice = prices[currentHour] || prices[0];

    // Get hourly prices for chart
    const hourlyPrices = prices.slice(0, 24).map((price, index) => ({
      hour: index,
      price: parseFloat(price.toFixed(2)),
    }));

    return c.json({
      currentPrice: parseFloat(currentPrice.toFixed(2)),
      avgPrice: parseFloat(avgPrice.toFixed(2)),
      maxPrice: parseFloat(maxPrice.toFixed(2)),
      minPrice: parseFloat(minPrice.toFixed(2)),
      hourlyPrices,
      currency: 'EUR',
      unit: 'MWh',
      lastUpdate: now.toISOString(),
    });
  } catch (error) {
    console.log(`Error in market-prices endpoint: ${error}`);
    return c.json({ error: `Internal server error while fetching market prices: ${error.message}` }, 500);
  }
});

Deno.serve(app.fetch);