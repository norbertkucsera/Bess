import { useEffect, useMemo, useState } from 'react';
import { TimeHorizon } from '../types';

interface LocationResult {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  admin1?: string;
}

interface WeatherForecast {
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    windspeed_10m_max: number[];
    shortwave_radiation_sum: number[];
    precipitation_sum: number[];
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    windspeed_10m: number[];
    shortwave_radiation: number[];
    precipitation: number[];
  };
}

function Header() {
  return (
    <div className="px-[40px] py-[38px]">
      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
        <p className="font-['Sora:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#ecf4ff] text-[30px]">Forecast</p>
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[14px]">
          Full-screen weather and production forecast from Open-Meteo
        </p>
      </div>
    </div>
  );
}

function SearchBar({ query, setQuery, onSelect, results, isSearching }: {
  query: string;
  setQuery: (value: string) => void;
  onSelect: (location: LocationResult) => void;
  results: LocationResult[];
  isSearching: boolean;
}) {
  return (
    <div className="relative w-full md:max-w-[560px]">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search city or location..."
        className="w-full rounded-[16px] border border-[#25354f] bg-[#0f1c30] px-[18px] py-[14px] text-[#ecf4ff] placeholder:text-[#57789d] outline-none"
      />
      {query.length > 1 && (
        <div className="absolute top-full mt-2 w-full rounded-[16px] border border-[#25354f] bg-[#0b1322] p-[12px] shadow-[0_20px_48px_rgba(0,0,0,0.35)] z-50">
          {isSearching ? (
            <p className="text-[#7c93b4] text-[12px]">Searching locations...</p>
          ) : results.length > 0 ? (
            results.map((location) => (
              <button
                key={`${location.name}-${location.latitude}-${location.longitude}`}
                type="button"
                onClick={() => onSelect(location)}
                className="block w-full text-left px-[12px] py-[10px] rounded-[12px] text-[#ecf4ff] hover:bg-[rgba(68,180,255,0.14)]"
              >
                <div className="font-['IBM_Plex_Sans:Bold',sans-serif] text-[14px]">{location.name}</div>
                <div className="text-[#7c93b4] text-[11px]">{location.admin1 ? `${location.admin1}, ` : ''}{location.country}</div>
              </button>
            ))
          ) : (
            <p className="text-[#7c93b4] text-[12px]">No matches found.</p>
          )}
        </div>
      )}
    </div>
  );
}

