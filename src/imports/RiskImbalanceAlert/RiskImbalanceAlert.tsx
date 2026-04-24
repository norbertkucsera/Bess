function TitleBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap" data-name="TitleBlock">
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.12] relative shrink-0 text-[#ecf4ff] text-[17px]">{`Risk & Imbalance Alert`}</p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#7c93b4] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        What could move the plan
      </p>
    </div>
  );
}

function PillMediumRisk() {
  return (
    <div className="bg-[rgba(252,189,89,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Medium risk">
      <div aria-hidden="true" className="absolute border border-[rgba(252,189,89,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#fcbd59] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Medium risk
      </p>
    </div>
  );
}

function HeaderRiskImbalanceAlert() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header/Risk & Imbalance Alert">
      <TitleBlock />
      <PillMediumRisk />
    </div>
  );
}

function RiskEveningPeakDemand() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Risk/Evening peak demand">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #FCBD59)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Evening peak demand
      </p>
    </div>
  );
}

function RiskLowerSolarProduction() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Risk/Lower solar production">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #FCBD59)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lower solar production
      </p>
    </div>
  );
}

function RiskHighMarketPriceVolatility() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Risk/High market price volatility">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #FCBD59)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        High market price volatility
      </p>
    </div>
  );
}

function RiskList() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Risk List">
      <RiskEveningPeakDemand />
      <RiskLowerSolarProduction />
      <RiskHighMarketPriceVolatility />
    </div>
  );
}

function Mitigation() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] content-stretch flex flex-col gap-[8px] items-start px-[14px] py-[12px] relative rounded-[18px] shrink-0" data-name="Mitigation">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Suggested mitigation
      </p>
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[15px] w-[252px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Reserve 12 MWh battery capacity for 18:00-21:00.
      </p>
    </div>
  );
}

function PillWiththegrid() {
  return (
    <div className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Withthegrid">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Withthegrid
      </p>
    </div>
  );
}

function PillEnergyPriceApi() {
  return (
    <div className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Energy Price API">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Energy Price API
      </p>
    </div>
  );
}

function RiskSources() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Risk Sources">
      <PillWiththegrid />
      <PillEnergyPriceApi />
    </div>
  );
}

export default function RiskImbalanceAlert() {
  return (
    <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[18px] relative rounded-[24px] size-full" data-name="Risk & Imbalance Alert">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />
      <HeaderRiskImbalanceAlert />
      <RiskList />
      <Mitigation />
      <RiskSources />
    </div>
  );
}