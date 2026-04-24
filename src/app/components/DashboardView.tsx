import { Sidebar } from './Sidebar';
import { DashboardMain } from './DashboardMain';
import { ForecastContent } from './ForecastContent';
import { BatteriesContent } from './BatteriesContent';
import { MarketPricesContent } from './MarketPricesContent';

interface DashboardViewProps {
  activeNav: string;
  setActiveNav: (nav: string) => void;
  selectedPortfolio: string;
  setSelectedPortfolio: (portfolio: string) => void;
}

export function DashboardView({
  activeNav,
  setActiveNav,
  selectedPortfolio,
  setSelectedPortfolio,
}: DashboardViewProps) {
  return (
    <>
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} selectedPortfolio={selectedPortfolio} />
      <div className="flex-1 overflow-y-auto h-screen bg-[#0a1322]">
        {activeNav === 'dashboard' && <DashboardMain selectedPortfolio={selectedPortfolio} setSelectedPortfolio={setSelectedPortfolio} />}
        {activeNav === 'forecast' && <ForecastContent />}
        {activeNav === 'batteries' && <BatteriesContent />}
        {activeNav === 'market-prices' && <MarketPricesContent />}
        {activeNav === 'events' && (
          <div className="p-[40px]">
            <h1 className="font-['Sora:Bold',sans-serif] text-[30px] text-[#ecf4ff]">Events</h1>
            <p className="text-[#a5b9d9] mt-4">Event monitoring coming soon...</p>
          </div>
        )}
        {activeNav === 'financial' && (
          <div className="p-[40px]">
            <h1 className="font-['Sora:Bold',sans-serif] text-[30px] text-[#ecf4ff]">Financial Optimization</h1>
            <p className="text-[#a5b9d9] mt-4">Financial optimization tools coming soon...</p>
          </div>
        )}
        {activeNav === 'recommendations' && (
          <div className="p-[40px]">
            <h1 className="font-['Sora:Bold',sans-serif] text-[30px] text-[#ecf4ff]">Recommendations</h1>
            <p className="text-[#a5b9d9] mt-4">AI recommendations will appear here...</p>
          </div>
        )}
        {activeNav === 'settings' && (
          <div className="p-[40px]">
            <h1 className="font-['Sora:Bold',sans-serif] text-[30px] text-[#ecf4ff]">Settings</h1>
            <p className="text-[#a5b9d9] mt-4">Configure your dashboard preferences...</p>
          </div>
        )}
      </div>
    </>
  );
}
