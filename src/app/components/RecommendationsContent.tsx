import { TimeHorizon } from '../types';

interface Recommendation { title: string; detail: string; priority: 'high' | 'medium' | 'low'; }

const mockEvents = [
  { time: '20:00', label: 'Football finals', impact: 'Local demand surge in entertainment districts', type: 'event' },
  { time: '19:00', label: 'Prime-time TV special', impact: 'Higher residential demand during evening peak', type: 'tv' },
  { time: 'Saturday', label: 'City concert', impact: 'Increased cooling and lighting load', type: 'concert' },
];

function RecommendationCard({ recommendation }: { recommendation: Recommendation }) {
  return (
    <div className="bg-[#0f1c30] rounded-[20px] p-[24px] border border-[rgba(37,53,79,0.8)] hover:border-[rgba(59,217,164,0.5)] transition-all">
      <p className="font-['Sora:Bold',sans-serif] text-[#ecf4ff] text-[16px] mb-[10px]">{recommendation.title}</p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#a5b9d9] text-[13px] leading-[1.6]">{recommendation.detail}</p>
      <div className={`mt-[14px] inline-flex rounded-full px-[10px] py-[6px] text-[11px] font-['IBM_Plex_Sans:Medium',sans-serif] ${recommendation.priority === 'high' ? 'bg-[rgba(255,107,107,0.14)] text-[#ff6b6b]' : recommendation.priority === 'medium' ? 'bg-[rgba(68,180,255,0.14)] text-[#44b4ff]' : 'bg-[rgba(59,217,164,0.14)] text-[#3bd9a4]'}`}>Priority: {recommendation.priority}</div>
    </div>
  );
}

function EventCard({ event }: { event: (typeof mockEvents)[number] }) {
  return (
    <div className="bg-[rgba(22,32,51,0.74)] rounded-[18px] p-[16px]">
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] text-[#ecf4ff] text-[14px]">{event.label}</p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] mt-[6px]">{event.impact}</p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#44b4ff] text-[11px] mt-[8px] uppercase tracking-[0.25em]">{event.time}</p>
    </div>
  );
}

export function RecommendationsContent({ timeHorizon }: { timeHorizon: TimeHorizon }) {
  const recommendations: Recommendation[] = [
    {
      title: 'Buy energy overnight at low price',
      detail:
        timeHorizon === 'Tomorrow'
          ? 'Buy 38 MWh between 02:00 and 05:00 when prices are lower and battery availability is still high.'
          : timeHorizon === 'Next Week'
          ? 'Buy ahead of the midweek peak and charge batteries overnight on low-price windows to preserve margin.'
          : 'Reserve 20% battery capacity for the monthly evening peak and schedule purchases when price dips below €42/MWh.',
      priority: 'high',
    },
    {
      title: 'Avoid peak evening purchases',
      detail:
        timeHorizon === 'Tomorrow'
          ? 'Avoid buying during 18:00–21:00. Use stored battery energy and local production during peak hours.'
          : 'Plan discharge events to cover the weekly evening peak and reduce balancing costs.',
      priority: 'medium',
    },
    {
      title: 'Leverage solar forecast',
      detail:
        timeHorizon === 'Tomorrow'
          ? 'Expected solar production is high tomorrow, reduce day-ahead purchase by 12 MWh.'
          : 'High weekly solar output supports an increase in charge cycles during sunny afternoons.',
      priority: 'medium',
    },
    {
      title: 'Reserve capacity for event-driven demand',
      detail:
        'Keep 20% battery capacity available during major public events and broadcast-time demand spikes to maximize revenue and reliability.',
      priority: 'low',
    },
  ];

  return (
    <div className="w-full">
      <div className="px-[40px] py-[38px]">
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
          <p className="font-['Sora:Bold',sans-serif] font-bold leading-[1.1] text-[#ecf4ff] text-[30px]">Recommendations</p>
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#a5b9d9] text-[14px]">AI-style recommendations built from demand, battery, solar and event insights.</p>
        </div>
      </div>

      <div className="px-[40px] pb-[40px] grid gap-[24px]">
        <div className="grid grid-cols-3 gap-[24px]">
          <div className="rounded-[24px] bg-[#121a2a] p-[24px] border border-[rgba(37,53,79,0.7)]">
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] uppercase tracking-[0.24em]">Time horizon</p>
            <p className="font-['Sora:Bold',sans-serif] text-[#ecf4ff] text-[28px] mt-[12px]">{timeHorizon}</p>
          </div>
          <div className="rounded-[24px] bg-[#121a2a] p-[24px] border border-[rgba(37,53,79,0.7)]">
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] uppercase tracking-[0.24em]">AI confidence</p>
            <p className="font-['Sora:Bold',sans-serif] text-[#3bd9a4] text-[28px] mt-[12px]">87%</p>
          </div>
          <div className="rounded-[24px] bg-[#121a2a] p-[24px] border border-[rgba(37,53,79,0.7)]">
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] uppercase tracking-[0.24em]">Events</p>
            <p className="font-['Sora:Bold',sans-serif] text-[#ecf4ff] text-[28px] mt-[12px]">3 active</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[24px]">
          <div className="grid gap-[24px]">
            {recommendations.slice(0, 2).map((recommendation, index) => (
              <RecommendationCard key={index} recommendation={recommendation} />
            ))}
          </div>
          <div className="grid gap-[24px]">
            {recommendations.slice(2).map((recommendation, index) => (
              <RecommendationCard key={index} recommendation={recommendation} />
            ))}
          </div>
        </div>

        <div className="rounded-[24px] bg-[#121a2a] p-[24px] border border-[rgba(37,53,79,0.7)]">
          <div className="flex items-center justify-between mb-[18px]">
            <div>
              <p className="font-['Sora:Bold',sans-serif] text-[#ecf4ff] text-[17px]">External events & forecast signals</p>
              <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[12px] mt-[6px]">Mock event integration for demand-sensitive recommendations.</p>
            </div>
            <div className="bg-[rgba(68,180,255,0.14)] rounded-[999px] px-[10px] py-[6px] text-[12px] text-[#44b4ff]">Placeholder data</div>
          </div>
          <div className="grid gap-[12px]">
            {mockEvents.map((event) => (
              <EventCard key={event.label} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
