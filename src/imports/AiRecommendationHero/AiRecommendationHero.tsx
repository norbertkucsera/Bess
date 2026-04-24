import svgPaths from "./svg-0kp203d59r";

function HeroBackdrop() {
  return (
    <div className="absolute h-[312px] left-0 top-0 w-[1416px]" data-name="Hero Backdrop">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1416 312">
        <g clipPath="url(#clip0_1_597)" id="Hero Backdrop">
          <path d={svgPaths.p88b7f80} fill="url(#paint0_linear_1_597)" id="Vector" />
          <path d={svgPaths.p1441e000} id="Vector_2" stroke="var(--stroke-0, #43B4FF)" strokeDasharray="8 8" strokeOpacity="0.22" strokeWidth="2" />
          <path d="M40 272H1376" id="Vector_3" stroke="var(--stroke-0, #97B8D9)" strokeOpacity="0.12" />
          <path d="M40 40V272" id="Vector_4" stroke="var(--stroke-0, #97B8D9)" strokeOpacity="0.12" />
          <path d={svgPaths.p2f8c2100} fill="var(--fill-0, #3BD9A4)" fillOpacity="0.12" id="Vector_5" />
          <path d={svgPaths.p14e3ca80} fill="var(--fill-0, #3BD9A4)" id="Vector_6" />
          <path d={svgPaths.p3f4c6b00} fill="var(--fill-0, #43B4FF)" fillOpacity="0.85" id="Vector_7" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_597" x1="0" x2="1416" y1="0" y2="312">
            <stop stopColor="#0F1C30" />
            <stop offset="1" stopColor="#0A1322" />
          </linearGradient>
          <clipPath id="clip0_1_597">
            <rect fill="white" height="312" width="1416" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PillRecommendedPurchaseForTomorrow() {
  return (
    <div className="bg-[rgba(68,180,255,0.14)] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="Pill/Recommended purchase for tomorrow">
      <div aria-hidden="true" className="absolute border border-[rgba(68,180,255,0.55)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#44b4ff] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Recommended purchase for tomorrow
      </p>
    </div>
  );
}

function Pill87Confidence() {
  return (
    <div className="bg-[rgba(59,217,164,0.14)] content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="Pill/87% confidence">
      <div aria-hidden="true" className="absolute border border-[rgba(59,217,164,0.55)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="relative shrink-0 size-[8px]" data-name="Dot">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #3BD9A4)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#3bd9a4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        87% confidence
      </p>
    </div>
  );
}

function ConfidenceRow() {
  return (
    <div className="content-stretch flex gap-[14px] items-center justify-center relative shrink-0" data-name="Confidence Row">
      <Pill87Confidence />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tomorrow looks stable, but evening price pressure remains elevated.
      </p>
    </div>
  );
}

function PrimaryCta() {
  return (
    <div className="bg-[#44b4ff] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[16px] shrink-0" data-name="Primary CTA">
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#080c16] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        View hourly recommendation
      </p>
    </div>
  );
}

function PillActionableNow() {
  return (
    <div className="bg-[rgba(18,26,42,0.14)] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="Pill/Actionable now">
      <div aria-hidden="true" className="absolute border border-[rgba(45,65,95,0.55)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Actionable now
      </p>
    </div>
  );
}

function HeroCtaRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Hero CTA Row">
      <PrimaryCta />
      <PillActionableNow />
    </div>
  );
}

function HeroLeft() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Hero Left">
      <PillRecommendedPurchaseForTomorrow />
      <p className="font-['Sora:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#ecf4ff] text-[46px] whitespace-nowrap">Buy 124.6 MWh</p>
      <ConfidenceRow />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.45] relative shrink-0 text-[#ecf4ff] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Buy more during low-price hours and rely on batteries during evening peak.
      </p>
      <HeroCtaRow />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Left">
      <div className="relative shrink-0 size-[10px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #FCBD59)" id="Ellipse" r="5" />
        </svg>
      </div>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Demand peak
      </p>
    </div>
  );
}

function DriverDemandPeak() {
  return (
    <div className="bg-[rgba(18,26,42,0.8)] relative rounded-[16px] shrink-0 w-full" data-name="Driver/Demand peak">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.9)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[14px] py-[12px] relative size-full">
          <Left />
          <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            18:00-21:00
          </p>
        </div>
      </div>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Left">
      <div className="relative shrink-0 size-[10px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #3BD9A4)" id="Ellipse" r="5" />
        </svg>
      </div>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Battery reserve
      </p>
    </div>
  );
}

function DriverBatteryReserve() {
  return (
    <div className="bg-[rgba(18,26,42,0.8)] relative rounded-[16px] shrink-0 w-full" data-name="Driver/Battery reserve">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.9)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[14px] py-[12px] relative size-full">
          <Left1 />
          <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            12 MWh
          </p>
        </div>
      </div>
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Left">
      <div className="relative shrink-0 size-[10px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #44B4FF)" id="Ellipse" r="5" />
        </svg>
      </div>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lowest price window
      </p>
    </div>
  );
}

function DriverLowestPriceWindow() {
  return (
    <div className="bg-[rgba(18,26,42,0.8)] relative rounded-[16px] shrink-0 w-full" data-name="Driver/Lowest price window">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.9)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[14px] py-[12px] relative size-full">
          <Left2 />
          <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            03:00-05:00
          </p>
        </div>
      </div>
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Left">
      <div className="relative shrink-0 size-[10px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #29C7C2)" id="Ellipse" r="5" />
        </svg>
      </div>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Weather pressure
      </p>
    </div>
  );
}

function DriverWeatherPressure() {
  return (
    <div className="bg-[rgba(18,26,42,0.8)] relative rounded-[16px] shrink-0 w-full" data-name="Driver/Weather pressure">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.9)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[14px] py-[12px] relative size-full">
          <Left3 />
          <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            +8.5% demand
          </p>
        </div>
      </div>
    </div>
  );
}

function HeroRight() {
  return (
    <div className="bg-[rgba(8,12,22,0.62)] content-stretch flex flex-col gap-[14px] h-[256px] items-start p-[18px] relative rounded-[24px] shrink-0 w-[356px]" data-name="Hero Right">
      <div aria-hidden="true" className="absolute border border-[rgba(45,65,95,0.9)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[14px] tracking-[0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Decision drivers
      </p>
      <DriverDemandPeak />
      <DriverBatteryReserve />
      <DriverLowestPriceWindow />
      <DriverWeatherPressure />
    </div>
  );
}

export default function AiRecommendationHero() {
  return (
    <div className="bg-[#162033] content-stretch flex items-center justify-between p-[28px] relative rounded-[30px] size-full" data-name="AI Recommendation Hero">
      <div aria-hidden="true" className="absolute border border-[#2d415f] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[0px_24px_44px_0px_rgba(3,16,31,0.28)]" />
      <HeroBackdrop />
      <HeroLeft />
      <HeroRight />
    </div>
  );
}