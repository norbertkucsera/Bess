import { useState } from 'react';
import { TimeHorizon } from '../types';

function Header({ timeHorizon }: { timeHorizon: TimeHorizon }) {
  return (
    <div className="px-[40px] py-[38px]">
      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
        <p className="font-['Sora:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#ecf4ff] text-[30px]">Market Prices</p>
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[14px]">
          {timeHorizon} pricing and spot market trends
        </p>
      </div>
    </div>
  );
}

function LivePriceCard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h');
  const timeframes = ['1h', '6h', '24h', '7d', '30d'];

  return (
    <div className="bg-[#0f1c30] relative rounded-[20px] p-[32px]">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex items-center justify-between mb-[24px]">
        <div>
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] mb-[8px]">Current Spot Price</p>
          <div className="flex items-baseline gap-[12px]">
            <p className="font-['Sora:Bold',sans-serif] text-[#ecf4ff] text-[48px]">€52.40</p>
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[18px]">/MWh</p>
            <div className="flex items-center gap-[6px]">
              <div className="w-[0] h-[0] border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-[#3bd9a4]" />
              <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#3bd9a4] text-[14px]">-8.5%</p>
            </div>
          </div>
        </div>
        <div className="flex gap-[8px]">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => setSelectedTimeframe(tf)}
              className={`px-[16px] py-[8px] rounded-[8px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[12px] transition-all ${
                selectedTimeframe === tf
                  ? 'bg-[rgba(59,217,164,0.24)] text-[#3bd9a4] border border-[rgba(59,217,164,0.4)]'
                  : 'bg-[rgba(124,147,180,0.08)] text-[#a5b9d9] border border-transparent hover:border-[#25354f]'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>
      <div className="h-[200px] relative">
        <PriceTrendChart timeframe={selectedTimeframe} />
      </div>
    </div>
  );
}

function PriceTrendChart({ timeframe }: { timeframe: string }) {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const dataPoints = timeframe === '24h' ? 24 : timeframe === '7d' ? 7 : timeframe === '30d' ? 30 : timeframe === '6h' ? 6 : 12;
  const prices = Array.from({ length: dataPoints }, (_, i) => 30 + Math.random() * 40 + Math.sin(i / 3) * 15);

  return (
    <div className="relative w-full h-full">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="priceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#44B4FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#44B4FF" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path
          d={`M ${prices.map((price, i) => `${(i / (prices.length - 1)) * 100},${100 - ((price - 20) / 60) * 100}`).join(' L ')} L 100,100 L 0,100 Z`}
          fill="url(#priceGradient)"
        />
        <path
          d={`M ${prices.map((price, i) => `${(i / (prices.length - 1)) * 100},${100 - ((price - 20) / 60) * 100}`).join(' L ')}`}
          stroke="#44B4FF"
          strokeWidth="0.5"
          fill="none"
        />
        {prices.map((price, i) => (
          <circle
            key={i}
            cx={(i / (prices.length - 1)) * 100}
            cy={100 - ((price - 20) / 60) * 100}
            r={hoveredPoint === i ? "1.5" : "0.8"}
            fill={hoveredPoint === i ? "#3BD9A4" : "#44B4FF"}
            onMouseEnter={() => setHoveredPoint(i)}
            onMouseLeave={() => setHoveredPoint(null)}
            style={{ cursor: 'pointer', transition: 'all 0.2s' }}
          />
        ))}
      </svg>
      {hoveredPoint !== null && (
        <div
          className="absolute bg-[#162033] border border-[#44b4ff] rounded-[8px] px-[12px] py-[6px] pointer-events-none"
          style={{
            left: `${(hoveredPoint / (prices.length - 1)) * 100}%`,
            top: `${100 - ((prices[hoveredPoint] - 20) / 60) * 100}%`,
            transform: 'translate(-50%, -120%)',
          }}
        >
          <p className="text-[#ecf4ff] text-[12px] font-['IBM_Plex_Sans:Bold',sans-serif]">€{prices[hoveredPoint].toFixed(2)}/MWh</p>
        </div>
      )}
    </div>
  );
}

function PriceComparisonTable() {
  const [selectedMarket, setSelectedMarket] = useState<number | null>(null);

  const markets = [
    { name: 'Day-Ahead Market', current: '€52.40', avg: '€48.20', peak: '€82.30', low: '€32.50', trend: 'up' },
    { name: 'Intraday Market', current: '€54.10', avg: '€49.80', peak: '€85.20', low: '€34.20', trend: 'up' },
    { name: 'Balancing Market', current: '€48.90', avg: '€52.30', peak: '€78.50', low: '€38.40', trend: 'down' },
  ];

  return (
    <div className="bg-[#0f1c30] relative rounded-[20px] p-[24px]">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] text-[#ecf4ff] text-[16px] mb-[20px]">Market Comparison</p>
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#25354f]">
            <th className="text-left pb-[12px] px-[12px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] font-medium">
              Market
            </th>
            <th className="text-left pb-[12px] px-[12px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] font-medium">
              Current
            </th>
            <th className="text-left pb-[12px] px-[12px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] font-medium">
              24h Avg
            </th>
            <th className="text-left pb-[12px] px-[12px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] font-medium">
              Peak
            </th>
            <th className="text-left pb-[12px] px-[12px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] font-medium">
              Low
            </th>
            <th className="text-left pb-[12px] px-[12px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] font-medium">
              Trend
            </th>
          </tr>
        </thead>
        <tbody>
          {markets.map((market, i) => (
            <tr
              key={i}
              className={`border-b border-[#25354f] cursor-pointer transition-colors ${
                selectedMarket === i ? 'bg-[rgba(68,180,255,0.08)]' : 'hover:bg-[rgba(68,180,255,0.05)]'
              }`}
              onClick={() => setSelectedMarket(selectedMarket === i ? null : i)}
            >
              <td className="py-[14px] px-[12px] font-['IBM_Plex_Sans:Bold',sans-serif] text-[#ecf4ff] text-[13px]">
                {market.name}
              </td>
              <td className="py-[14px] px-[12px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[#ecf4ff] text-[13px]">
                {market.current}
              </td>
              <td className="py-[14px] px-[12px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[#a5b9d9] text-[13px]">
                {market.avg}
              </td>
              <td className="py-[14px] px-[12px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[#ff6b6b] text-[13px]">
                {market.peak}
              </td>
              <td className="py-[14px] px-[12px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[#3bd9a4] text-[13px]">
                {market.low}
              </td>
              <td className="py-[14px] px-[12px]">
                <div className="flex items-center gap-[6px]">
                  {market.trend === 'up' ? (
                    <div className="w-[0] h-[0] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[7px] border-b-[#3bd9a4]" />
                  ) : (
                    <div className="w-[0] h-[0] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-[#ff6b6b]" />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function MarketPricesContent({ timeHorizon }: { timeHorizon: TimeHorizon }) {
  return (
    <div className="w-full">
      <Header timeHorizon={timeHorizon} />
      <div className="px-[40px] pb-[40px] flex flex-col gap-[24px]">
        <LivePriceCard />
        <PriceComparisonTable />
      </div>
    </div>
  );
}
