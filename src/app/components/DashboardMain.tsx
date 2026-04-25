import { useEffect, useState } from 'react';
import InteractiveAiHero from './InteractiveAiHero';
import TomorrowDemandCard from './TomorrowDemandCard';
import BatteryAvailabilityCard from './BatteryAvailabilityCard';
import LocalProductionForecastCard from './LocalProductionForecastCard';
import WeatherImpactCard from './WeatherImpactCard';
import CalendarEventsCard from './CalendarEventsCard';
import MarketPriceCard from './MarketPriceCard';
import RiskImbalanceCard from './RiskImbalanceCard';
import FinancialImpactCard from './FinancialImpactCard';
import { TimeHorizon } from '../types';

interface DashboardMainProps {
  selectedPortfolio: string;
  setSelectedPortfolio: (portfolio: string) => void;
  timeHorizon: TimeHorizon;
  setTimeHorizon: (timeHorizon: TimeHorizon) => void;
}

function TitleStack() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 whitespace-nowrap">
      <p className="font-['Sora:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#ecf4ff] text-[30px]">
        Energy Buying Dashboard
      </p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[14px]">
        AI-powered recommendation for tomorrow's energy position
      </p>
    </div>
  );
}

function Pill({ label, color = 'blue', dot = false, onClick }: {
  label: string;
  color?: 'blue' | 'green' | 'teal' | 'gray';
  dot?: boolean;
  onClick?: () => void;
}) {
  const colors = {
    blue: 'bg-[rgba(68,180,255,0.14)] border-[rgba(45,65,95,0.55)] text-[#ecf4ff]',
    green: 'bg-[rgba(59,217,164,0.14)] border-[rgba(59,217,164,0.55)] text-[#3bd9a4]',
    teal: 'bg-[rgba(41,199,194,0.14)] border-[rgba(45,65,95,0.55)] text-[#ecf4ff]',
    gray: 'bg-[rgba(22,32,51,0.14)] border-[rgba(45,65,95,0.55)] text-[#a5b9d9]',
  };

  return (
    <div
      className={`${colors[color]} content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[999px] shrink-0 ${onClick ? 'cursor-pointer hover:opacity-80' : ''} transition-opacity`}
      onClick={onClick}
    >
      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[999px] ${colors[color].split(' ')[1]}`} />
      {dot && (
        <div className="relative shrink-0 size-[8px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="#3BD9A4" r="4" />
          </svg>
        </div>
      )}
      <p className={`font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[12px] whitespace-nowrap`}>
        {label}
      </p>
    </div>
  );
}

function Controls({
  selectedPortfolio,
  setSelectedPortfolio,
  timeHorizon,
  setTimeHorizon,
}: {
  selectedPortfolio: string;
  setSelectedPortfolio: (p: string) => void;
  timeHorizon: TimeHorizon;
  setTimeHorizon: (t: TimeHorizon) => void;
}) {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const portfolios = ['Portfolio North-East', 'Cluj Portfolio', 'Bucharest Portfolio'];
  const timeHorizons: TimeHorizon[] = ['Tomorrow', 'Next Week', 'Next Month'];

  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0">
      <div className="relative">
        <div onClick={() => setIsTimeOpen(!isTimeOpen)}>
          <Pill label={timeHorizon} color="blue" />
        </div>
        {isTimeOpen && (
          <div className="absolute top-full mt-2 bg-[#162033] border border-[#25354f] rounded-[12px] p-2 min-w-[140px] z-50">
            {timeHorizons.map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTimeHorizon(t);
                  setIsTimeOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-[#ecf4ff] text-[12px] hover:bg-[rgba(68,180,255,0.14)] rounded-[8px] transition-colors font-['IBM_Plex_Sans:Medium',sans-serif]"
              >
                {t}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="relative">
        <div onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}>
          <Pill label={selectedPortfolio} color="teal" />
        </div>
        {isPortfolioOpen && (
          <div className="absolute top-full mt-2 bg-[#162033] border border-[#25354f] rounded-[12px] p-2 min-w-[180px] z-50">
            {portfolios.map((p) => (
              <button
                key={p}
                onClick={() => {
                  setSelectedPortfolio(p);
                  setIsPortfolioOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-[#ecf4ff] text-[12px] hover:bg-[rgba(59,217,164,0.14)] rounded-[8px] transition-colors font-['IBM_Plex_Sans:Medium',sans-serif]"
              >
                {p}
              </button>
            ))}
          </div>
        )}
      </div>
      <Pill label="Live data connected" color="green" dot />
      <Pill label="Updated 11:44 EEST" color="gray" />
    </div>
  );
}

function Header({
  selectedPortfolio,
  setSelectedPortfolio,
  timeHorizon,
  setTimeHorizon,
}: {
  selectedPortfolio: string;
  setSelectedPortfolio: (p: string) => void;
  timeHorizon: TimeHorizon;
  setTimeHorizon: (t: TimeHorizon) => void;
}) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full mb-[30px]">
      <TitleStack />
      <Controls
        selectedPortfolio={selectedPortfolio}
        setSelectedPortfolio={setSelectedPortfolio}
        timeHorizon={timeHorizon}
        setTimeHorizon={setTimeHorizon}
      />
    </div>
  );
}

function PlaceholderCard({ title }: { title: string }) {
  return (
    <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[18px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.12] relative shrink-0 text-[#ecf4ff] text-[17px]">
        {title}
      </p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#7c93b4] text-[14px]">
        Coming soon...
      </p>
    </div>
  );
}

interface CardItem {
  id: string;
  span: 1 | 2;
  component: React.ReactNode;
}

const CARD_ORDER_STORAGE_KEY = 'dashboard-card-order-v1';

export function DashboardMain({
  selectedPortfolio,
  setSelectedPortfolio,
  timeHorizon,
  setTimeHorizon,
}: DashboardMainProps) {
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [cardOrder, setCardOrder] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const stored = window.localStorage.getItem(CARD_ORDER_STORAGE_KEY);
      if (!stored) return [];
      const parsed = JSON.parse(stored) as string[];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const cards: Record<string, CardItem> = {
    hero: { id: 'hero', span: 2, component: <InteractiveAiHero /> },
    demand: {
      id: 'demand',
      span: 1,
      component: <TomorrowDemandCard timeHorizon={timeHorizon} />,
    },
    battery: {
      id: 'battery',
      span: 1,
      component: <BatteryAvailabilityCard />,
    },
    production: {
      id: 'production',
      span: 1,
      component: <LocalProductionForecastCard timeHorizon={timeHorizon} />,
    },
    weather: {
      id: 'weather',
      span: 1,
      component: <WeatherImpactCard />,
    },
    calendar: { id: 'calendar', span: 1, component: <CalendarEventsCard /> },
    market: { id: 'market', span: 1, component: <MarketPriceCard /> },
    risk: { id: 'risk', span: 1, component: <RiskImbalanceCard /> },
    financial: { id: 'financial', span: 1, component: <FinancialImpactCard /> },
    hourly: { id: 'hourly', span: 2, component: <PlaceholderCard title="Hourly Energy Position Summary" /> },
  };

  const defaultOrder = [
    'hero',
    'demand',
    'battery',
    'production',
    'weather',
    'calendar',
    'market',
    'risk',
    'financial',
    'hourly',
  ];

  useEffect(() => {
    if (cardOrder.length === 0) {
      setCardOrder(defaultOrder);
      return;
    }
    const validOrder = cardOrder.filter((id) => Object.keys(cards).includes(id));
    if (validOrder.length !== cardOrder.length) {
      setCardOrder(defaultOrder);
    }
  }, []);

  useEffect(() => {
    if (cardOrder.length > 0) {
      window.localStorage.setItem(CARD_ORDER_STORAGE_KEY, JSON.stringify(cardOrder));
    }
  }, [cardOrder]);

  const handleDragStart = (id: string, event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.effectAllowed = 'move';
    setDraggedId(id);
  };

  const handleDrop = (targetId: string) => {
    if (!draggedId || draggedId === targetId) return;
    setCardOrder((currentOrder) => {
      const nextOrder = [...currentOrder];
      const fromIndex = nextOrder.indexOf(draggedId);
      const toIndex = nextOrder.indexOf(targetId);
      if (fromIndex === -1 || toIndex === -1) return nextOrder;
      nextOrder.splice(fromIndex, 1);
      nextOrder.splice(toIndex, 0, draggedId);
      return nextOrder;
    });
    setDraggedId(null);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="w-full min-h-screen px-[40px] py-[38px]">
      <Header
        selectedPortfolio={selectedPortfolio}
        setSelectedPortfolio={setSelectedPortfolio}
        timeHorizon={timeHorizon}
        setTimeHorizon={setTimeHorizon}
      />

      <div className="grid grid-cols-2 gap-[20px]">
        {cardOrder.map((cardId) => {
          const card = cards[cardId];
          if (!card) return null;
          return (
            <div
              key={card.id}
              draggable
              onDragStart={(event) => handleDragStart(card.id, event)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(card.id)}
              onDragEnd={() => setDraggedId(null)}
              className={`${card.span === 2 ? 'col-span-2' : ''} relative rounded-[28px] transition-all ${draggedId === card.id ? 'opacity-80 border border-dashed border-[#3bd9a4]' : ''}`}
            >
              <div className="absolute right-[10px] top-[10px] z-10 rounded-full bg-[rgba(0,0,0,0.35)] p-[8px] text-[#7c93b4] text-[12px] font-['IBM_Plex_Sans:Medium',sans-serif]">
                Drag
              </div>
              {card.component}
            </div>
          );
        })}
      </div>
    </div>
  );
}
