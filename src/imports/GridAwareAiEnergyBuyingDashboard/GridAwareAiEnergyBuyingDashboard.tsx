import svgPaths from "./svg-ei92vwap21";

function Logo() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="Logo">
          <rect fill="url(#paint0_linear_1_580)" height="42" rx="14" width="42" />
          <circle cx="21" cy="21" id="Ellipse" r="9.75" stroke="var(--stroke-0, #ECF4FF)" strokeOpacity="0.95" strokeWidth="2.5" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_580" x1="4.42019" x2="42.2891" y1="5.06098" y2="23.2599">
            <stop stopColor="#44B4FF" />
            <stop offset="1" stopColor="#3BD9A4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function BrandText() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 whitespace-nowrap" data-name="Brand Text">
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#ecf4ff] text-[18px]">GridAware AI</p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        BESS Intelligence Layer
      </p>
    </div>
  );
}

function Brand() {
  return (
    <div className="content-stretch flex gap-[14px] items-center justify-center relative shrink-0" data-name="Brand">
      <Logo />
      <BrandText />
    </div>
  );
}

function PillPortfolioNorthEast() {
  return (
    <div className="bg-[rgba(68,180,255,0.14)] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="Pill/Portfolio North-East">
      <div aria-hidden="true" className="absolute border border-[rgba(45,65,95,0.55)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Portfolio North-East
      </p>
    </div>
  );
}

function IconDashboard() {
  return (
    <div className="bg-[rgba(59,217,164,0.24)] relative rounded-[6px] shrink-0 size-[18px]" data-name="Icon/Dashboard">
      <div aria-hidden="true" className="absolute border border-[rgba(59,217,164,0.4)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function NavDashboard() {
  return (
    <div className="bg-[#162033] relative rounded-[16px] shrink-0 w-full" data-name="Nav/Dashboard">
      <div aria-hidden="true" className="absolute border border-[rgba(45,65,95,0.85)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[14px] py-[12px] relative size-full">
          <IconDashboard />
          <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Dashboard
          </p>
        </div>
      </div>
    </div>
  );
}

function IconForecast() {
  return <div className="bg-[rgba(124,147,180,0.18)] rounded-[6px] shrink-0 size-[18px]" data-name="Icon/Forecast" />;
}

function NavForecast() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Nav/Forecast">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[14px] py-[12px] relative size-full">
          <IconForecast />
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Forecast
          </p>
        </div>
      </div>
    </div>
  );
}

function IconBatteries() {
  return <div className="bg-[rgba(124,147,180,0.18)] rounded-[6px] shrink-0 size-[18px]" data-name="Icon/Batteries" />;
}

function NavBatteries() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Nav/Batteries">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[14px] py-[12px] relative size-full">
          <IconBatteries />
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Batteries
          </p>
        </div>
      </div>
    </div>
  );
}

function IconMarketPrices() {
  return <div className="bg-[rgba(124,147,180,0.18)] rounded-[6px] shrink-0 size-[18px]" data-name="Icon/Market Prices" />;
}

function NavMarketPrices() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Nav/Market Prices">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[14px] py-[12px] relative size-full">
          <IconMarketPrices />
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Market Prices
          </p>
        </div>
      </div>
    </div>
  );
}

function IconEvents() {
  return <div className="bg-[rgba(124,147,180,0.18)] rounded-[6px] shrink-0 size-[18px]" data-name="Icon/Events" />;
}

function NavEvents() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Nav/Events">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[14px] py-[12px] relative size-full">
          <IconEvents />
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Events
          </p>
        </div>
      </div>
    </div>
  );
}

function IconFinancialOptimization() {
  return <div className="bg-[rgba(124,147,180,0.18)] rounded-[6px] shrink-0 size-[18px]" data-name="Icon/Financial Optimization" />;
}

function NavFinancialOptimization() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Nav/Financial Optimization">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[14px] py-[12px] relative size-full">
          <IconFinancialOptimization />
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Financial Optimization
          </p>
        </div>
      </div>
    </div>
  );
}

function IconRecommendations() {
  return <div className="bg-[rgba(124,147,180,0.18)] rounded-[6px] shrink-0 size-[18px]" data-name="Icon/Recommendations" />;
}

function NavRecommendations() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Nav/Recommendations">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[14px] py-[12px] relative size-full">
          <IconRecommendations />
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Recommendations
          </p>
        </div>
      </div>
    </div>
  );
}

function IconSettings() {
  return <div className="bg-[rgba(124,147,180,0.18)] rounded-[6px] shrink-0 size-[18px]" data-name="Icon/Settings" />;
}

function NavSettings() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Nav/Settings">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[14px] py-[12px] relative size-full">
          <IconSettings />
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Settings
          </p>
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Navigation">
      <NavDashboard />
      <NavForecast />
      <NavBatteries />
      <NavMarketPrices />
      <NavEvents />
      <NavFinancialOptimization />
      <NavRecommendations />
      <NavSettings />
    </div>
  );
}