function StatTile({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-[20px] bg-[#121a2a] border border-[#25354f] p-[18px]">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[11px] uppercase tracking-[0.24em] mb-[8px]">{title}</p>
      <p className="font-['Sora:Bold',sans-serif] text-[#ecf4ff] text-[24px]">{value}</p>
    </div>
  );
}

function MiniChart({ title, values, unit, color }: { title: string; values: number[]; unit: string; color: string }) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  return (
    <div className="rounded-[20px] bg-[#121a2a] border border-[#25354f] p-[18px]">
      <div className="flex items-center justify-between mb-[16px]">
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] text-[#ecf4ff] text-[16px]">{title}</p>
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px]">{unit}</p>
      </div>
      <div className="flex items-end gap-[4px] h-[120px]">
        {values.slice(0, 24).map((value, index) => {
          const height = ((value - min) / range) * 100;
          return (
            <div
              key={index}
              className="flex-1 rounded-t-[6px]"
              style={{
                height: `${Math.max(6, height)}%`,
                background: color,
                opacity: 0.88,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export function ForecastContent({ timeHorizon }: { timeHorizon: TimeHorizon }) {
  const [query, setQuery] = useState('Oradea');
  const [selectedLocation, setSelectedLocation] = useState<LocationResult>({
    name: 'Oradea',
    latitude: 47.0722,
    longitude: 21.9211,
    country: 'Romania',
  });
  const [searchResults, setSearchResults] = useState<LocationResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [forecast, setForecast] = useState<WeatherForecast | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocations = async () => {
      if (query.length < 2) {
        setSearchResults([]);
        return;
      }
      setIsSearching(true);
      try {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=8&language=en&format=json`);
        const json = await response.json();
        setSearchResults((json.results || []).map((item: any) => ({
          name: item.name,
          latitude: item.latitude,
          longitude: item.longitude,
          country: item.country,
          admin1: item.admin1,
        })));
      } catch (err) {
        console.error('Location search failed', err);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    };

    const timeout = setTimeout(fetchLocations, 300);
    return () => clearTimeout(timeout);
  }, [query]);

  useEffect(() => {
    const loadForecast = async () => {
      setIsLoading(true);
      setError(null);
      const startDate = new Date();
      const endDate = new Date();
      endDate.setDate(startDate.getDate() + (timeHorizon === 'Next Month' ? 30 : timeHorizon === 'Next Week' ? 7 : 1));
      const formatDate = (date: Date) => date.toISOString().slice(0, 10);

      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${selectedLocation.latitude}&longitude=${selectedLocation.longitude}&hourly=temperature_2m,windspeed_10m,shortwave_radiation,precipitation&daily=temperature_2m_max,temperature_2m_min,windspeed_10m_max,shortwave_radiation_sum,precipitation_sum&timezone=auto&start_date=${formatDate(startDate)}&end_date=${formatDate(endDate)}`
        );
        const data = await response.json();

        setForecast({
          daily: {
            time: data.daily.time || [],
            temperature_2m_max: data.daily.temperature_2m_max || [],
            temperature_2m_min: data.daily.temperature_2m_min || [],
            windspeed_10m_max: data.daily.windspeed_10m_max || [],
            shortwave_radiation_sum: data.daily.shortwave_radiation_sum || [],
            precipitation_sum: data.daily.precipitation_sum || [],
          },
          hourly: {
            time: data.hourly.time || [],
            temperature_2m: data.hourly.temperature_2m || [],
            windspeed_10m: data.hourly.windspeed_10m || [],
            shortwave_radiation: data.hourly.shortwave_radiation || [],
            precipitation: data.hourly.precipitation || [],
          },
        });
      } catch (err) {
        console.error('Forecast load failed', err);
        setError('Unable to load forecast data. Showing mock results.');
        setForecast(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadForecast();
  }, [selectedLocation, timeHorizon]);

  const summary = useMemo(() => {
    if (!forecast) {
      return {
        avgTemp: '18°C',
        maxWind: '14 km/h',
        avgSolar: '310 W/m²',
        precipitation: '3.2 mm',
      };
    }
    const count = forecast.daily.time.length || 1;
    const avgTemp = Math.round(
      forecast.daily.temperature_2m_max.reduce((sum, v) => sum + v, 0) / count,
    );
    const maxWind = Math.max(...forecast.daily.windspeed_10m_max, 0);
    const avgSolar = Math.round(
      forecast.daily.shortwave_radiation_sum.reduce((sum, v) => sum + v, 0) / count,
    );
    const totalPrecip = Math.round(
      forecast.daily.precipitation_sum.reduce((sum, v) => sum + v, 0),
    );
    return {
      avgTemp: `${avgTemp}°C`,
      maxWind: `${maxWind} km/h`,
      avgSolar: `${avgSolar} W/m²`,
      precipitation: `${totalPrecip} mm`,
    };
  }, [forecast]);

  const hourlyCount = timeHorizon === 'Next Week' ? 48 : timeHorizon === 'Next Month' ? 72 : 24;
  const hourlyValues = forecast?.hourly.time.slice(0, hourlyCount) || Array.from({ length: hourlyCount }, (_, i) => i);
  const temperatures = forecast?.hourly.temperature_2m.slice(0, hourlyCount) || Array.from({ length: hourlyCount }, () => 20 + Math.random() * 6);
  const wind = forecast?.hourly.windspeed_10m.slice(0, hourlyCount) || Array.from({ length: hourlyCount }, () => 8 + Math.random() * 10);
  const solar = forecast?.hourly.shortwave_radiation.slice(0, hourlyCount) || Array.from({ length: hourlyCount }, () => 180 + Math.random() * 220);
  const rainfall = forecast?.hourly.precipitation.slice(0, hourlyCount) || Array.from({ length: hourlyCount }, () => Math.random() * 1.2);

  return (
    <div className="w-full">
      <Header />
      <div className="px-[40px] pb-[40px]">
        <div className="grid gap-[24px]">
          <div className="grid gap-[20px] md:grid-cols-[1fr_auto] items-center">
            <div className="flex flex-col gap-[10px] max-w-[760px]">
              <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[13px]">Default location: Oradea, Romania. Search to change the city.</p>
              <SearchBar
                query={query}
                setQuery={setQuery}
                onSelect={(location) => {
                  setSelectedLocation(location);
                  setQuery(location.name);
                  setSearchResults([]);
                }}
                results={searchResults}
                isSearching={isSearching}
              />
            </div>
            <div className="rounded-[24px] bg-[#121a2a] border border-[#25354f] px-[24px] py-[20px]">
              <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[11px] uppercase tracking-[0.3em] mb-[8px]">Selected location</p>
              <p className="font-['Sora:Bold',sans-serif] text-[#ecf4ff] text-[22px]">{selectedLocation.name}, {selectedLocation.country}</p>
              <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] mt-[6px]">{timeHorizon} forecast</p>
            </div>
          </div>

          <div className="grid gap-[20px] lg:grid-cols-4">
            <StatTile title="Avg temp" value={summary.avgTemp} />
            <StatTile title="Max wind" value={summary.maxWind} />
            <StatTile title="Solar radiation" value={summary.avgSolar} />
            <StatTile title="Precipitation" value={summary.precipitation} />
          </div>

          <div className="grid gap-[24px] xl:grid-cols-2">
            <MiniChart title="Temperature" values={temperatures} unit="°C" color="rgba(68,180,255,0.85)" />
            <MiniChart title="Wind speed" values={wind} unit="km/h" color="rgba(59,217,164,0.85)" />
          </div>

          <div className="grid gap-[24px] xl:grid-cols-2">
            <MiniChart title="Solar radiation" values={solar} unit="W/m²" color="rgba(255,197,62,0.88)" />
            <MiniChart title="Precipitation" values={rainfall} unit="mm" color="rgba(68,180,255,0.7)" />
          </div>

          <div className="rounded-[24px] bg-[#121a2a] border border-[#25354f] p-[24px]">
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[6px]">
                <p className="font-['IBM_Plex_Sans:Bold',sans-serif] text-[#ecf4ff] text-[17px]">Hourly forecast chart</p>
                <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] max-w-[640px]">The chart displays the next {timeHorizon === 'Next Month' ? 'few weeks of aggregated hourly outlook' : hourlyCount === 48 ? 'two days of' : '24 hours of'} temperature, wind and solar radiation trends.</p>
              </div>
              <div className="grid gap-[16px] rounded-[20px] bg-[#0f1c30] p-[18px]">
                <div className="flex items-center justify-between text-[#7c93b4] text-[12px] uppercase tracking-[0.24em]">
                  <span>Hour</span>
                  <span>Temp</span>
                </div>
                <div className="flex gap-[4px] overflow-x-auto pb-[8px]">
                  {hourlyValues.map((time, index) => (
                    <div key={`${time}-${index}`} className="min-w-[38px] text-center text-[10px] text-[#a5b9d9]">
                      <div>{new Date(time).getHours().toString().padStart(2, '0')}h</div>
                      <div className="mt-[6px] font-['IBM_Plex_Sans:Bold',sans-serif] text-[#ecf4ff]">{temperatures[index]?.toFixed(0)}°</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {error && (
            <div className="rounded-[24px] bg-[#121a2a] border border-[#ff6b6b] p-[20px] text-[#ff6b6b]">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
