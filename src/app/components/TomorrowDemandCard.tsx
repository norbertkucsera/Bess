import { useState } from 'react';
import svgPaths from '../../imports/TomorrowDemandForecast/svg-pp7b5v0m87';
import { TimeHorizon } from '../types';

function MetricCard({ title, value, color = 'white' }: { title: string; value: string; color?: 'white' | 'green' }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-[rgba(22,32,51,0.74)] flex-[1_0_0] min-w-px relative rounded-[18px] transition-all cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <div aria-hidden="true" className={`absolute border ${isHovered ? 'border-[rgba(59,217,164,0.4)]' : 'border-[rgba(37,53,79,0.8)]'} border-solid inset-0 pointer-events-none rounded-[18px] transition-colors`} />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative size-full whitespace-nowrap">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {title}
        </p>
        <p className={`font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 ${color === 'green' ? 'text-[#3bd9a4]' : 'text-[#ecf4ff]'} text-[18px]`} style={{ fontVariationSettings: "'wdth' 100" }}>
          {value}
        </p>
      </div>
    </div>
  );
}

function DemandChart() {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  return (
    <div className="bg-[rgba(8,12,22,0.5)] content-stretch flex flex-col h-[162px] items-start relative rounded-[18px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.7)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="h-[162px] overflow-clip relative shrink-0 w-full">
        {/* Background */}
        <div className="absolute inset-[0.31%_0.07%]">
          <div className="absolute inset-[-0.31%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 764 162">
              <path d={svgPaths.p27f24600} fill="#060F1C" fillOpacity="0.18" stroke="#445F84" strokeOpacity="0.55" />
            </svg>
          </div>
        </div>

        {/* Grid lines */}
        <div className="absolute inset-[77.78%_6.81%_22.22%_6.81%]">
          <div className="absolute inset-[-0.5px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 660 1">
              <path d="M0 0.5H660" stroke="#94B1D1" strokeOpacity="0.18" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[59.26%_6.81%_40.74%_6.81%]">
          <div className="absolute inset-[-0.5px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 660 1">
              <path d="M0 0.5H660" stroke="#94B1D1" strokeDasharray="4 6" strokeOpacity="0.12" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[40.74%_6.81%_59.26%_6.81%]">
          <div className="absolute inset-[-0.5px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 660 1">
              <path d="M0 0.5H660" stroke="#94B1D1" strokeDasharray="4 6" strokeOpacity="0.12" />
            </svg>
          </div>
        </div>

        {/* Area fill */}
        <div className="absolute inset-[28.8%_6.81%_22.22%_6.81%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 660 79.3406">
            <path d={svgPaths.p11322f00} fill="url(#paint0_linear_demand)" opacity="0.9" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_demand" x1="330" x2="330" y1="-12.6594" y2="79.3406">
                <stop stopColor="#43B4FF" stopOpacity="0.28" />
                <stop offset="1" stopColor="#43B4FF" stopOpacity="0.01" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Main line */}
        <div className="absolute inset-[28.8%_6.81%_22.22%_6.81%]">
          <div className="absolute inset-[-2.21%_-0.27%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 663.5 82.8406">
              <path d={svgPaths.p2fae9b00} stroke="#43B4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
            </svg>
          </div>
        </div>

        {/* Green accent line */}
        <div className="absolute inset-[29.01%_6.81%_29.63%_73.3%]">
          <div className="absolute inset-[-2.24%_-0.99%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 70.0004">
              <path d={svgPaths.p2f496b00} stroke="#3BD9A4" strokeDasharray="6 7" strokeLinecap="round" strokeOpacity="0.9" strokeWidth="3" />
            </svg>
          </div>
        </div>

        {/* Peak indicator circle */}
        <div className="absolute inset-[24.69%_25.79%_66.67%_72.38%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p3296bc80} fill="#3BD9A4" />
          </svg>
        </div>
        <div className="absolute inset-[19.75%_24.74%_61.73%_71.34%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
            <path d={svgPaths.p7c58b00} fill="#3BD9A4" fillOpacity="0.14" />
          </svg>
        </div>

        {/* Labels */}
        <p className="absolute font-['IBM_Plex_Sans:Bold',sans-serif] font-bold inset-[17.9%_19.5%_72.22%_74.87%] leading-[normal] text-[#eaf4ff] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          9.8 MW
        </p>
        <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal inset-[27.78%_15.18%_63.58%_74.87%] leading-[normal] text-[#a0b8d9] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Peak hour zone
        </p>
        <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal inset-[83.33%_89.27%_8.02%_6.81%] leading-[normal] text-[#7c93b4] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          00:00
        </p>
        <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal inset-[83.33%_56.81%_8.02%_39.27%] leading-[normal] text-[#7c93b4] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          12:00
        </p>
        <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal inset-[83.33%_12.3%_8.02%_83.77%] leading-[normal] text-[#7c93b4] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          23:00
        </p>
      </div>
    </div>
  );
}

function SourcePill({ label }: { label: string }) {
  return (
    <div className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0 hover:bg-[rgba(22,32,51,0.28)] transition-colors cursor-pointer">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {label}
      </p>
    </div>
  );
}

export default function TomorrowDemandCard({ timeHorizon }: { timeHorizon: TimeHorizon }) {
  const headerLabel = timeHorizon === 'Tomorrow' ? 'Tomorrow Demand Forecast' : timeHorizon === 'Next Week' ? 'Weekly Demand Forecast' : 'Monthly Demand Forecast';
  const description = timeHorizon === 'Tomorrow'
    ? 'Based on historical consumption, weather, calendar and events'
    : timeHorizon === 'Next Week'
    ? 'Weekly demand forecast for energy procurement planning'
    : 'Monthly aggregated demand view with event and weather signals';

  return (
    <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[18px] relative rounded-[24px] size-full">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />

      {/* Header */}
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap">
          <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.12] relative shrink-0 text-[#ecf4ff] text-[17px]">
            {headerLabel}
          </p>
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#7c93b4] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {description}
          </p>
        </div>
        <div className="bg-[rgba(68,180,255,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[rgba(68,180,255,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#44b4ff] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Peak 18:00-21:00
          </p>
        </div>
      </div>

      {/* Metrics */}
      <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
        <MetricCard title="Forecasted peak" value="9.8 MW" />
        <MetricCard title="Total forecasted demand" value="142 MWh" />
        <MetricCard title="Confidence" value="91%" color="green" />
      </div>

      {/* Chart */}
      <DemandChart />

      {/* Footer */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[12px] w-[430px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Peak demand highlighted for the evening ramp when heating load and local events overlap.
        </p>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
          <SourcePill label="Historical consumption" />
          <SourcePill label="Weather API" />
          <SourcePill label="Local Events AI" />
        </div>
      </div>
    </div>
  );
}