function SourceHistoricalConsumption() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Source/Historical consumption">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #3BD9A4)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Historical consumption
      </p>
    </div>
  );
}

function SourceWeatherApi() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Source/Weather API">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #3BD9A4)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Weather API
      </p>
    </div>
  );
}

function SourceCalendarApi() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Source/Calendar API">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #3BD9A4)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Calendar API
      </p>
    </div>
  );
}

function SourceLocalEventsAi() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Source/Local Events AI">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #3BD9A4)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Local Events AI
      </p>
    </div>
  );
}

function SourceWiththegrid() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Source/Withthegrid">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #3BD9A4)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Withthegrid
      </p>
    </div>
  );
}

function SourceEnergyPriceApi() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Source/Energy Price API">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #3BD9A4)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Energy Price API
      </p>
    </div>
  );
}

function DataSources() {
  return (
    <div className="bg-[#121a2a] relative rounded-[20px] shrink-0 w-full" data-name="Data Sources">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Connected data sources
        </p>
        <SourceHistoricalConsumption />
        <SourceWeatherApi />
        <SourceCalendarApi />
        <SourceLocalEventsAi />
        <SourceWiththegrid />
        <SourceEnergyPriceApi />
      </div>
    </div>
  );
}

function SidebarFooter() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Sidebar Footer">
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tomorrow ready
      </p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#7c93b4] text-[12px] w-[204px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AI buying plan generated from storage, market, weather and event signals.
      </p>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-[#0b111d] content-stretch flex flex-col gap-[22px] h-[1680px] items-start px-[22px] py-[24px] relative shrink-0 w-[248px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#25354f] border-r border-solid inset-0 pointer-events-none" />
      <Brand />
      <PillPortfolioNorthEast />
      <Navigation />
      <DataSources />
      <SidebarFooter />
    </div>
  );
}

function TitleStack() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 whitespace-nowrap" data-name="Title Stack">
      <p className="font-['Sora:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#ecf4ff] text-[30px]">Energy Buying Dashboard</p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`AI-powered recommendation for tomorrow's energy position`}</p>
    </div>
  );
}

function PillTomorrow() {
  return (
    <div className="bg-[rgba(68,180,255,0.14)] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="Pill/Tomorrow">
      <div aria-hidden="true" className="absolute border border-[rgba(45,65,95,0.55)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tomorrow
      </p>
    </div>
  );
}

function PillClujPortfolio() {
  return (
    <div className="bg-[rgba(41,199,194,0.14)] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="Pill/Cluj Portfolio">
      <div aria-hidden="true" className="absolute border border-[rgba(45,65,95,0.55)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cluj Portfolio
      </p>
    </div>
  );
}

function PillLiveDataConnected() {
  return (
    <div className="bg-[rgba(59,217,164,0.14)] content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="Pill/Live data connected">
      <div aria-hidden="true" className="absolute border border-[rgba(59,217,164,0.55)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="relative shrink-0 size-[8px]" data-name="Dot">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #3BD9A4)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#3bd9a4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Live data connected
      </p>
    </div>
  );
}

function PillUpdated1144Eest() {
  return (
    <div className="bg-[rgba(22,32,51,0.14)] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="Pill/Updated 11:44 EEST">
      <div aria-hidden="true" className="absolute border border-[rgba(45,65,95,0.55)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Updated 11:44 EEST
      </p>
    </div>
  );
}

function Controls() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Controls">
      <PillTomorrow />
      <PillClujPortfolio />
      <PillLiveDataConnected />
      <PillUpdated1144Eest />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <TitleStack />
      <Controls />
    </div>
  );
}

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

function AiRecommendationHero() {
  return (
    <div className="bg-[#162033] h-[312px] relative rounded-[30px] shrink-0 w-full" data-name="AI Recommendation Hero">
      <div aria-hidden="true" className="absolute border border-[#2d415f] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[0px_24px_44px_0px_rgba(3,16,31,0.28)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[28px] relative size-full">
          <HeroBackdrop />
          <HeroLeft />
          <HeroRight />
        </div>
      </div>
    </div>
  );
}

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

function TomorrowDemandForecast() {
  return (
    <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] h-[380px] items-start px-[20px] py-[18px] relative rounded-[24px] shrink-0 w-[804px]" data-name="Tomorrow Demand Forecast">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />
      <HeaderTomorrowDemandForecast />
      <MetricGrid />
      <DemandChart />
      <DemandFooter />
    </div>
  );
}

