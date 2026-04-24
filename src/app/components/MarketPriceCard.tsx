import { useState, useEffect } from 'react';

interface MarketPriceData {
  currentPrice: number;
  avgPrice: number;
  maxPrice: number;
  minPrice: number;
  hourlyPrices: { hour: number; price: number }[];
  currency: string;
  unit: string;
  lastUpdate: string;
}

function PriceMetric({ label, value, unit, color = 'white' }: {
  label: string;
  value: number;
  unit: string;
  color?: 'white' | 'green' | 'red' | 'blue';
}) {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    white: 'text-[#ecf4ff]',
    green: 'text-[#3bd9a4]',
    red: 'text-[#ff6b6b]',
    blue: 'text-[#44b4ff]',
  };

  return (
    <div
      className="bg-[rgba(22,32,51,0.74)] flex-[1_0_0] min-w-px relative rounded-[16px] transition-all cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <div aria-hidden="true" className={`absolute border ${isHovered ? 'border-[rgba(59,217,164,0.4)]' : 'border-[rgba(37,53,79,0.8)]'} border-solid inset-0 pointer-events-none rounded-[16px] transition-colors`} />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative size-full">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[11px] tracking-[0.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {label}
        </p>
        <div className="flex items-baseline gap-[4px]">
          <p className={`font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 ${colorClasses[color]} text-[16px]`} style={{ fontVariationSettings: "'wdth' 100" }}>
            €{value.toFixed(2)}
          </p>
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] text-[#7c93b4] text-[11px]">
            /{unit}
          </p>
        </div>
      </div>
    </div>
  );
}

