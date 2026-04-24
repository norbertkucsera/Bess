import { useState } from 'react';

function Header() {
  return (
    <div className="px-[40px] py-[38px]">
      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
        <p className="font-['Sora:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#ecf4ff] text-[30px]">Forecast</p>
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[14px]">
          AI-powered predictions for energy demand and pricing
        </p>
      </div>
    </div>
  );
}

function ForecastCard({ day, temp, consumption, price, confidence }: { day: string; temp: string; consumption: string; price: string; confidence: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-[#0f1c30] relative rounded-[20px] p-[24px] cursor-pointer transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        borderColor: isHovered ? '#3bd9a4' : '#25354f',
      }}
    >
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col gap-[16px]">
        <div className="flex items-center justify-between">
          <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[#ecf4ff] text-[18px]">{day}</p>
          <div className="flex items-center gap-[6px]">
            <div className={`w-[8px] h-[8px] rounded-full ${isHovered ? 'bg-[#3bd9a4]' : 'bg-[#44b4ff]'}`} />
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#a5b9d9] text-[12px]">{confidence}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[12px]">
          <div>
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[11px] mb-[4px]">Weather</p>
            <p className="font-['IBM_Plex_Sans:Bold',sans-serif] text-[#ecf4ff] text-[16px]">{temp}</p>
          </div>
          <div>
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[11px] mb-[4px]">Consumption</p>
            <p className="font-['IBM_Plex_Sans:Bold',sans-serif] text-[#ecf4ff] text-[16px]">{consumption}</p>
          </div>
          <div>
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[11px] mb-[4px]">Avg. Price</p>
            <p className="font-['IBM_Plex_Sans:Bold',sans-serif] text-[#ecf4ff] text-[16px]">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ForecastContent() {
  const forecasts = [
    { day: 'Tomorrow', temp: '18°C', consumption: '178.5 MWh', price: '€45.20', confidence: '87%' },
    { day: 'Friday', temp: '20°C', consumption: '185.2 MWh', price: '€48.50', confidence: '82%' },
    { day: 'Saturday', temp: '22°C', consumption: '165.8 MWh', price: '€42.30', confidence: '78%' },
    { day: 'Sunday', temp: '21°C', consumption: '158.3 MWh', price: '€39.80', confidence: '75%' },
    { day: 'Monday', temp: '19°C', consumption: '192.5 MWh', price: '€52.10', confidence: '71%' },
    { day: 'Tuesday', temp: '17°C', consumption: '188.7 MWh', price: '€49.90', confidence: '68%' },
  ];

  return (
    <div className="w-full">
      <Header />
      <div className="px-[40px] pb-[40px]">
        <div className="grid grid-cols-2 gap-[24px]">
          {forecasts.map((forecast, i) => (
            <ForecastCard key={i} {...forecast} />
          ))}
        </div>
      </div>
    </div>
  );
}