function TitleBlock1() {
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
      <TitleBlock1 />
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

function MetricGrid1() {
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

function Frame1() {
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
      <Frame1 />
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

function BatteryAvailability() {
  return (
    <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] h-[380px] items-start px-[20px] py-[18px] relative rounded-[24px] shrink-0 w-[592px]" data-name="Battery Availability">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />
      <HeaderBatteryAvailability />
      <MetricGrid1 />
      <BatterySecondary />
      <BatteryMiniChart />
      <BatteryFooter />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Row 1">
      <TomorrowDemandForecast />
      <BatteryAvailability />
    </div>
  );
}

function TitleBlock2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap" data-name="TitleBlock">
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.12] relative shrink-0 text-[#ecf4ff] text-[17px]">Local Production Forecast</p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#7c93b4] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Solar, wind and local generation outlook
      </p>
    </div>
  );
}

function PillWeatherSensitive() {
  return (
    <div className="bg-[rgba(68,180,255,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Weather-sensitive">
      <div aria-hidden="true" className="absolute border border-[rgba(68,180,255,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#44b4ff] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Weather-sensitive
      </p>
    </div>
  );
}

function HeaderLocalProductionForecast() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header/Local Production Forecast">
      <TitleBlock2 />
      <PillWeatherSensitive />
    </div>
  );
}

function MetricSolarForecast() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] flex-[1_0_0] min-w-px relative rounded-[18px]" data-name="Metric/Solar forecast">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative size-full whitespace-nowrap">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Solar forecast
        </p>
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#ecf4ff] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          18.2 MWh
        </p>
      </div>
    </div>
  );
}

function MetricWindForecast() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] flex-[1_0_0] min-w-px relative rounded-[18px]" data-name="Metric/Wind forecast">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative size-full whitespace-nowrap">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Wind forecast
        </p>
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#ecf4ff] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          9.4 MWh
        </p>
      </div>
    </div>
  );
}

function MetricTotalLocalProduction() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] flex-[1_0_0] min-w-px relative rounded-[18px]" data-name="Metric/Total local production">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative size-full whitespace-nowrap">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Total local production
        </p>
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#3bd9a4] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          27.6 MWh
        </p>
      </div>
    </div>
  );
}

function MetricGrid2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="MetricGrid">
      <MetricSolarForecast />
      <MetricWindForecast />
      <MetricTotalLocalProduction />
    </div>
  );
}

function Frame2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[128px]" data-name="Frame">
      <div className="absolute inset-[0.39%]" data-name="Vector">
        <div className="absolute inset-[-0.39%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 128">
            <path d={svgPaths.p32de0c80} fill="var(--fill-0, #060F1C)" fillOpacity="0.18" id="Vector" stroke="var(--stroke-0, #445F84)" strokeOpacity="0.55" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[28.13%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 70">
            <path d={svgPaths.p16e22380} id="Vector" stroke="var(--stroke-0, #43B4FF)" strokeOpacity="0.25" strokeWidth="14" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[28.13%_29.2%_28.15%_30.47%]" data-name="Vector">
        <div className="absolute inset-[-12.51%_-13.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.6225 69.9662">
            <path d={svgPaths.p35ac4400} id="Vector" stroke="var(--stroke-0, #3BD9A4)" strokeLinecap="round" strokeWidth="14" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Sora:Bold',sans-serif] font-bold inset-[39.06%_33.59%_42.97%_35.94%] leading-[normal] text-[#eaf4ff] text-[18px] whitespace-nowrap">73%</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal inset-[60.16%_-6.25%_28.91%_23.44%] leading-[normal] text-[#7c93b4] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Weather dependency
      </p>
    </div>
  );
}

function Donut() {
  return (
    <div className="bg-[rgba(8,12,22,0.5)] content-stretch flex flex-col items-start relative rounded-[20px] shrink-0 size-[128px]" data-name="Donut">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.7)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Frame2 />
    </div>
  );
}

function StatMorningSolarRamp() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0" data-name="Stat/Morning solar ramp">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#a5b9d9]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Morning solar ramp
      </p>
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#ecf4ff]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Strong from 09:00
      </p>
    </div>
  );
}

function StatWindConfidence() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0" data-name="Stat/Wind confidence">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#a5b9d9]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Wind confidence
      </p>
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#ecf4ff]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Moderate
      </p>
    </div>
  );
}

function StatAiView() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0" data-name="Stat/AI view">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#a5b9d9]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AI view
      </p>
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#3bd9a4]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Use local first
      </p>
    </div>
  );
}

function Notes() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start leading-[1.2] min-w-px relative text-[13px] whitespace-nowrap" data-name="Notes">
      <StatMorningSolarRamp />
      <StatWindConfidence />
      <StatAiView />
    </div>
  );
}

function ProdViz() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Prod Viz">
      <Donut />
      <Notes />
    </div>
  );
}

function PillWeatherApi1() {
  return (
    <div className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Weather API">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Weather API
      </p>
    </div>
  );
}

function ProdSources() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Prod Sources">
      <PillWeatherApi1 />
    </div>
  );
}

function LocalProductionForecast() {
  return (
    <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] h-[340px] items-start px-[20px] py-[18px] relative rounded-[24px] shrink-0 w-[452px]" data-name="Local Production Forecast">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />
      <HeaderLocalProductionForecast />
      <MetricGrid2 />
      <ProdViz />
      <ProdSources />
    </div>
  );
}

