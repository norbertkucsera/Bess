import { useState } from 'react';
import { DashboardView } from './components/DashboardView';

export default function App() {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [selectedPortfolio, setSelectedPortfolio] = useState('Portfolio North-East');

  return (
    <div className="w-full h-screen flex bg-[#0a1322] overflow-hidden">
      <DashboardView
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        selectedPortfolio={selectedPortfolio}
        setSelectedPortfolio={setSelectedPortfolio}
      />
    </div>
  );
}