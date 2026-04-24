interface SidebarProps {
  activeNav: string;
  setActiveNav: (nav: string) => void;
  selectedPortfolio: string;
}

function Logo() {
  return (
    <div className="relative shrink-0 size-[42px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g>
          <rect fill="url(#paint0_linear_logo)" height="42" rx="14" width="42" />
          <circle cx="21" cy="21" r="9.75" stroke="#ECF4FF" strokeOpacity="0.95" strokeWidth="2.5" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_logo" x1="4.42019" x2="42.2891" y1="5.06098" y2="23.2599">
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
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 whitespace-nowrap">
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#ecf4ff] text-[18px]">GridAware AI</p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[12px]">
        BESS Intelligence Layer
      </p>
    </div>
  );
}

function Brand() {
  return (
    <div className="content-stretch flex gap-[14px] items-center justify-center relative shrink-0">
      <Logo />
      <BrandText />
    </div>
  );
}

function PillPortfolio({ portfolio }: { portfolio: string }) {
  return (
    <div className="bg-[rgba(68,180,255,0.14)] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[999px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(45,65,95,0.55)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[12px] whitespace-nowrap">
        {portfolio}
      </p>
    </div>
  );
}

interface NavItemProps {
  label: string;
  navKey: string;
  active: boolean;
  onClick: () => void;
}

function NavItem({ label, navKey, active, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className="relative rounded-[16px] shrink-0 w-full transition-all hover:bg-[rgba(59,217,164,0.08)]"
    >
      {active && (
        <>
          <div className="absolute inset-0 bg-[#162033] rounded-[16px]" />
          <div aria-hidden="true" className="absolute border border-[rgba(45,65,95,0.85)] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </>
      )}
      <div className="flex flex-row items-center justify-center size-full relative">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[14px] py-[12px] relative size-full">
          <div
            className={`rounded-[6px] shrink-0 size-[18px] ${
              active ? 'bg-[rgba(59,217,164,0.24)]' : 'bg-[rgba(124,147,180,0.18)]'
            }`}
          >
            {active && (
              <div aria-hidden="true" className="absolute border border-[rgba(59,217,164,0.4)] border-solid inset-0 pointer-events-none rounded-[6px]" />
            )}
          </div>
          <p
            className={`font-['IBM_Plex_Sans:${active ? 'Bold' : 'Medium'}',sans-serif] ${
              active ? 'font-bold' : 'font-medium'
            } leading-[1.2] relative shrink-0 ${
              active ? 'text-[#ecf4ff]' : 'text-[#a5b9d9]'
            } text-[14px] whitespace-nowrap text-left flex-1`}
          >
            {label}
          </p>
        </div>
      </div>
    </button>
  );
}

function Navigation({ activeNav, setActiveNav }: { activeNav: string; setActiveNav: (nav: string) => void }) {
  const navItems = [
    { label: 'Dashboard', key: 'dashboard' },
    { label: 'Forecast', key: 'forecast' },
    { label: 'Batteries', key: 'batteries' },
    { label: 'Market Prices', key: 'market-prices' },
    { label: 'Events', key: 'events' },
    { label: 'Financial Optimization', key: 'financial' },
    { label: 'Recommendations', key: 'recommendations' },
    { label: 'Settings', key: 'settings' },
  ];

  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      {navItems.map((item) => (
        <NavItem
          key={item.key}
          label={item.label}
          navKey={item.key}
          active={activeNav === item.key}
          onClick={() => setActiveNav(item.key)}
        />
      ))}
    </div>
  );
}

function DataSource({ label }: { label: string }) {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="#3BD9A4" r="4" />
        </svg>
      </div>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px] whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}

function DataSources() {
  const sources = [
    'Historical consumption',
    'Weather API',
    'Calendar API',
    'Local Events AI',
    'Withthegrid',
    'Energy Price API',
  ];

  return (
    <div className="bg-[#121a2a] relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.24px] whitespace-nowrap">
          Connected data sources
        </p>
        {sources.map((source) => (
          <DataSource key={source} label={source} />
        ))}
      </div>
    </div>
  );
}

function SidebarFooter() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[13px] whitespace-nowrap">
        Tomorrow ready
      </p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#7c93b4] text-[12px] w-[204px]">
        AI buying plan generated from storage, market, weather and event signals.
      </p>
    </div>
  );
}

export function Sidebar({ activeNav, setActiveNav, selectedPortfolio }: SidebarProps) {
  return (
    <div className="bg-[#0b111d] content-stretch flex flex-col gap-[22px] h-full items-start px-[22px] py-[24px] relative shrink-0 w-[248px] overflow-y-auto">
      <div aria-hidden="true" className="absolute border-[#25354f] border-r border-solid inset-0 pointer-events-none" />
      <Brand />
      <PillPortfolio portfolio={selectedPortfolio} />
      <Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
      <DataSources />
      <SidebarFooter />
    </div>
  );
}