function TitleBlock3() {
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
      <TitleBlock3 />
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

function MetricGrid3() {
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

function PillWeatherApi2() {
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
      <PillWeatherApi2 />
    </div>
  );
}

function WeatherImpact() {
  return (
    <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] h-[340px] items-start px-[20px] py-[18px] relative rounded-[24px] shrink-0 w-[452px]" data-name="Weather Impact">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />
      <HeaderWeatherImpact />
      <MetricGrid3 />
      <ImpactBox />
      <WeatherScale />
      <WeatherSources />
    </div>
  );
}

function TitleBlock4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap" data-name="TitleBlock">
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.12] relative shrink-0 text-[#ecf4ff] text-[17px]">{`Calendar & Event Impact`}</p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#7c93b4] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contextual demand modifiers
      </p>
    </div>
  );
}

function PillEvening() {
  return (
    <div className="bg-[rgba(68,180,255,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Evening +3.2%">
      <div aria-hidden="true" className="absolute border border-[rgba(68,180,255,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#44b4ff] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Evening +3.2%
      </p>
    </div>
  );
}

function HeaderCalendarEventImpact() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header/Calendar & Event Impact">
      <TitleBlock4 />
      <PillEvening />
    </div>
  );
}

function MetricCalendarStatus() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] flex-[1_0_0] min-w-px relative rounded-[18px]" data-name="Metric/Calendar status">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative size-full whitespace-nowrap">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Calendar status
        </p>
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#ecf4ff] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Working day
        </p>
      </div>
    </div>
  );
}

function MetricHolidayBridgeDay() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] flex-[1_0_0] min-w-px relative rounded-[18px]" data-name="Metric/Holiday / bridge day">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative size-full whitespace-nowrap">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Holiday / bridge day
        </p>
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#ecf4ff] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          No
        </p>
      </div>
    </div>
  );
}

function MetricAiImpactEstimate() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] flex-[1_0_0] min-w-px relative rounded-[18px]" data-name="Metric/AI impact estimate">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative size-full whitespace-nowrap">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          AI impact estimate
        </p>
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#fcbd59] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          +3.2%
        </p>
      </div>
    </div>
  );
}

function MetricGrid4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="MetricGrid">
      <MetricCalendarStatus />
      <MetricHolidayBridgeDay />
      <MetricAiImpactEstimate />
    </div>
  );
}

function Left4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Left">
      <div className="relative shrink-0 size-[10px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #FCBD59)" id="Ellipse" r="5" />
        </svg>
      </div>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Football match
      </p>
    </div>
  );
}

function EventFootballMatch() {
  return (
    <div className="bg-[rgba(22,32,51,0.7)] relative rounded-[16px] shrink-0 w-full" data-name="Event/Football match">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[14px] py-[12px] relative size-full">
          <Left4 />
          <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            20:00
          </p>
        </div>
      </div>
    </div>
  );
}

function Left5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Left">
      <div className="relative shrink-0 size-[10px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #FF6767)" id="Ellipse" r="5" />
        </svg>
      </div>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Large concert downtown
      </p>
    </div>
  );
}

function EventLargeConcertDowntown() {
  return (
    <div className="bg-[rgba(22,32,51,0.7)] relative rounded-[16px] shrink-0 w-full" data-name="Event/Large concert downtown">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[14px] py-[12px] relative size-full">
          <Left5 />
          <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            19:30
          </p>
        </div>
      </div>
    </div>
  );
}

function EventList() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Event List">
      <EventFootballMatch />
      <EventLargeConcertDowntown />
    </div>
  );
}

function PillCalendarApi() {
  return (
    <div className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Calendar API">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Calendar API
      </p>
    </div>
  );
}

function PillLocalEventsAi1() {
  return (
    <div className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Local Events AI">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Local Events AI
      </p>
    </div>
  );
}

function EventSources() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Event Sources">
      <PillCalendarApi />
      <PillLocalEventsAi1 />
    </div>
  );
}

function CalendarEventImpact() {
  return (
    <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] h-[340px] items-start px-[20px] py-[18px] relative rounded-[24px] shrink-0 w-[472px]" data-name="Calendar & Event Impact">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />
      <HeaderCalendarEventImpact />
      <MetricGrid4 />
      <EventList />
      <EventSources />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Row 2">
      <LocalProductionForecast />
      <WeatherImpact />
      <CalendarEventImpact />
    </div>
  );
}

function TitleBlock5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap" data-name="TitleBlock">
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.12] relative shrink-0 text-[#ecf4ff] text-[17px]">Market Price Overview</p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#7c93b4] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Day-ahead pricing and volatility
      </p>
    </div>
  );
}

function PillAvg86MWh() {
  return (
    <div className="bg-[rgba(68,180,255,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Avg €86/MWh">
      <div aria-hidden="true" className="absolute border border-[rgba(68,180,255,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#44b4ff] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Avg €86/MWh
      </p>
    </div>
  );
}

