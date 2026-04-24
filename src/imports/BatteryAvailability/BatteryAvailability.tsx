import svgPaths from "./svg-2aay79c73u";

function TitleBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap" data-name="TitleBlock">
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.12] relative shrink-0 text-[#ecf4ff] text-[17px]">Battery Availability</p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#7c93b4] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Connected via Withthegrid
      </p>
    </div>
  );
}

function PillReadyToDischarge() {
  return (
    <div className="bg-[rgba(59,217,164,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Ready to discharge">
      <div aria-hidden="true" className="absolute border border-[rgba(59,217,164,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#3bd9a4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ready to discharge
      </p>
    </div>
  );
}

function HeaderBatteryAvailability() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header/Battery Availability">
      <TitleBlock />
      <PillReadyToDischarge />
    </div>
  );
}

function MetricTotalBatteryCapacity() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] flex-[1_0_0] min-w-px relative rounded-[18px]" data-name="Metric/Total battery capacity">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative size-full whitespace-nowrap">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Total battery capacity
        </p>
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#ecf4ff] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          38 MWh
        </p>
      </div>
    </div>
  );
}

function MetricCurrentStateOfCharge() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] flex-[1_0_0] min-w-px relative rounded-[18px]" data-name="Metric/Current state of charge">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative size-full whitespace-nowrap">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Current state of charge
        </p>
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#3bd9a4] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          64%
        </p>
      </div>
    </div>
  );
}

function MetricAvailableDischarge() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] flex-[1_0_0] min-w-px relative rounded-[18px]" data-name="Metric/Available discharge">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative size-full whitespace-nowrap">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Available discharge
        </p>
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#ecf4ff] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          21.4 MWh
        </p>
      </div>
    </div>
  );
}

function MetricGrid() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="MetricGrid">
      <MetricTotalBatteryCapacity />
      <MetricCurrentStateOfCharge />
      <MetricAvailableDischarge />
    </div>
  );
}

function BatteryAvailableChargeCapacity() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] flex-[1_0_0] min-w-px relative rounded-[18px]" data-name="Battery/Available charge capacity">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start leading-[1.2] px-[14px] py-[12px] relative size-full">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Available charge capacity
        </p>
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#ecf4ff] text-[16px] w-[230px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          13.7 MWh
        </p>
      </div>
    </div>
  );
}

function BatteryBatteryStatus() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] flex-[1_0_0] min-w-px relative rounded-[18px]" data-name="Battery/Battery status">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start leading-[1.2] px-[14px] py-[12px] relative size-full">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Battery status
        </p>
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#ecf4ff] text-[16px] w-[230px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Connected via Withthegrid
        </p>
      </div>
    </div>
  );
}

function BatterySecondary() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Battery Secondary">
      <BatteryAvailableChargeCapacity />
      <BatteryBatteryStatus />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[96px] overflow-clip relative shrink-0 w-[552px]" data-name="Frame">
      <div className="absolute inset-[0.52%_0.09%]" data-name="Vector">
        <div className="absolute inset-[-0.53%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 552 96">
            <path d={svgPaths.p263b5b00} fill="var(--fill-0, #060F1C)" fillOpacity="0.18" id="Vector" stroke="var(--stroke-0, #445F84)" strokeOpacity="0.55" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[54.17%_87.68%_27.08%_5.07%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 18">
          <path d={svgPaths.p235a3b80} fill="var(--fill-0, #43B4FF)" fillOpacity="0.5" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[43.75%_77.9%_27.08%_14.86%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 28">
          <path d={svgPaths.p35fd200} fill="var(--fill-0, #43B4FF)" fillOpacity="0.7" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[35.42%_68.12%_27.08%_24.64%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 36">
          <path d={svgPaths.p386bb8f0} fill="var(--fill-0, #43B4FF)" fillOpacity="0.85" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[29.17%_58.33%_27.08%_34.42%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 42">
          <path d={svgPaths.pa230800} fill="var(--fill-0, #43B4FF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[39.58%_48.55%_27.08%_44.2%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 32">
          <path d={svgPaths.p2076ba00} fill="var(--fill-0, #3BD9A4)" fillOpacity="0.65" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[54.17%_38.77%_27.08%_53.99%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 18">
          <path d={svgPaths.p235a3b80} fill="var(--fill-0, #3BD9A4)" fillOpacity="0.45" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[22.92%_28.99%_27.08%_63.77%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 48">
          <path d={svgPaths.p1e564280} fill="var(--fill-0, #F7BC59)" fillOpacity="0.9" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.67%_19.2%_27.08%_73.55%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 54">
          <path d={svgPaths.p1857f040} fill="var(--fill-0, #F7BC59)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[27.08%_9.42%_27.08%_83.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 44">
          <path d={svgPaths.p293cbfb0} fill="var(--fill-0, #F7BC59)" fillOpacity="0.95" id="Vector" />
        </svg>
      </div>
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
  );
}

function BatteryMiniChart() {
  return (
    <div className="bg-[rgba(8,12,22,0.5)] content-stretch flex flex-col h-[96px] items-start relative rounded-[18px] shrink-0 w-[552px]" data-name="Battery Mini Chart">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.7)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Frame />
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

function BatterySources() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Battery Sources">
      <PillWiththegrid />
    </div>
  );
}

function BatteryFooter() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Battery Footer">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[12px] w-[330px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Charge overnight when prices are low, preserve the best discharge window for the evening peak.
      </p>
      <BatterySources />
    </div>
  );
}

export default function BatteryAvailability() {
  return (
    <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[18px] relative rounded-[24px] size-full" data-name="Battery Availability">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />
      <HeaderBatteryAvailability />
      <MetricGrid />
      <BatterySecondary />
      <BatteryMiniChart />
      <BatteryFooter />
    </div>
  );
}