function PriceChart({ data }: { data: { hour: number; price: number }[] }) {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  if (data.length === 0) return null;

  const prices = data.map(d => d.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = maxPrice - minPrice;
  const currentHour = new Date().getHours();

  return (
    <div className="bg-[rgba(8,12,22,0.5)] content-stretch relative rounded-[18px] w-full h-[140px]">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.7)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="relative w-full h-full p-[16px]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="priceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#44B4FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#44B4FF" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          {/* Area */}
          <path
            d={`M ${data.map((d, i) =>
              `${(i / (data.length - 1)) * 100},${100 - ((d.price - minPrice) / priceRange) * 80}`
            ).join(' L ')} L 100,100 L 0,100 Z`}
            fill="url(#priceGradient)"
          />
          {/* Line */}
          <path
            d={`M ${data.map((d, i) =>
              `${(i / (data.length - 1)) * 100},${100 - ((d.price - minPrice) / priceRange) * 80}`
            ).join(' L ')}`}
            stroke="#44B4FF"
            strokeWidth="0.8"
            fill="none"
          />
          {/* Current hour indicator */}
          {currentHour < data.length && (
            <line
              x1={(currentHour / (data.length - 1)) * 100}
              y1="0"
              x2={(currentHour / (data.length - 1)) * 100}
              y2="100"
              stroke="#3BD9A4"
              strokeWidth="0.5"
              strokeDasharray="2,2"
              opacity="0.6"
            />
          )}
          {/* Points */}
          {data.map((d, i) => (
            <circle
              key={i}
              cx={(i / (data.length - 1)) * 100}
              cy={100 - ((d.price - minPrice) / priceRange) * 80}
              r={hoveredPoint === i ? "1.5" : i === currentHour ? "1.2" : "0.6"}
              fill={hoveredPoint === i ? "#3BD9A4" : i === currentHour ? "#3BD9A4" : "#44B4FF"}
              onMouseEnter={() => setHoveredPoint(i)}
              onMouseLeave={() => setHoveredPoint(null)}
              style={{ cursor: 'pointer', transition: 'all 0.2s' }}
            />
          ))}
        </svg>
        {hoveredPoint !== null && (
          <div
            className="absolute bg-[#162033] border border-[#44b4ff] rounded-[8px] px-[10px] py-[6px] pointer-events-none z-10"
            style={{
              left: `${(hoveredPoint / (data.length - 1)) * 100}%`,
              top: `${100 - ((data[hoveredPoint].price - minPrice) / priceRange) * 80}%`,
              transform: 'translate(-50%, -120%)',
            }}
          >
            <p className="text-[#ecf4ff] text-[11px] font-['IBM_Plex_Sans:Bold',sans-serif]">
              {String(hoveredPoint).padStart(2, '0')}:00
            </p>
            <p className="text-[#44b4ff] text-[12px] font-['IBM_Plex_Sans:Bold',sans-serif]">
              €{data[hoveredPoint].price.toFixed(2)}/MWh
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function MarketPriceCard() {
  const [priceData, setPriceData] = useState<MarketPriceData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPricesFromCSV() {
      setIsLoading(true);
      setError(null);

      try {
        // Load CSV file
        const response = await fetch('/src/imports/GUI_FLOWBASED_CONGESTION_INCOME_R3_DAY_AHEAD_202604200000-202604210000.csv');

        if (!response.ok) {
          throw new Error('Failed to load price data');
        }

        const csvText = await response.text();
        const lines = csvText.split('\n').slice(1); // Skip header

        // Parse CSV and aggregate by hour
        const hourlyData: { [hour: number]: number[] } = {};

        lines.forEach(line => {
          if (!line.trim()) return;

          const match = line.match(/"([^"]+)","([^"]+)","([^"]+)","([^"]+)","([^"]+)"/);
          if (!match) return;

          const timeStr = match[4]; // MTU column
          const revenue = parseFloat(match[5]); // Revenue column

          // Extract hour from time string like "20/04/2026 14:00 - 20/04/2026 14:15"
          const hourMatch = timeStr.match(/(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2})/);
          if (!hourMatch) return;

          const hour = parseInt(hourMatch[4]);

          if (!hourlyData[hour]) {
            hourlyData[hour] = [];
          }
          hourlyData[hour].push(revenue);
        });

        // Calculate average for each hour and convert to positive prices
        // (congestion revenue is negative, we'll show absolute values as "prices")
        const hourlyPrices = Array.from({ length: 24 }, (_, hour) => {
          const values = hourlyData[hour] || [];
          const avg = values.length > 0
            ? Math.abs(values.reduce((a, b) => a + b, 0) / values.length)
            : 50; // Default fallback
          return {
            hour,
            price: parseFloat(avg.toFixed(2)),
          };
        });

        const prices = hourlyPrices.map(h => h.price);
        const avgPrice = prices.reduce((a, b) => a + b, 0) / prices.length;
        const maxPrice = Math.max(...prices);
        const minPrice = Math.min(...prices);
        const currentHour = new Date().getHours();
        const currentPrice = hourlyPrices[currentHour]?.price || avgPrice;

        setPriceData({
          currentPrice: parseFloat(currentPrice.toFixed(2)),
          avgPrice: parseFloat(avgPrice.toFixed(2)),
          maxPrice: parseFloat(maxPrice.toFixed(2)),
          minPrice: parseFloat(minPrice.toFixed(2)),
          hourlyPrices,
          currency: 'EUR',
          unit: 'MWh',
          lastUpdate: new Date().toISOString(),
        });
      } catch (err) {
        console.error('CSV price load error:', err);
        setError(err instanceof Error ? err.message : 'Failed to load market prices from CSV');
      } finally {
        setIsLoading(false);
      }
    }

    loadPricesFromCSV();
  }, []);

  if (isLoading && !priceData) {
    return (
      <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[18px] relative rounded-[24px] size-full">
        <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-pulse flex flex-col gap-[12px] w-full">
            <div className="h-[40px] bg-[rgba(37,53,79,0.3)] rounded-[12px]" />
            <div className="h-[140px] bg-[rgba(37,53,79,0.3)] rounded-[12px]" />
            <div className="h-[60px] bg-[rgba(37,53,79,0.3)] rounded-[12px]" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[18px] relative rounded-[24px] size-full">
        <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />
        <div className="w-full h-full flex items-center justify-center flex-col gap-[12px]">
          <p className="text-[#ff6b6b] text-[14px] font-['IBM_Plex_Sans:Medium',sans-serif]">Failed to load market prices</p>
          <p className="text-[#7c93b4] text-[12px] font-['IBM_Plex_Sans:Regular',sans-serif] text-center max-w-[280px]">{error}</p>
        </div>
      </div>
    );
  }

  const priceChange = priceData ? ((priceData.currentPrice - priceData.avgPrice) / priceData.avgPrice) * 100 : 0;
  const isPriceUp = priceChange > 0;

  return (
    <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[18px] relative rounded-[24px] size-full">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />

      {/* Header */}
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
          <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.12] relative shrink-0 text-[#ecf4ff] text-[17px]">
            Market Price Overview
          </p>
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#7c93b4] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Congestion revenue analysis for Romania
          </p>
        </div>
        <div className={`${isPriceUp ? 'bg-[rgba(255,107,107,0.16)]' : 'bg-[rgba(59,217,164,0.16)]'} content-stretch flex items-center gap-[6px] justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0`}>
          <div aria-hidden="true" className={`absolute border ${isPriceUp ? 'border-[rgba(255,107,107,0.6)]' : 'border-[rgba(59,217,164,0.6)]'} border-solid inset-0 pointer-events-none rounded-[999px]`} />
          <div className={`w-[0] h-[0] ${isPriceUp ? 'border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[7px] border-b-[#ff6b6b]' : 'border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-[#3bd9a4] rotate-180'}`} />
          <p className={`font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 ${isPriceUp ? 'text-[#ff6b6b]' : 'text-[#3bd9a4]'} text-[12px] whitespace-nowrap`} style={{ fontVariationSettings: "'wdth' 100" }}>
            {isPriceUp ? '+' : ''}{priceChange.toFixed(1)}%
          </p>
        </div>
      </div>

      {/* Price Chart */}
      {priceData && <PriceChart data={priceData.hourlyPrices} />}

      {/* Price Metrics */}
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
        <PriceMetric
          label="Current price"
          value={priceData?.currentPrice || 0}
          unit={priceData?.unit || 'MWh'}
          color="blue"
        />
        <PriceMetric
          label="Avg today"
          value={priceData?.avgPrice || 0}
          unit={priceData?.unit || 'MWh'}
          color="white"
        />
      </div>

      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
        <PriceMetric
          label="Peak price"
          value={priceData?.maxPrice || 0}
          unit={priceData?.unit || 'MWh'}
          color="red"
        />
        <PriceMetric
          label="Low price"
          value={priceData?.minPrice || 0}
          unit={priceData?.unit || 'MWh'}
          color="green"
        />
      </div>

      {/* Footer */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full pt-[8px] border-t border-[rgba(37,53,79,0.5)]">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Congestion income data for April 20, 2026
        </p>
        <a
          href="https://transparency.entsoe.eu/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0 hover:bg-[rgba(22,32,51,0.28)] transition-colors cursor-pointer"
        >
          <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            ENTSO-E
          </p>
        </a>
      </div>
    </div>
  );
}
