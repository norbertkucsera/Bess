function TitleBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap" data-name="TitleBlock">
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.12] relative shrink-0 text-[#ecf4ff] text-[17px]">Weather Impact</p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#7c93b4] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Demand modifiers for tomorrow
      </p>
    </div>
  );
}

function Pill85Demand() {
  return (
    <div className="bg-[rgba(68,180,255,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/+8.5% demand">
      <div aria-hidden="true" className="absolute border border-[rgba(68,180,255,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#44b4ff] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        +8.5% demand
      </p>
    </div>
  );
}

function HeaderWeatherImpact() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header/Weather Impact">
      <TitleBlock />
      <Pill85Demand />
    </div>
  );
}

function MetricTemperature() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] flex-[1_0_0] min-w-px relative rounded-[18px]" data-name="Metric/Temperature">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative size-full whitespace-nowrap">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Temperature
        </p>
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#ecf4ff] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          4°C to 11°C
        </p>
      </div>
    </div>
  );
}

function MetricWindSpeed() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] flex-[1_0_0] min-w-px relative rounded-[18px]" data-name="Metric/Wind speed">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative size-full whitespace-nowrap">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Wind speed
        </p>
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#ecf4ff] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          26 km/h
        </p>
      </div>
    </div>
  );
}

function MetricSolarIrradiation() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] flex-[1_0_0] min-w-px relative rounded-[18px]" data-name="Metric/Solar irradiation">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative size-full whitespace-nowrap">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Solar irradiation
        </p>
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#ecf4ff] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          480 W/m²
        </p>
      </div>
    </div>
  );
}

function MetricGrid() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="MetricGrid">
      <MetricTemperature />
      <MetricWindSpeed />
      <MetricSolarIrradiation />
    </div>
  );
}

function ImpactBox() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[14px] relative rounded-[18px] shrink-0" data-name="Impact Box">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Higher heating demand expected
      </p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[12px] w-[380px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cool morning temperatures increase baseline load before local production ramps up.
      </p>
    </div>
  );
}

function PillColdBias() {
  return (
    <div className="bg-[rgba(68,180,255,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Cold bias">
      <div aria-hidden="true" className="absolute border border-[rgba(68,180,255,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#44b4ff] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cold bias
      </p>
    </div>
  );
}

function PillHeatingLoadUp() {
  return (
    <div className="bg-[rgba(252,189,89,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Heating load up">
      <div aria-hidden="true" className="absolute border border-[rgba(252,189,89,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#fcbd59] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Heating load up
      </p>
    </div>
  );
}

function WeatherScale() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Weather Scale">
      <PillColdBias />
      <PillHeatingLoadUp />
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

function WeatherSources() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Weather Sources">
      <PillWeatherApi />
    </div>
  );
}

export default function WeatherImpact() {
  return (
    <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[18px] relative rounded-[24px] size-full" data-name="Weather Impact">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />
      <HeaderWeatherImpact />
      <MetricGrid />
      <ImpactBox />
      <WeatherScale />
      <WeatherSources />
    </div>
  );
}