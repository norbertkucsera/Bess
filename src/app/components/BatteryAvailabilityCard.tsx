import { useState } from 'react';
import svgPaths from '../../imports/BatteryAvailability/svg-2aay79c73u';

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

function SecondaryMetric({ title, value }: { title: string; value: string }) {
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
      <div className="content-stretch flex flex-col gap-[6px] items-start leading-[1.2] px-[14px] py-[12px] relative size-full">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          {title}
        </p>
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#ecf4ff] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {value}
        </p>
      </div>
    </div>
  );
}

function BatteryMiniChart() {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  // Define the battery schedule bars
  const bars = [
    { type: 'charge', height: 18, color: '#43B4FF', opacity: 0.5 },
    { type: 'charge', height: 28, color: '#43B4FF', opacity: 0.7 },
    { type: 'charge', height: 36, color: '#43B4FF', opacity: 0.85 },
    { type: 'charge', height: 42, color: '#43B4FF', opacity: 1 },
    { type: 'discharge', height: 32, color: '#3BD9A4', opacity: 0.65 },
    { type: 'discharge', height: 18, color: '#3BD9A4', opacity: 0.45 },
    { type: 'reserve', height: 48, color: '#F7BC59', opacity: 0.9 },
    { type: 'reserve', height: 54, color: '#F7BC59', opacity: 1 },
    { type: 'reserve', height: 44, color: '#F7BC59', opacity: 0.95 },
  ];

  return (
    <div className="bg-[rgba(8,12,22,0.5)] content-stretch flex flex-col h-[96px] items-start relative rounded-[18px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.7)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="h-[96px] overflow-clip relative shrink-0 w-full">
        {/* Background */}
        <div className="absolute inset-[0.52%_0.09%]">
          <div className="absolute inset-[-0.53%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 552 96">
              <path d={svgPaths.p263b5b00} fill="#060F1C" fillOpacity="0.18" stroke="#445F84" strokeOpacity="0.55" />
            </svg>
          </div>
        </div>

        {/* Bars */}
        <div className="absolute inset-[54.17%_87.68%_27.08%_5.07%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 18">
            <path d={svgPaths.p235a3b80} fill="#43B4FF" fillOpacity="0.5" />
          </svg>
        </div>
        <div className="absolute inset-[43.75%_77.9%_27.08%_14.86%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 28">
            <path d={svgPaths.p35fd200} fill="#43B4FF" fillOpacity="0.7" />
          </svg>
        </div>
        <div className="absolute inset-[35.42%_68.12%_27.08%_24.64%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 36">
            <path d={svgPaths.p386bb8f0} fill="#43B4FF" fillOpacity="0.85" />
          </svg>
        </div>
        <div className="absolute inset-[29.17%_58.33%_27.08%_34.42%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 42">
            <path d={svgPaths.pa230800} fill="#43B4FF" />
          </svg>
        </div>
        <div className="absolute inset-[39.58%_48.55%_27.08%_44.2%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 32">
            <path d={svgPaths.p2076ba00} fill="#3BD9A4" fillOpacity="0.65" />
          </svg>
        </div>
        <div className="absolute inset-[54.17%_38.77%_27.08%_53.99%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 18">
            <path d={svgPaths.p235a3b80} fill="#3BD9A4" fillOpacity="0.45" />
          </svg>
        </div>
        <div className="absolute inset-[22.92%_28.99%_27.08%_63.77%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 48">
            <path d={svgPaths.p1e564280} fill="#F7BC59" fillOpacity="0.9" />
          </svg>
        </div>
        <div className="absolute inset-[16.67%_19.2%_27.08%_73.55%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 54">
            <path d={svgPaths.p1857f040} fill="#F7BC59" />
          </svg>
        </div>
        <div className="absolute inset-[27.08%_9.42%_27.08%_83.33%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 44">
            <path d={svgPaths.p293cbfb0} fill="#F7BC59" fillOpacity="0.95" />
          </svg>
        </div>

        {/* Labels */}
        <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal inset-[76.04%_88.59%_9.38%_5.07%] leading-[normal] text-[#7c93b4] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Charge
        </p>
        <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal inset-[76.04%_27.36%_9.38%_63.77%] leading-[normal] text-[#7c93b4] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Discharge
        </p>
        <p className="absolute font-['IBM_Plex_Sans:Bold',sans-serif] font-bold inset-[7.29%_6.52%_78.13%_74.28%] leading-[normal] text-[#eaf4ff] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          18:00-21:00 reserve
        </p>
      </div>
    </div>
  );
}

export default function BatteryAvailabilityCard() {
  return (
    <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[18px] relative rounded-[24px] size-full">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />

      {/* Header */}
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap">
          <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.12] relative shrink-0 text-[#ecf4ff] text-[17px]">
            Battery Availability
          </p>
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#7c93b4] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Connected via Withthegrid
          </p>
        </div>
        <div className="bg-[rgba(59,217,164,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[rgba(59,217,164,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#3bd9a4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Ready to discharge
          </p>
        </div>
      </div>

      {/* Primary Metrics */}
      <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
        <MetricCard title="Total battery capacity" value="38 MWh" />
        <MetricCard title="Current state of charge" value="64%" color="green" />
        <MetricCard title="Available discharge" value="21.4 MWh" />
      </div>

      {/* Secondary Metrics */}
      <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
        <SecondaryMetric title="Available charge capacity" value="13.7 MWh" />
        <SecondaryMetric title="Battery status" value="Connected via Withthegrid" />
      </div>

      {/* Battery Mini Chart */}
      <BatteryMiniChart />

      {/* Footer */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[12px] w-[330px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Charge overnight when prices are low, preserve the best discharge window for the evening peak.
        </p>
        <div className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0 hover:bg-[rgba(22,32,51,0.28)] transition-colors cursor-pointer">
          <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Withthegrid
          </p>
        </div>
      </div>
    </div>
  );
}