function HeaderMarketPriceOverview() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header/Market Price Overview">
      <TitleBlock5 />
      <PillAvg86MWh />
    </div>
  );
}

function MetricLowestPriceHour() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] flex-[1_0_0] min-w-px relative rounded-[18px]" data-name="Metric/Lowest price hour">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative size-full whitespace-nowrap">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Lowest price hour
        </p>
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#ecf4ff] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          03:00-05:00
        </p>
      </div>
    </div>
  );
}

function MetricHighestPriceHour() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] flex-[1_0_0] min-w-px relative rounded-[18px]" data-name="Metric/Highest price hour">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative size-full whitespace-nowrap">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Highest price hour
        </p>
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#fcbd59] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          19:00-20:00
        </p>
      </div>
    </div>
  );
}

function MetricIntradayVolatility() {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] flex-[1_0_0] min-w-px relative rounded-[18px]" data-name="Metric/Intraday volatility">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative size-full whitespace-nowrap">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Intraday volatility
        </p>
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#ff6767] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          High
        </p>
      </div>
    </div>
  );
}

function MetricGrid5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="MetricGrid">
      <MetricLowestPriceHour />
      <MetricHighestPriceHour />
      <MetricIntradayVolatility />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[120px] overflow-clip relative shrink-0 w-[676px]" data-name="Frame">
      <div className="absolute inset-[0.42%_0.07%]" data-name="Vector">
        <div className="absolute inset-[-0.42%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 676 120">
            <path d={svgPaths.p27d4b100} fill="var(--fill-0, #060F1C)" fillOpacity="0.18" id="Vector" stroke="var(--stroke-0, #445F84)" strokeOpacity="0.55" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[26.67%_5.33%_28.33%_5.33%]" data-name="Vector">
        <div className="absolute inset-[-3.24%_-0.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 607.5 57.4924">
            <path d={svgPaths.p2ce35e00} id="Vector" stroke="var(--stroke-0, #43B4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[28.33%_29.29%_20%_70.71%]" data-name="Vector">
        <div className="absolute inset-[0_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 62">
            <path d="M1 0V62" id="Vector" stroke="var(--stroke-0, #F7BC59)" strokeDasharray="4 5" strokeOpacity="0.55" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[22.5%_28.25%_65.83%_69.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p3296bc80} fill="var(--fill-0, #F7BC59)" id="Vector" />
        </svg>
      </div>
      <p className="absolute font-['IBM_Plex_Sans:Bold',sans-serif] font-bold inset-[19.17%_14.35%_69.17%_72.78%] leading-[normal] text-[#eaf4ff] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        €142/MWh peak
      </p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal inset-[79.17%_90.24%_9.17%_5.33%] leading-[normal] text-[#7c93b4] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        00:00
      </p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal inset-[79.17%_51.18%_9.17%_44.38%] leading-[normal] text-[#7c93b4] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:00
      </p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal inset-[79.17%_6.8%_9.17%_88.76%] leading-[normal] text-[#7c93b4] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        23:00
      </p>
    </div>
  );
}

function MarketChart() {
  return (
    <div className="bg-[rgba(8,12,22,0.5)] content-stretch flex flex-col h-[120px] items-start relative rounded-[18px] shrink-0 w-[676px]" data-name="Market Chart">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.7)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Frame3 />
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

function MarketSources() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Market Sources">
      <PillEnergyPriceApi />
    </div>
  );
}

function MarketPriceOverview() {
  return (
    <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] h-[320px] items-start px-[20px] py-[18px] relative rounded-[24px] shrink-0 w-[716px]" data-name="Market Price Overview">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />
      <HeaderMarketPriceOverview />
      <MetricGrid5 />
      <MarketChart />
      <MarketSources />
    </div>
  );
}

function TitleBlock6() {
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
      <TitleBlock6 />
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

function PillWiththegrid1() {
  return (
    <div className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Withthegrid">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Withthegrid
      </p>
    </div>
  );
}

function PillEnergyPriceApi1() {
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
      <PillWiththegrid1 />
      <PillEnergyPriceApi1 />
    </div>
  );
}

function RiskImbalanceAlert() {
  return (
    <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[18px] relative rounded-[24px] shrink-0 size-[320px]" data-name="Risk & Imbalance Alert">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />
      <HeaderRiskImbalanceAlert />
      <RiskList />
      <Mitigation />
      <RiskSources />
    </div>
  );
}

function TitleBlock7() {
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
      <TitleBlock7 />
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
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start relative shrink-0 w-[300px]" data-name="Financial Metrics Stack">
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

function PillEnergyPriceApi2() {
  return (
    <div className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Energy Price API">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Energy Price API
      </p>
    </div>
  );
}

function PillWiththegrid2() {
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
      <PillEnergyPriceApi2 />
      <PillWiththegrid2 />
    </div>
  );
}

