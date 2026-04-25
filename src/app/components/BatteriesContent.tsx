import { useState } from 'react';
import { TimeHorizon } from '../types';

function Header() {
  return (
    <div className="px-[40px] py-[38px]">
      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
        <p className="font-['Sora:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#ecf4ff] text-[30px]">Battery Storage</p>
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[14px]">
          Real-time monitoring of BESS performance and capacity
        </p>
      </div>
    </div>
  );
}

function BatteryCard({
  name,
  capacity,
  currentCharge,
  status,
  location,
}: {
  name: string;
  capacity: string;
  currentCharge: number;
  status: 'active' | 'charging' | 'idle';
  location: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const statusColors = {
    active: 'bg-[#3bd9a4]',
    charging: 'bg-[#44b4ff]',
    idle: 'bg-[#7c93b4]',
  };

  return (
    <div
      className="bg-[#0f1c30] relative rounded-[20px] p-[24px] cursor-pointer transition-all"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col gap-[16px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[12px]">
            <div className="relative w-[48px] h-[48px]">
              <svg className="w-full h-full" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="22" fill="none" stroke="#25354f" strokeWidth="4" />
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  fill="none"
                  stroke={statusColors[status]}
                  strokeWidth="4"
                  strokeDasharray={`${(currentCharge / 100) * 138.23} 138.23`}
                  strokeLinecap="round"
                  transform="rotate(-90 24 24)"
                  style={{ transition: 'stroke-dasharray 0.5s' }}
                />
                <text x="24" y="28" textAnchor="middle" fill="#ecf4ff" fontSize="12" fontFamily="IBM Plex Sans" fontWeight="bold">
                  {currentCharge}%
                </text>
              </svg>
            </div>
            <div>
              <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[#ecf4ff] text-[16px]">{name}</p>
              <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px]">{location}</p>
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className={`w-[8px] h-[8px] rounded-full ${statusColors[status]}`} />
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#a5b9d9] text-[12px] capitalize">{status}</p>
          </div>
        </div>

        <div className="flex gap-[12px]">
          <div className="flex-1">
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[11px] mb-[4px]">Capacity</p>
            <p className="font-['IBM_Plex_Sans:Bold',sans-serif] text-[#ecf4ff] text-[16px]">{capacity}</p>
          </div>
          <div className="flex-1">
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[11px] mb-[4px]">Current</p>
            <p className="font-['IBM_Plex_Sans:Bold',sans-serif] text-[#ecf4ff] text-[16px]">
              {(parseFloat(capacity) * (currentCharge / 100)).toFixed(1)} MWh
            </p>
          </div>
        </div>

        {isExpanded && (
          <div className="border-t border-[#25354f] pt-[16px] mt-[8px] grid grid-cols-2 gap-[12px]">
            <div>
              <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[11px] mb-[4px]">Efficiency</p>
              <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#ecf4ff] text-[14px]">94.5%</p>
            </div>
            <div>
              <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[11px] mb-[4px]">Cycles</p>
              <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#ecf4ff] text-[14px]">1,247</p>
            </div>
            <div>
              <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[11px] mb-[4px]">Temperature</p>
              <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#ecf4ff] text-[14px]">24°C</p>
            </div>
            <div>
              <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[11px] mb-[4px]">Last Updated</p>
              <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#ecf4ff] text-[14px]">2 min ago</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const productionHints: Record<TimeHorizon, string> = {
  Tomorrow: 'Tomorrow’s solar production is projected high, recommend charging during late morning and discharging at evening peak.',
  'Next Week': 'Weekly production outlook is strong, use mid-day solar to charge and preserve evening reserve.',
  'Next Month': 'Monthly output supports a higher charge window; reserve 20% capacity for expected peak events.',
};

export function BatteriesContent({ timeHorizon }: { timeHorizon: TimeHorizon }) {
  const batteries = [
    { name: 'BESS Unit 1', capacity: '75.0', currentCharge: 85, status: 'active' as const, location: 'Cluj-Napoca North' },
    { name: 'BESS Unit 2', capacity: '75.0', currentCharge: 68, status: 'charging' as const, location: 'Cluj-Napoca South' },
    { name: 'BESS Unit 3', capacity: '50.0', currentCharge: 92, status: 'active' as const, location: 'Cluj-Napoca East' },
    { name: 'BESS Unit 4', capacity: '20.0', currentCharge: 45, status: 'idle' as const, location: 'Cluj-Napoca West' },
  ];

  const totalCapacity = batteries.reduce((sum, b) => sum + parseFloat(b.capacity), 0);
  const totalCharge = batteries.reduce((sum, b) => sum + (parseFloat(b.capacity) * b.currentCharge) / 100, 0);

  return (
    <div className="w-full">
      <Header />
      <div className="px-[40px] pb-[40px]">
        <div className="bg-[#0f1c30] relative rounded-[20px] p-[32px] mb-[24px]">
          <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[20px]" />
          <div className="grid grid-cols-4 gap-[24px]">
            <div>
              <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] mb-[8px]">Total Capacity</p>
              <p className="font-['Sora:Bold',sans-serif] text-[#ecf4ff] text-[32px]">{totalCapacity.toFixed(0)}</p>
              <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[14px]">MWh</p>
            </div>
            <div>
              <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] mb-[8px]">Current Charge</p>
              <p className="font-['Sora:Bold',sans-serif] text-[#ecf4ff] text-[32px]">{totalCharge.toFixed(1)}</p>
              <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[14px]">MWh</p>
            </div>
            <div>
              <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] mb-[8px]">Available</p>
              <p className="font-['Sora:Bold',sans-serif] text-[#3bd9a4] text-[32px]">{((totalCharge / totalCapacity) * 100).toFixed(0)}%</p>
            </div>
            <div>
              <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] mb-[8px]">Active Units</p>
              <p className="font-['Sora:Bold',sans-serif] text-[#ecf4ff] text-[32px]">{batteries.filter((b) => b.status === 'active').length}</p>
              <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[14px]">of {batteries.length}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[24px]">
          {batteries.map((battery, i) => (
            <BatteryCard key={i} {...battery} />
          ))}
        </div>

        <div className="mt-[24px] grid gap-[24px] xl:grid-cols-2">
          <div className="rounded-[24px] bg-[#121a2a] border border-[#25354f] p-[24px]">
            <p className="font-['Sora:Bold',sans-serif] text-[#ecf4ff] text-[18px] mb-[10px]">Battery behavior correlated with local production</p>
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[13px] leading-[1.7]">
              {productionHints[timeHorizon]}
            </p>
          </div>
          <div className="rounded-[24px] bg-[#121a2a] border border-[#25354f] p-[24px]">
            <p className="font-['Sora:Bold',sans-serif] text-[#ecf4ff] text-[18px] mb-[10px]">Recommended battery plan</p>
            <ul className="list-disc pl-[20px] space-y-[10px] text-[#a5b9d9] text-[13px] leading-[1.8]">
              <li>Charge batteries when local production is strong and market prices are low.</li>
              <li>Reserve at least 20% capacity for evening peaks and event-driven demand spikes.</li>
              <li>Discharge stored energy during high-price windows to maximize revenue.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
