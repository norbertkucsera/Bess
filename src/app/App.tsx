import { useState } from 'react';
import { DashboardView } from './components/DashboardView';
import { TimeHorizon } from './types';

export default function App() {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [selectedPortfolio, setSelectedPortfolio] = useState('Portfolio North-East');
  const [timeHorizon, setTimeHorizon] = useState<TimeHorizon>('Tomorrow');

  return (
    <div className="w-full h-screen flex bg-[#0a1322] overflow-hidden">
      <DashboardView
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        selectedPortfolio={selectedPortfolio}
        setSelectedPortfolio={setSelectedPortfolio}
        timeHorizon={timeHorizon}
        setTimeHorizon={setTimeHorizon}
      />
    </div>
  );
}