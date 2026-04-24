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
  const [isDragging, setIsDragging] = useState(false);
  const [dragPoint, setDragPoint] = useState<number | null>(null);

  if (data.length === 0) return null;

  const validPrices = data.map(d => d.price).filter(p => p > 0);
  const minPrice = Math.min(...validPrices);
  const maxPrice = Math.max(...validPrices);
  const priceRange = maxPrice - minPrice;
  const currentHour = new Date().getHours();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const index = Math.round(percentage * (data.length - 1));

    if (index >= 0 && index < data.length) {
      if (isDragging) {
        setDragPoint(index);
      }
      setHoveredPoint(index);
    }
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragPoint(null);
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      setHoveredPoint(null);
    }
  };

  const displayPoint = dragPoint !== null ? dragPoint : hoveredPoint;

  return (
    <div className="bg-[rgba(8,12,22,0.5)] content-stretch relative rounded-[18px] w-full h-[140px]">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.7)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div
        className="relative w-full h-full p-[16px] cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
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
          {currentHour < data.length && displayPoint !== currentHour && (
            <line
              x1={(currentHour / (data.length - 1)) * 100}
              y1="0"
              x2={(currentHour / (data.length - 1)) * 100}
              y2="100"
              stroke="#3BD9A4"
              strokeWidth="0.5"
              strokeDasharray="2,2"
              opacity="0.4"
            />
          )}
          {/* Hovered/Dragged hour indicator */}
          {displayPoint !== null && (
            <line
              x1={(displayPoint / (data.length - 1)) * 100}
              y1="0"
              x2={(displayPoint / (data.length - 1)) * 100}
              y2="100"
              stroke="#3BD9A4"
              strokeWidth="0.8"
              strokeDasharray="2,2"
              opacity="0.8"
            />
          )}
          {/* Points */}
          {data.map((d, i) => {
            const isActive = displayPoint === i;
            const isCurrent = i === currentHour;
            return (
              <circle
                key={i}
                cx={(i / (data.length - 1)) * 100}
                cy={100 - ((d.price - minPrice) / priceRange) * 80}
                r={isActive ? "1.8" : isCurrent ? "1.2" : "0.6"}
                fill={isActive ? "#3BD9A4" : isCurrent ? "#3BD9A4" : "#44B4FF"}
                style={{ transition: 'all 0.15s' }}
              />
            );
          })}
        </svg>
        {displayPoint !== null && data[displayPoint] && (
          <div
            className="absolute bg-[#162033] border border-[#44b4ff] rounded-[8px] px-[12px] py-[8px] pointer-events-none z-10 shadow-lg"
            style={{
              left: `${(displayPoint / (data.length - 1)) * 100}%`,
              top: `${Math.max(10, 100 - ((data[displayPoint].price - minPrice) / priceRange) * 80)}%`,
              transform: 'translate(-50%, -120%)',
            }}
          >
            <p className="text-[#ecf4ff] text-[11px] font-['IBM_Plex_Sans:Bold',sans-serif] mb-[2px]">
              {String(displayPoint).padStart(2, '0')}:00 {displayPoint === currentHour ? '(Now)' : ''}
            </p>
            <p className="text-[#44b4ff] text-[13px] font-['IBM_Plex_Sans:Bold',sans-serif]">
              €{data[displayPoint].price.toFixed(2)}/MWh
            </p>
            <p className="text-[#7c93b4] text-[10px] font-['IBM_Plex_Sans:Regular',sans-serif] mt-[2px]">
              {isDragging ? 'Dragging...' : 'Click & drag'}
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
        // Fetch CSV data from public directory
        const response = await fetch('/energy-prices.csv');

        if (!response.ok) {
          throw new Error('Failed to load price data');
        }

        const csvText = await response.text();
        const lines = csvText.split('\n').slice(3); // Skip first 3 lines (disclaimer, header, units)

        // Parse CSV and aggregate by hour
        const hourlyData: { [hour: number]: number[] } = {};
        let parsedCount = 0;

        lines.forEach(line => {
          if (!line.trim()) return;

          // Split by comma (simple approach for this CSV format)
          const parts = line.split(',');
          if (parts.length < 5) return;

          const dateTimeStr = parts[0];
          const priceStr = parts[4];
          const price = parseFloat(priceStr);

          if (!dateTimeStr || isNaN(price) || price <= 0) {
            return;
          }

          // Extract hour from ISO datetime like "2026-04-20T14:00+03:00"
          const hourMatch = dateTimeStr.match(/T(\d{2}):/);
          if (!hourMatch) {
            return;
          }

          const hour = parseInt(hourMatch[1]);

          if (!hourlyData[hour]) {
            hourlyData[hour] = [];
          }
          hourlyData[hour].push(price);
          parsedCount++;
        });

        console.log(`Parsed ${parsedCount} price entries from CSV`);

        // Calculate average for each hour
        const hourlyPrices = Array.from({ length: 24 }, (_, hour) => {
          const values = hourlyData[hour] || [];
          const avg = values.length > 0
            ? values.reduce((a, b) => a + b, 0) / values.length
            : 0;
          return {
            hour,
            price: parseFloat(avg.toFixed(2)),
          };
        });

        console.log('Hourly data:', Object.keys(hourlyData).length, 'hours with data');
        const validPrices = hourlyPrices.map(h => h.price).filter(p => p > 0);
        console.log('Valid prices:', validPrices.length, 'out of', hourlyPrices.length);

        // Ensure we have valid data
        if (validPrices.length === 0) {
          console.error('Hourly prices:', hourlyPrices);
          throw new Error('No valid price data found in CSV');
        }

        const avgPrice = validPrices.reduce((a, b) => a + b, 0) / validPrices.length;
        const maxPrice = Math.max(...validPrices);
        const minPrice = Math.min(...validPrices);
        const currentHour = new Date().getHours();
        const currentPrice = hourlyPrices[currentHour]?.price > 0 ? hourlyPrices[currentHour].price : avgPrice;

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
            Romania day-ahead electricity auction prices
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
          Romania week 17, 2026 - Energy-Charts data
        </p>
        <a
          href="https://energy-charts.info/charts/price_spot_market/chart.htm?l=en&c=RO"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0 hover:bg-[rgba(22,32,51,0.28)] transition-colors cursor-pointer"
        >
          <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Energy-Charts
          </p>
        </a>
      </div>
    </div>
  );
}
