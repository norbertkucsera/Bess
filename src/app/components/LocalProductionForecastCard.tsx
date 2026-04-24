import { useState } from 'react';

function MetricCard({
  title,
  value,
  color = 'white',
}: {
  title: string;
  value: string;
  color?: 'white' | 'green';
}) {
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
      <div
        aria-hidden="true"
        className={`absolute border ${isHovered ? 'border-[rgba(59,217,164,0.4)]' : 'border-[rgba(37,53,79,0.8)]'} border-solid inset-0 pointer-events-none rounded-[18px] transition-colors`}
      />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative size-full whitespace-nowrap">
        <p
          className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {title}
        </p>
        <p
          className={`font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 ${color === 'green' ? 'text-[#3bd9a4]' : 'text-[#ecf4ff]'} text-[18px]`}
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

function StatRow({
  label,
  value,
  valueColor = 'text-[#ecf4ff]',
}: {
  label: string;
  value: string;
  valueColor?: string;
}) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p
        className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {label}
      </p>
      <p
        className={`font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[13px] ${valueColor}`}
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {value}
      </p>
    </div>
  );
}

function WeatherDependencyDonut() {
  const [isHovered, setIsHovered] = useState(false);

  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const progress = 0.73;
  const dashOffset = circumference * (1 - progress);

  return (
    <div
      className="bg-[rgba(8,12,22,0.5)] content-stretch flex flex-col items-start justify-center relative rounded-[20px] shrink-0 size-[128px] transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <div
        aria-hidden="true"
        className={`absolute border ${isHovered ? 'border-[rgba(68,180,255,0.45)]' : 'border-[rgba(37,53,79,0.7)]'} border-solid inset-0 pointer-events-none rounded-[20px] transition-colors`}
      />
      <div className="relative flex items-center justify-center size-full">
        <svg className="size-[76px] -rotate-90" viewBox="0 0 76 76" fill="none">
          <circle
            cx="38"
            cy="38"
            r={radius}
            stroke="rgba(67,180,255,0.25)"
            strokeWidth="14"
          />
          <circle
            cx="38"
            cy="38"
            r={radius}
            stroke="#3BD9A4"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="font-['Sora:Bold',sans-serif] font-bold text-[#eaf4ff] text-[18px] leading-none">
            73%
          </p>
          <p
            className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[#7c93b4] text-[11px] leading-[1.2] mt-[6px] text-center"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Weather dependency
          </p>
        </div>
      </div>
    </div>
  );
}

function SourcePill({ label }: { label: string }) {
  return (
    <div className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0 hover:bg-[rgba(22,32,51,0.28)] transition-colors cursor-pointer">
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]"
      />
      <p
        className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {label}
      </p>
    </div>
  );
}

export default function LocalProductionForecastCard() {
  return (
    <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[18px] relative rounded-[24px] size-full">
      <div
        aria-hidden="true"
        className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]"
      />

      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap">
          <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.12] relative shrink-0 text-[#ecf4ff] text-[17px]">
            Local Production Forecast
          </p>
          <p
            className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#7c93b4] text-[12px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Solar, wind and local generation outlook
          </p>
        </div>
        <div className="bg-[rgba(68,180,255,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0">
          <div
            aria-hidden="true"
            className="absolute border border-[rgba(68,180,255,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]"
          />
          <p
            className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#44b4ff] text-[12px] whitespace-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Weather-sensitive
          </p>
        </div>
      </div>

      <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
        <MetricCard title="Solar forecast" value="18.2 MWh" />
        <MetricCard title="Wind forecast" value="9.4 MWh" />
        <MetricCard title="Total local production" value="27.6 MWh" color="green" />
      </div>

      <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
        <WeatherDependencyDonut />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px relative self-stretch">
          <StatRow label="Morning solar ramp" value="Strong from 09:00" />
          <StatRow label="Wind confidence" value="Moderate" />
          <StatRow label="AI view" value="Use local first" valueColor="text-[#3bd9a4]" />
        </div>
      </div>

      <div className="content-stretch flex items-start relative shrink-0">
        <SourcePill label="Weather API" />
      </div>
    </div>
  );
}