function FinancialImpact() {
  return (
    <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] h-[320px] items-start px-[20px] py-[18px] relative rounded-[24px] shrink-0 w-[340px]" data-name="Financial Impact">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />
      <HeaderFinancialImpact />
      <FinancialMetricsStack />
      <FinancialCta />
      <FinancialSources />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Row 3">
      <MarketPriceOverview />
      <RiskImbalanceAlert />
      <FinancialImpact />
    </div>
  );
}

function TitleBlock8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap" data-name="TitleBlock">
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.12] relative shrink-0 text-[#ecf4ff] text-[17px]">Hourly Energy Position Summary</p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#7c93b4] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        How the AI recommendation unfolds hour by hour
      </p>
    </div>
  );
}

function PillActionablePlan() {
  return (
    <div className="bg-[rgba(68,180,255,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Actionable plan">
      <div aria-hidden="true" className="absolute border border-[rgba(68,180,255,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#44b4ff] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Actionable plan
      </p>
    </div>
  );
}

function HeaderHourlyEnergyPositionSummary() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header/Hourly Energy Position Summary">
      <TitleBlock8 />
      <PillActionablePlan />
    </div>
  );
}

function HeadHour() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-center px-[12px] relative shrink-0 w-[72px]" data-name="Head/Hour">
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Hour
      </p>
    </div>
  );
}

function HeadForecastDemand() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-center px-[12px] relative shrink-0 w-[150px]" data-name="Head/Forecast demand">
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Forecast demand
      </p>
    </div>
  );
}

function HeadLocalProduction() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-center px-[12px] relative shrink-0 w-[136px]" data-name="Head/Local production">
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Local production
      </p>
    </div>
  );
}

function HeadBatteryDischargeCharge() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-center px-[12px] relative shrink-0 w-[188px]" data-name="Head/Battery discharge/charge">
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Battery discharge/charge
      </p>
    </div>
  );
}

function HeadEnergyToBuy() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-center px-[12px] relative shrink-0 w-[124px]" data-name="Head/Energy to buy">
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Energy to buy
      </p>
    </div>
  );
}

function HeadMarketPrice() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-center px-[12px] relative shrink-0 w-[106px]" data-name="Head/Market price">
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Market price
      </p>
    </div>
  );
}

function HeadRecommendation() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-center px-[12px] relative shrink-0 w-[164px]" data-name="Head/Recommendation">
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Recommendation
      </p>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-[rgba(22,32,51,0.75)] content-stretch flex items-start relative shrink-0 w-full" data-name="Table Header">
      <HeadHour />
      <HeadForecastDemand />
      <HeadLocalProduction />
      <HeadBatteryDischargeCharge />
      <HeadEnergyToBuy />
      <HeadMarketPrice />
      <HeadRecommendation />
    </div>
  );
}

function Cell0300Hour() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[72px]" data-name="Cell/03:00/Hour">
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        03:00
      </p>
    </div>
  );
}

function Cell0300ForecastDemand() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[150px]" data-name="Cell/03:00/Forecast demand">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        5.1 MW
      </p>
    </div>
  );
}

function Cell0300LocalProduction() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[136px]" data-name="Cell/03:00/Local production">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0.0 MW
      </p>
    </div>
  );
}

function Cell0300BatteryDischargeCharge() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[188px]" data-name="Cell/03:00/Battery discharge/charge">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Charge 1.8 MW
      </p>
    </div>
  );
}

function Cell0300EnergyToBuy() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[124px]" data-name="Cell/03:00/Energy to buy">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        6.9 MW
      </p>
    </div>
  );
}

function Cell0300MarketPrice() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[106px]" data-name="Cell/03:00/Market price">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        €58/MWh
      </p>
    </div>
  );
}

function Cell0300Recommendation() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[164px]" data-name="Cell/03:00/Recommendation">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#3bd9a4] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Buy more
      </p>
    </div>
  );
}

function Row3() {
  return (
    <div className="bg-[rgba(18,26,42,0.34)] content-stretch flex items-start relative shrink-0 w-full" data-name="Row/03:00">
      <Cell0300Hour />
      <Cell0300ForecastDemand />
      <Cell0300LocalProduction />
      <Cell0300BatteryDischargeCharge />
      <Cell0300EnergyToBuy />
      <Cell0300MarketPrice />
      <Cell0300Recommendation />
    </div>
  );
}

function Cell0900Hour() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[72px]" data-name="Cell/09:00/Hour">
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        09:00
      </p>
    </div>
  );
}

function Cell0900ForecastDemand() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[150px]" data-name="Cell/09:00/Forecast demand">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        6.2 MW
      </p>
    </div>
  );
}

function Cell0900LocalProduction() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[136px]" data-name="Cell/09:00/Local production">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.8 MW
      </p>
    </div>
  );
}

function Cell0900BatteryDischargeCharge() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[188px]" data-name="Cell/09:00/Battery discharge/charge">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Charge 0.6 MW
      </p>
    </div>
  );
}

