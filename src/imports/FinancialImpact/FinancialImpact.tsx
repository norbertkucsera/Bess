function TitleBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap" data-name="TitleBlock">
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.12] relative shrink-0 text-[#ecf4ff] text-[17px]">Financial Impact</p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#7c93b4] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Value of the AI recommendation
      </p>
    </div>
  );
}

function PillSavingsView() {
  return (
    <div className="bg-[rgba(59,217,164,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Savings view">
      <div aria-hidden="true" className="absolute border border-[rgba(59,217,164,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#3bd9a4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Savings view
      </p>
    </div>
  );
}

function HeaderFinancialImpact() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header/Financial Impact">
      <TitleBlock />
      <PillSavingsView />
    </div>
  );
}

function SavingsHero() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] content-stretch flex flex-col gap-[6px] h-[92px] items-start px-[14px] py-[12px] relative rounded-[18px] shrink-0 w-[300px]" data-name="Savings Hero">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Estimated savings
      </p>
      <p className="font-['Sora:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#3bd9a4] text-[30px] whitespace-nowrap">€14,800</p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tomorrow vs. non-optimized strategy
      </p>
    </div>
  );
}

function AvoidedImbalance() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] content-stretch flex flex-col gap-[6px] h-[68px] items-start px-[14px] py-[12px] relative rounded-[18px] shrink-0 w-[144px]" data-name="Avoided imbalance">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Avoided imbalance
      </p>
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        €6,200
      </p>
    </div>
  );
}

function BatteryValue() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] content-stretch flex flex-col gap-[6px] h-[68px] items-start px-[14px] py-[12px] relative rounded-[18px] shrink-0 w-[144px]" data-name="Battery value">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Battery value
      </p>
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        €8,600
      </p>
    </div>
  );
}

function SplitMetrics() {
  return (
    <div className="content-stretch flex gap-[12px] h-[68px] items-start relative shrink-0 w-[300px]" data-name="Split Metrics">
      <AvoidedImbalance />
      <BatteryValue />
    </div>
  );
}

function FinancialMetricsStack() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[300px]" data-name="Financial Metrics Stack">
      <SavingsHero />
      <SplitMetrics />
    </div>
  );
}

function FinancialCta() {
  return (
    <div className="bg-[#3bd9a4] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[16px] shrink-0" data-name="Financial CTA">
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#080c16] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Open financial optimization
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

function FinancialSources() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Financial Sources">
      <PillEnergyPriceApi />
      <PillWiththegrid />
    </div>
  );
}

export default function FinancialImpact() {
  return (
    <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[18px] relative rounded-[24px] size-full" data-name="Financial Impact">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />
      <HeaderFinancialImpact />
      <FinancialMetricsStack />
      <FinancialCta />
      <FinancialSources />
    </div>
  );
}