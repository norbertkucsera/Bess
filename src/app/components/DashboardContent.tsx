import svgPaths from '../../imports/GridAwareAiEnergyBuyingDashboard/svg-ei92vwap21';
import { useState } from 'react';

interface DashboardContentProps {
  selectedPortfolio: string;
  setSelectedPortfolio: (portfolio: string) => void;
}

function TitleStack() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 whitespace-nowrap">
      <p className="font-['Sora:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#ecf4ff] text-[30px]">Energy Buying Dashboard</p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[14px]">AI-powered recommendation for tomorrow's energy position</p>
    </div>
  );
}

function Pill({ label, color = 'blue', dot = false }: { label: string; color?: 'blue' | 'green' | 'teal' | 'gray'; dot?: boolean }) {
  const colors = {
    blue: 'bg-[rgba(68,180,255,0.14)] border-[rgba(45,65,95,0.55)] text-[#ecf4ff]',
    green: 'bg-[rgba(59,217,164,0.14)] border-[rgba(59,217,164,0.55)] text-[#3bd9a4]',
    teal: 'bg-[rgba(41,199,194,0.14)] border-[rgba(45,65,95,0.55)] text-[#ecf4ff]',
    gray: 'bg-[rgba(22,32,51,0.14)] border-[rgba(45,65,95,0.55)] text-[#a5b9d9]',
  };

  return (
    <div className={`${colors[color]} content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[999px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity`}>
      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[999px] ${colors[color].split(' ')[1]}`} />
      {dot && (
        <div className="relative shrink-0 size-[8px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="#3BD9A4" r="4" />
          </svg>
        </div>
      )}
      <p className={`font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[12px] whitespace-nowrap ${colors[color].split(' ').pop()}`}>
        {label}
      </p>
    </div>
  );
}

function Controls({ selectedPortfolio, setSelectedPortfolio }: { selectedPortfolio: string; setSelectedPortfolio: (p: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const portfolios = ['Portfolio North-East', 'Cluj Portfolio', 'Bucharest Portfolio'];

  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0">
      <Pill label="Tomorrow" color="blue" />
      <div className="relative">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Pill label={selectedPortfolio} color="teal" />
        </button>
        {isOpen && (
          <div className="absolute top-full mt-2 bg-[#162033] border border-[#25354f] rounded-[12px] p-2 min-w-[180px] z-50">
            {portfolios.map((p) => (
              <button
                key={p}
                onClick={() => {
                  setSelectedPortfolio(p);
                  setIsOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-[#ecf4ff] text-[12px] hover:bg-[rgba(59,217,164,0.14)] rounded-[8px] transition-colors"
              >
                {p}
              </button>
            ))}
          </div>
        )}
      </div>
      <Pill label="Live data connected" color="green" dot />
      <Pill label="Updated 11:44 EEST" color="gray" />
    </div>
  );
}

function Header({ selectedPortfolio, setSelectedPortfolio }: { selectedPortfolio: string; setSelectedPortfolio: (p: string) => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <TitleStack />
      <Controls selectedPortfolio={selectedPortfolio} setSelectedPortfolio={setSelectedPortfolio} />
    </div>
  );
}

function HeroBackdrop() {
  return (
    <div className="absolute h-[312px] left-0 top-0 w-full">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1416 312">
        <g clipPath="url(#clip0_hero)">
          <path d={svgPaths.p88b7f80} fill="url(#paint0_linear_hero)" />
          <path d={svgPaths.p1441e000} stroke="#43B4FF" strokeDasharray="8 8" strokeOpacity="0.22" strokeWidth="2" />
          <path d="M40 272H1376" stroke="#97B8D9" strokeOpacity="0.12" />
          <path d="M40 40V272" stroke="#97B8D9" strokeOpacity="0.12" />
          <path d={svgPaths.p2f8c2100} fill="#3BD9A4" fillOpacity="0.12" />
          <path d={svgPaths.p14e3ca80} fill="#3BD9A4" />
          <path d={svgPaths.p3f4c6b00} fill="#43B4FF" fillOpacity="0.85" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_hero" x1="0" x2="1416" y1="0" y2="312">
            <stop stopColor="#0F1C30" />
            <stop offset="1" stopColor="#0A1322" />
          </linearGradient>
          <clipPath id="clip0_hero">
            <rect fill="white" height="312" width="1416" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HeroMetric() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative z-10 transition-transform cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: isHovered ? 'scale(1.02)' : 'scale(1)' }}
    >
      <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0">
        <Pill label="Recommended purchase for tomorrow" color="blue" />
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
          <p className="font-['Sora:Bold',sans-serif] font-bold leading-[0.9] relative shrink-0 text-[#ecf4ff] text-[82px] whitespace-nowrap">
            Buy 154.3 MWh
          </p>
          <div className="content-stretch flex gap-[14px] items-center justify-center relative shrink-0">
            <Pill label="87% confidence" color="green" dot />
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[14px] whitespace-nowrap">
              Tomorrow looks stable, but evening price pressure remains elevated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero({ selectedPortfolio, setSelectedPortfolio }: { selectedPortfolio: string; setSelectedPortfolio: (p: string) => void }) {
  return (
    <div className="relative w-full">
      <HeroBackdrop />
      <div className="relative z-10 content-stretch flex flex-col gap-[30px] items-start px-[40px] py-[38px]">
        <Header selectedPortfolio={selectedPortfolio} setSelectedPortfolio={setSelectedPortfolio} />
        <HeroMetric />
      </div>
    </div>
  );
}

function MetricCard({ title, value, unit, change, changeType = 'positive' }: { title: string; value: string; unit: string; change?: string; changeType?: 'positive' | 'negative' | 'neutral' }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-[#0f1c30] relative rounded-[20px] shrink-0 flex-1 min-w-[200px] cursor-pointer transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 8px 24px rgba(59, 217, 164, 0.15)' : 'none',
      }}
    >
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[13px] tracking-[0.26px] whitespace-nowrap">
          {title}
        </p>
        <div className="flex items-baseline gap-[8px]">
          <p className="font-['Sora:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#ecf4ff] text-[32px] whitespace-nowrap">
            {value}
          </p>
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[16px]">
            {unit}
          </p>
        </div>
        {change && (
          <p className={`font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[13px] ${
            changeType === 'positive' ? 'text-[#3bd9a4]' : changeType === 'negative' ? 'text-[#ff6b6b]' : 'text-[#a5b9d9]'
          }`}>
            {change}
          </p>
        )}
      </div>
    </div>
  );
}

function MetricsRow() {
  return (
    <div className="flex gap-[16px] w-full flex-wrap">
      <MetricCard title="Expected consumption" value="178.5" unit="MWh" change="+2.3% from average" changeType="neutral" />
      <MetricCard title="Avg. price forecast" value="€45.20" unit="/MWh" change="-8.5% vs today" changeType="positive" />
      <MetricCard title="Storage capacity" value="220" unit="MWh" change="85% available" changeType="positive" />
      <MetricCard title="Potential savings" value="€2,840" unit="" change="+12% vs spot" changeType="positive" />
    </div>
  );
}

function ChartCard({ title, children, height = '300px' }: { title: string; children: React.ReactNode; height?: string }) {
  return (
    <div className="bg-[#0f1c30] relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative size-full">
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[16px]">
          {title}
        </p>
        <div style={{ height }} className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

function PriceChart() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const prices = [42, 38, 35, 33, 32, 35, 42, 55, 68, 72, 65, 58, 52, 48, 45, 50, 58, 75, 82, 78, 68, 58, 50, 45];

  return (
    <div className="relative w-full h-full flex items-end gap-[6px] px-[20px] pb-[30px]">
      {hours.map((hour, i) => {
        const height = (prices[i] / Math.max(...prices)) * 100;
        const isHovered = hoveredIndex === i;
        return (
          <div key={hour} className="flex-1 flex flex-col items-center gap-[8px]">
            <div
              className="relative w-full rounded-t-[4px] transition-all cursor-pointer"
              style={{
                height: `${height}%`,
                background: isHovered
                  ? 'linear-gradient(180deg, #3BD9A4 0%, rgba(59, 217, 164, 0.3) 100%)'
                  : 'linear-gradient(180deg, rgba(68, 180, 255, 0.6) 0%, rgba(68, 180, 255, 0.15) 100%)',
                opacity: isHovered ? 1 : 0.85,
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {isHovered && (
                <div className="absolute -top-[32px] left-1/2 -translate-x-1/2 bg-[#162033] border border-[#3bd9a4] rounded-[8px] px-[8px] py-[4px] whitespace-nowrap text-[#ecf4ff] text-[11px] font-['IBM_Plex_Sans:Medium',sans-serif]">
                  €{prices[i]}/MWh
                </div>
              )}
            </div>
            {hour % 3 === 0 && (
              <p className="text-[#7c93b4] text-[10px] font-['IBM_Plex_Sans:Medium',sans-serif]">{hour}:00</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

function ConsumptionChart() {
  return (
    <div className="relative w-full h-full">
      <svg className="w-full h-full" viewBox="0 0 660 80" preserveAspectRatio="none">
        <defs>
          <linearGradient id="consumptionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3BD9A4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3BD9A4" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path d={svgPaths.p11322f00} stroke="#3BD9A4" strokeWidth="2.5" fill="none" />
        <path d={svgPaths.p11322f00 + " L660,80 L0,80 Z"} fill="url(#consumptionGradient)" />
      </svg>
      <div className="absolute bottom-[10px] left-[20px] flex gap-[20px]">
        <div className="flex items-center gap-[8px]">
          <div className="w-[12px] h-[3px] bg-[#3BD9A4] rounded-full" />
          <p className="text-[#a5b9d9] text-[11px] font-['IBM_Plex_Sans:Medium',sans-serif]">Forecast</p>
        </div>
      </div>
    </div>
  );
}

function RecommendationsTable() {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const recommendations = [
    { time: '02:00-06:00', action: 'Buy', amount: '45.2 MWh', price: '€32.50', confidence: '92%', status: 'optimal' },
    { time: '11:00-14:00', action: 'Buy', amount: '62.8 MWh', price: '€48.20', confidence: '85%', status: 'good' },
    { time: '18:00-20:00', action: 'Hold', amount: '-', price: '€75.80', confidence: '78%', status: 'caution' },
    { time: '21:00-23:00', action: 'Buy', amount: '46.3 MWh', price: '€52.40', confidence: '88%', status: 'good' },
  ];

  return (
    <div className="w-full">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#25354f]">
            <th className="text-left pb-[12px] px-[12px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] font-medium">Time</th>
            <th className="text-left pb-[12px] px-[12px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] font-medium">Action</th>
            <th className="text-left pb-[12px] px-[12px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] font-medium">Amount</th>
            <th className="text-left pb-[12px] px-[12px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] font-medium">Price</th>
            <th className="text-left pb-[12px] px-[12px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] font-medium">Confidence</th>
          </tr>
        </thead>
        <tbody>
          {recommendations.map((rec, i) => (
            <tr
              key={i}
              className={`border-b border-[#25354f] cursor-pointer transition-colors ${
                selectedRow === i ? 'bg-[rgba(59,217,164,0.08)]' : 'hover:bg-[rgba(68,180,255,0.05)]'
              }`}
              onClick={() => setSelectedRow(selectedRow === i ? null : i)}
            >
              <td className="py-[14px] px-[12px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[#ecf4ff] text-[13px]">{rec.time}</td>
              <td className="py-[14px] px-[12px]">
                <span className={`font-['IBM_Plex_Sans:Bold',sans-serif] text-[13px] ${
                  rec.action === 'Buy' ? 'text-[#3bd9a4]' : 'text-[#a5b9d9]'
                }`}>
                  {rec.action}
                </span>
              </td>
              <td className="py-[14px] px-[12px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[#ecf4ff] text-[13px]">{rec.amount}</td>
              <td className="py-[14px] px-[12px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[#a5b9d9] text-[13px]">{rec.price}</td>
              <td className="py-[14px] px-[12px]">
                <div className="flex items-center gap-[8px]">
                  <div className={`w-[6px] h-[6px] rounded-full ${
                    rec.status === 'optimal' ? 'bg-[#3bd9a4]' : rec.status === 'good' ? 'bg-[#44b4ff]' : 'bg-[#ffb84d]'
                  }`} />
                  <span className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#ecf4ff] text-[13px]">{rec.confidence}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DashboardContent({ selectedPortfolio, setSelectedPortfolio }: DashboardContentProps) {
  return (
    <div className="w-full">
      <Hero selectedPortfolio={selectedPortfolio} setSelectedPortfolio={setSelectedPortfolio} />
      <div className="px-[40px] py-[30px] flex flex-col gap-[24px]">
        <MetricsRow />
        <div className="grid grid-cols-2 gap-[24px]">
          <ChartCard title="Tomorrow's Price Forecast (€/MWh)">
            <PriceChart />
          </ChartCard>
          <ChartCard title="Expected Consumption Pattern">
            <ConsumptionChart />
          </ChartCard>
        </div>
        <ChartCard title="AI Buying Recommendations" height="auto">
          <RecommendationsTable />
        </ChartCard>
      </div>
    </div>
  );
}
