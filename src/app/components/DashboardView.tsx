import { Sidebar } from './Sidebar';
import { DashboardMain } from './DashboardMain';
import { ForecastContent } from './ForecastContent';
import { BatteriesContent } from './BatteriesContent';
import { MarketPricesContent } from './MarketPricesContent';
import { RecommendationsContent } from './RecommendationsContent';
import { TimeHorizon } from '../types';

interface DashboardViewProps {
  activeNav: string;
  setActiveNav: (nav: string) => void;
  selectedPortfolio: string;
  setSelectedPortfolio: (portfolio: string) => void;
  timeHorizon: TimeHorizon;
  setTimeHorizon: (timeHorizon: TimeHorizon) => void;
}

export function DashboardView({
  activeNav,
  setActiveNav,
  selectedPortfolio,
  setSelectedPortfolio,
  timeHorizon,
  setTimeHorizon,
}: DashboardViewProps) {
  return (
    <>
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} selectedPortfolio={selectedPortfolio} />
      <div className="flex-1 overflow-y-auto h-screen bg-[#0a1322]">
        {activeNav === 'dashboard' && (
          <DashboardMain
            selectedPortfolio={selectedPortfolio}
            setSelectedPortfolio={setSelectedPortfolio}
            timeHorizon={timeHorizon}
            setTimeHorizon={setTimeHorizon}
          />
        )}
        {activeNav === 'forecast' && <ForecastContent timeHorizon={timeHorizon} />}
        {activeNav === 'batteries' && <BatteriesContent timeHorizon={timeHorizon} />}
        {activeNav === 'market-prices' && <MarketPricesContent timeHorizon={timeHorizon} />}
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
        {activeNav === 'recommendations' && <RecommendationsContent timeHorizon={timeHorizon} />}
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