function Cell0900EnergyToBuy() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[124px]" data-name="Cell/09:00/Energy to buy">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.0 MW
      </p>
    </div>
  );
}

function Cell0900MarketPrice() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[106px]" data-name="Cell/09:00/Market price">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        €72/MWh
      </p>
    </div>
  );
}

function Cell0900Recommendation() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[164px]" data-name="Cell/09:00/Recommendation">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Use local first
      </p>
    </div>
  );
}

function Row4() {
  return (
    <div className="bg-[rgba(22,32,51,0.34)] content-stretch flex items-start relative shrink-0 w-full" data-name="Row/09:00">
      <Cell0900Hour />
      <Cell0900ForecastDemand />
      <Cell0900LocalProduction />
      <Cell0900BatteryDischargeCharge />
      <Cell0900EnergyToBuy />
      <Cell0900MarketPrice />
      <Cell0900Recommendation />
    </div>
  );
}

function Cell1400Hour() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[72px]" data-name="Cell/14:00/Hour">
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        14:00
      </p>
    </div>
  );
}

function Cell1400ForecastDemand() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[150px]" data-name="Cell/14:00/Forecast demand">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        6.8 MW
      </p>
    </div>
  );
}

function Cell1400LocalProduction() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[136px]" data-name="Cell/14:00/Local production">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.1 MW
      </p>
    </div>
  );
}

function Cell1400BatteryDischargeCharge() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[188px]" data-name="Cell/14:00/Battery discharge/charge">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Idle
      </p>
    </div>
  );
}

function Cell1400EnergyToBuy() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[124px]" data-name="Cell/14:00/Energy to buy">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.7 MW
      </p>
    </div>
  );
}

function Cell1400MarketPrice() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[106px]" data-name="Cell/14:00/Market price">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        €81/MWh
      </p>
    </div>
  );
}

function Cell1400Recommendation() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[164px]" data-name="Cell/14:00/Recommendation">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#3bd9a4] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Hold battery
      </p>
    </div>
  );
}

function Row5() {
  return (
    <div className="bg-[rgba(18,26,42,0.34)] content-stretch flex items-start relative shrink-0 w-full" data-name="Row/14:00">
      <Cell1400Hour />
      <Cell1400ForecastDemand />
      <Cell1400LocalProduction />
      <Cell1400BatteryDischargeCharge />
      <Cell1400EnergyToBuy />
      <Cell1400MarketPrice />
      <Cell1400Recommendation />
    </div>
  );
}

function Cell1800Hour() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[72px]" data-name="Cell/18:00/Hour">
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        18:00
      </p>
    </div>
  );
}

function Cell1800ForecastDemand() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[150px]" data-name="Cell/18:00/Forecast demand">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        9.8 MW
      </p>
    </div>
  );
}

function Cell1800LocalProduction() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[136px]" data-name="Cell/18:00/Local production">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        1.2 MW
      </p>
    </div>
  );
}

function Cell1800BatteryDischargeCharge() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[188px]" data-name="Cell/18:00/Battery discharge/charge">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Discharge 2.5 MW
      </p>
    </div>
  );
}

function Cell1800EnergyToBuy() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[124px]" data-name="Cell/18:00/Energy to buy">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        6.1 MW
      </p>
    </div>
  );
}

function Cell1800MarketPrice() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[106px]" data-name="Cell/18:00/Market price">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#fcbd59] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        €142/MWh
      </p>
    </div>
  );
}

function Cell1800Recommendation() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[164px]" data-name="Cell/18:00/Recommendation">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#3bd9a4] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Use battery
      </p>
    </div>
  );
}

function Row6() {
  return (
    <div className="bg-[rgba(22,32,51,0.34)] content-stretch flex items-start relative shrink-0 w-full" data-name="Row/18:00">
      <Cell1800Hour />
      <Cell1800ForecastDemand />
      <Cell1800LocalProduction />
      <Cell1800BatteryDischargeCharge />
      <Cell1800EnergyToBuy />
      <Cell1800MarketPrice />
      <Cell1800Recommendation />
    </div>
  );
}

function Cell2000Hour() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[72px]" data-name="Cell/20:00/Hour">
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        20:00
      </p>
    </div>
  );
}

function Cell2000ForecastDemand() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[150px]" data-name="Cell/20:00/Forecast demand">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        9.4 MW
      </p>
    </div>
  );
}

function Cell2000LocalProduction() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[136px]" data-name="Cell/20:00/Local production">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0.8 MW
      </p>
    </div>
  );
}

function Cell2000BatteryDischargeCharge() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[188px]" data-name="Cell/20:00/Battery discharge/charge">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Discharge 2.1 MW
      </p>
    </div>
  );
}

function Cell2000EnergyToBuy() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[124px]" data-name="Cell/20:00/Energy to buy">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        6.5 MW
      </p>
    </div>
  );
}

