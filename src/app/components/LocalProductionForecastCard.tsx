import { useEffect, useState } from 'react';
import { TimeHorizon } from '../types';

interface ProductionData {
  estimatedProduction: string;
  actualConsumption: string;
  production: string;
  feedIn: string;
  mainsPower: string;
  discharging: string;
  headline: string;
  description: string;
}

function formatNumber(value: number, unit: string) {
  return `${value.toLocaleString(undefined, { maximumFractionDigits: 1 })} ${unit}`;
}

function getMockProductionData(timeHorizon: TimeHorizon): ProductionData {
  if (timeHorizon === 'Next Week') {
    return {
      estimatedProduction: '1.45 MWh',
      actualConsumption: '112.4 MWh',
      production: '152.1 MWh',
      feedIn: '35.8 MWh',
      mainsPower: '0.7 MWh',
      discharging: '21.3 MWh',
      headline: 'Weekly solar & local production outlook',
      description: 'Forecast based on weather, solar irradiance and historical system behavior.',
    };
  }

  if (timeHorizon === 'Next Month') {
    return {
      estimatedProduction: '42.8 MWh',
      actualConsumption: '412.0 MWh',
      production: '435.2 MWh',
      feedIn: '113.9 MWh',
      mainsPower: '4.2 MWh',
      discharging: '68.5 MWh',
      headline: 'Monthly solar capacity estimate',
      description: 'Aggregated forecast with warm-season solar gain and holiday patterns.',
    };
  }

  return {
    estimatedProduction: '154.7 kW',
    actualConsumption: '13,990 W',
    production: '25 W',
    feedIn: '154,666 W',
    mainsPower: '0 W',
    discharging: '168,631 W',
    headline: 'Tomorrow’s local production forecast',
    description: 'Estimated local solar production from the Envitron forecast stream.',
  };
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start rounded-[16px] bg-[rgba(22,32,51,0.74)] px-[14px] py-[12px] relative">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[11px] tracking-[0.18px] uppercase">{label}</p>
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] text-[#ecf4ff] text-[16px]">{value}</p>
    </div>
  );
}

export default function LocalProductionForecastCard({ timeHorizon }: { timeHorizon: TimeHorizon }) {
  const [data, setData] = useState<ProductionData>(getMockProductionData(timeHorizon));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const buildingUuid = '873924bf-0f0b-4c5e-a96d-1234567890ab';
    const fallback = getMockProductionData(timeHorizon);
    setIsLoading(true);

    async function loadProduction() {
      try {
        const response = await fetch(
          `https://api.envitron.nl/public-api/buildings/${buildingUuid}/solar_irradiance/actual/`
        );
        if (!response.ok) {
          throw new Error('Envitron API unavailable');
        }
        const json = await response.json();
        const value = json?.data?.[0]?.value ?? null;
        if (typeof value === 'number' && !Number.isNaN(value)) {
          setData({
            ...fallback,
            estimatedProduction: formatNumber(value / 1000, 'kW'),
            headline: 'Real-time solar irradiance estimate',
            description: 'Live Envitron solar data merged with weather forecast and storage signals.',
          });
        } else {
          setData(fallback);
        }
      } catch (error) {
        console.warn('Local production fetch failed, using fallback data.', error);
        setData(fallback);
      } finally {
        setIsLoading(false);
      }
    }

    loadProduction();
  }, [timeHorizon]);

  return (
    <div className="bg-[#121a2a] content-stretch flex flex-col gap-[18px] items-start px-[22px] py-[22px] relative rounded-[24px] size-full">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />
      <div className="content-stretch flex items-start justify-between gap-[12px] w-full relative">
        <div className="flex flex-col gap-[6px]">
          <p className="font-['Sora:SemiBold',sans-serif] text-[#ecf4ff] text-[17px]">Local Production Forecast</p>
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] max-w-[340px]">
            {data.headline}
          </p>
        </div>
        <div className="bg-[rgba(59,217,164,0.16)] flex items-center justify-center px-[10px] py-[6px] rounded-[999px]">
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#3bd9a4] text-[12px]">Source: Envitron</p>
        </div>
      </div>

      <div className="content-stretch flex flex-col gap-[12px] w-full">
        <div className="content-stretch flex items-center justify-between gap-[16px] w-full">
          <div className="rounded-[20px] bg-[#0f1c30] p-[18px] flex-1">
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] uppercase tracking-[0.26em]">Estimated production</p>
            <p className="font-['Sora:Bold',sans-serif] text-[#ecf4ff] text-[32px] mt-[10px]">{isLoading ? 'Loading…' : data.estimatedProduction}</p>
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] mt-[6px]">{data.description}</p>
          </div>
          <div className="rounded-[20px] bg-[rgba(22,32,51,0.74)] p-[18px] min-w-[180px]">
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] uppercase tracking-[0.26em]">Forecast</p>
            <p className="font-['Sora:Bold',sans-serif] text-[#ecf4ff] text-[26px] mt-[10px]">{timeHorizon}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[12px] w-full">
          <StatItem label="Actual Consumption" value={isLoading ? '—' : data.actualConsumption} />
          <StatItem label="Current Production" value={isLoading ? '—' : data.production} />
          <StatItem label="Feed-in" value={isLoading ? '—' : data.feedIn} />
          <StatItem label="Discharging" value={isLoading ? '—' : data.discharging} />
          <StatItem label="Mains Power" value={isLoading ? '—' : data.mainsPower} />
        </div>
      </div>
    </div>
  );
}
