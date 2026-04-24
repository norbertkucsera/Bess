import svgPaths from "./svg-pp7b5v0m87";

function TitleBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap" data-name="TitleBlock">
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.12] relative shrink-0 text-[#ecf4ff] text-[17px]">Tomorrow Demand Forecast</p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#7c93b4] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Based on historical consumption, weather, calendar and events
      </p>
    </div>
  );
}

function PillPeak() {
  return (
    <div className="bg-[rgba(68,180,255,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Peak 18:00-21:00">
      <div aria-hidden="true" className="absolute border border-[rgba(68,180,255,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#44b4ff] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Peak 18:00-21:00
      </p>
    </div>
  );
}

function HeaderTomorrowDemandForecast() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header/Tomorrow Demand Forecast">
      <TitleBlock />
      <PillPeak />
    </div>
  );
}

function MetricForecastedPeak() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] flex-[1_0_0] min-w-px relative rounded-[18px]" data-name="Metric/Forecasted peak">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative size-full whitespace-nowrap">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Forecasted peak
        </p>
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#ecf4ff] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          9.8 MW
        </p>
      </div>
    </div>
  );
}

function MetricTotalForecastedDemand() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] flex-[1_0_0] min-w-px relative rounded-[18px]" data-name="Metric/Total forecasted demand">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative size-full whitespace-nowrap">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Total forecasted demand
        </p>
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#ecf4ff] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          142 MWh
        </p>
      </div>
    </div>
  );
}

function MetricConfidence() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] flex-[1_0_0] min-w-px relative rounded-[18px]" data-name="Metric/Confidence">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative size-full whitespace-nowrap">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Confidence
        </p>
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#3bd9a4] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          91%
        </p>
      </div>
    </div>
  );
}

function MetricGrid() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="MetricGrid">
      <MetricForecastedPeak />
      <MetricTotalForecastedDemand />
      <MetricConfidence />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[162px] overflow-clip relative shrink-0 w-[764px]" data-name="Frame">
      <div className="absolute inset-[0.31%_0.07%]" data-name="Vector">
        <div className="absolute inset-[-0.31%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 764 162">
            <path d={svgPaths.p27f24600} fill="var(--fill-0, #060F1C)" fillOpacity="0.18" id="Vector" stroke="var(--stroke-0, #445F84)" strokeOpacity="0.55" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[77.78%_6.81%_22.22%_6.81%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 660 1">
            <path d="M0 0.5H660" id="Vector" stroke="var(--stroke-0, #94B1D1)" strokeOpacity="0.18" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[59.26%_6.81%_40.74%_6.81%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 660 1">
            <path d="M0 0.5H660" id="Vector" stroke="var(--stroke-0, #94B1D1)" strokeDasharray="4 6" strokeOpacity="0.12" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[40.74%_6.81%_59.26%_6.81%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 660 1">
            <path d="M0 0.5H660" id="Vector" stroke="var(--stroke-0, #94B1D1)" strokeDasharray="4 6" strokeOpacity="0.12" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[28.8%_6.81%_22.22%_6.81%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 660 79.3406">
          <path d={svgPaths.p11322f00} fill="url(#paint0_linear_1_574)" id="Vector" opacity="0.9" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_574" x1="330" x2="330" y1="-12.6594" y2="79.3406">
              <stop stopColor="#43B4FF" stopOpacity="0.28" />
              <stop offset="1" stopColor="#43B4FF" stopOpacity="0.01" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[28.8%_6.81%_22.22%_6.81%]" data-name="Vector">
        <div className="absolute inset-[-2.21%_-0.27%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 663.5 82.8406">
            <path d={svgPaths.p2fae9b00} id="Vector" stroke="var(--stroke-0, #43B4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.01%_6.81%_29.63%_73.3%]" data-name="Vector">
        <div className="absolute inset-[-2.24%_-0.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 70.0004">
            <path d={svgPaths.p2f496b00} id="Vector" stroke="var(--stroke-0, #3BD9A4)" strokeDasharray="6 7" strokeLinecap="round" strokeOpacity="0.9" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[24.69%_25.79%_66.67%_72.38%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p3296bc80} fill="var(--fill-0, #3BD9A4)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[19.75%_24.74%_61.73%_71.34%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <path d={svgPaths.p7c58b00} fill="var(--fill-0, #3BD9A4)" fillOpacity="0.14" id="Vector" />
        </svg>
      </div>
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
  );
}

function DemandChart() {
  return (
    <div className="bg-[rgba(8,12,22,0.5)] content-stretch flex flex-col h-[162px] items-start relative rounded-[18px] shrink-0 w-[764px]" data-name="Demand Chart">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.7)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Frame />
    </div>
  );
}

function PillHistoricalConsumption() {
  return (
    <div className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Historical consumption">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Historical consumption
      </p>
    </div>
  );
}

function PillWeatherApi() {
  return (
    <div className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Weather API">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Weather API
      </p>
    </div>
  );
}

function PillLocalEventsAi() {
  return (
    <div className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Local Events AI">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Local Events AI
      </p>
    </div>
  );
}

function DemandSources() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Demand Sources">
      <PillHistoricalConsumption />
      <PillWeatherApi />
      <PillLocalEventsAi />
    </div>
  );
}

function DemandFooter() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Demand Footer">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[12px] w-[430px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Peak demand highlighted for the evening ramp when heating load and local events overlap.
      </p>
      <DemandSources />
    </div>
  );
}

export default function TomorrowDemandForecast() {
  return (
    <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[18px] relative rounded-[24px] size-full" data-name="Tomorrow Demand Forecast">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />
      <HeaderTomorrowDemandForecast />
      <MetricGrid />
      <DemandChart />
      <DemandFooter />
    </div>
  );
}