function Cell2000MarketPrice() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[106px]" data-name="Cell/20:00/Market price">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        €138/MWh
      </p>
    </div>
  );
}

function Cell2000Recommendation() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[164px]" data-name="Cell/20:00/Recommendation">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Minimize buy
      </p>
    </div>
  );
}

function Row7() {
  return (
    <div className="bg-[rgba(18,26,42,0.34)] content-stretch flex items-start relative shrink-0 w-full" data-name="Row/20:00">
      <Cell2000Hour />
      <Cell2000ForecastDemand />
      <Cell2000LocalProduction />
      <Cell2000BatteryDischargeCharge />
      <Cell2000EnergyToBuy />
      <Cell2000MarketPrice />
      <Cell2000Recommendation />
    </div>
  );
}

function Cell2200Hour() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[72px]" data-name="Cell/22:00/Hour">
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        22:00
      </p>
    </div>
  );
}

function Cell2200ForecastDemand() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[150px]" data-name="Cell/22:00/Forecast demand">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        7.1 MW
      </p>
    </div>
  );
}

function Cell2200LocalProduction() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[136px]" data-name="Cell/22:00/Local production">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0.0 MW
      </p>
    </div>
  );
}

function Cell2200BatteryDischargeCharge() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[188px]" data-name="Cell/22:00/Battery discharge/charge">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Idle
      </p>
    </div>
  );
}

function Cell2200EnergyToBuy() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[124px]" data-name="Cell/22:00/Energy to buy">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        7.1 MW
      </p>
    </div>
  );
}

function Cell2200MarketPrice() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[106px]" data-name="Cell/22:00/Market price">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        €94/MWh
      </p>
    </div>
  );
}

function Cell2200Recommendation() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center px-[12px] relative shrink-0 w-[164px]" data-name="Cell/22:00/Recommendation">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Normalize
      </p>
    </div>
  );
}

function Row8() {
  return (
    <div className="bg-[rgba(22,32,51,0.34)] content-stretch flex items-start relative shrink-0 w-full" data-name="Row/22:00">
      <Cell2200Hour />
      <Cell2200ForecastDemand />
      <Cell2200LocalProduction />
      <Cell2200BatteryDischargeCharge />
      <Cell2200EnergyToBuy />
      <Cell2200MarketPrice />
      <Cell2200Recommendation />
    </div>
  );
}

function TableShell() {
  return (
    <div className="bg-[rgba(8,12,22,0.5)] content-stretch flex flex-col items-start relative rounded-[18px] shrink-0 w-full" data-name="Table Shell">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.7)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <TableHeader />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row6 />
      <Row7 />
      <Row8 />
    </div>
  );
}

function PillHistoricalConsumption1() {
  return (
    <div className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Historical consumption">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Historical consumption
      </p>
    </div>
  );
}

function PillWeatherApi3() {
  return (
    <div className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Weather API">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Weather API
      </p>
    </div>
  );
}

function PillCalendarApi1() {
  return (
    <div className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Calendar API">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Calendar API
      </p>
    </div>
  );
}

function PillWiththegrid3() {
  return (
    <div className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Withthegrid">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Withthegrid
      </p>
    </div>
  );
}

function PillEnergyPriceApi3() {
  return (
    <div className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-name="Pill/Energy Price API">
      <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Energy Price API
      </p>
    </div>
  );
}

function SummaryPills() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Summary Pills">
      <PillHistoricalConsumption1 />
      <PillWeatherApi3 />
      <PillCalendarApi1 />
      <PillWiththegrid3 />
      <PillEnergyPriceApi3 />
    </div>
  );
}

function TableFooter() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Table Footer">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[12px] w-[560px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Simple language, clear action: buy in the early morning, keep reserve for the evening ramp, and only normalize once market pressure cools.
      </p>
      <SummaryPills />
    </div>
  );
}

function HourlyEnergyPositionSummary() {
  return (
    <div className="bg-[#121a2a] h-[540px] relative rounded-[24px] shrink-0 w-full" data-name="Hourly Energy Position Summary">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[18px] relative size-full">
        <HeaderHourlyEnergyPositionSummary />
        <TableShell />
        <TableFooter />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="bg-[#0c1320] flex-[1_0_0] h-[2100px] min-w-px relative" data-name="Main Content">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[28px] pt-[24px] px-[28px] relative size-full">
        <Header />
        <AiRecommendationHero />
        <Row />
        <Row1 />
        <Row2 />
        <HourlyEnergyPositionSummary />
      </div>
    </div>
  );
}

export default function GridAwareAiEnergyBuyingDashboard() {
  return (
    <div className="bg-[#0c1320] relative rounded-[28px] size-full" data-name="GridAware AI / Energy Buying Dashboard">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Sidebar />
        <MainContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(45,65,95,0.75)] border-solid inset-0 pointer-events-none rounded-[28px] shadow-[0px_32px_80px_0px_rgba(0,0,0,0.28)]" />
    </div>
  );
}