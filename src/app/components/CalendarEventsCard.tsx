import { useState, useEffect } from 'react';

interface Holiday {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  global: boolean;
  types: string[];
}

interface EventImpact {
  date: string;
  eventName: string;
  localName: string;
  dayType: 'holiday' | 'weekend' | 'weekday';
  demandImpact: string;
  demandChange: number;
  description: string;
  daysFromToday: number;
}

function EventCard({ event }: { event: EventImpact }) {
  const [isHovered, setIsHovered] = useState(false);

  const getImpactColor = () => {
    if (event.demandChange < -10) return 'text-[#3bd9a4]'; // Large decrease
    if (event.demandChange < 0) return 'text-[#44b4ff]'; // Small decrease
    if (event.demandChange > 10) return 'text-[#ff6b6b]'; // Large increase
    return 'text-[#f7bc59]'; // Small increase
  };

  const getImpactBg = () => {
    if (event.demandChange < -10) return 'bg-[rgba(59,217,164,0.14)]';
    if (event.demandChange < 0) return 'bg-[rgba(68,180,255,0.14)]';
    if (event.demandChange > 10) return 'bg-[rgba(255,107,107,0.14)]';
    return 'bg-[rgba(247,188,89,0.14)]';
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const getDayOfWeek = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  return (
    <div
      className="bg-[rgba(22,32,51,0.74)] relative rounded-[16px] transition-all cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <div aria-hidden="true" className={`absolute border ${isHovered ? 'border-[rgba(59,217,164,0.4)]' : 'border-[rgba(37,53,79,0.8)]'} border-solid inset-0 pointer-events-none rounded-[16px] transition-colors`} />
      <div className="flex items-start gap-[14px] px-[16px] py-[14px]">
        {/* Date Badge */}
        <div className={`${getImpactBg()} flex flex-col items-center justify-center px-[12px] py-[10px] rounded-[12px] min-w-[60px]`}>
          <p className="font-['IBM_Plex_Sans:Bold',sans-serif] text-[#ecf4ff] text-[18px] leading-[1]">
            {formatDate(event.date).split(' ')[1]}
          </p>
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#7c93b4] text-[11px] mt-[4px]">
            {formatDate(event.date).split(' ')[0]}
          </p>
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] text-[#7c93b4] text-[10px] mt-[2px]">
            {getDayOfWeek(event.date)}
          </p>
        </div>

        {/* Event Details */}
        <div className="flex-1 flex flex-col gap-[6px]">
          <div className="flex items-start justify-between gap-[8px]">
            <p className="font-['IBM_Plex_Sans:Bold',sans-serif] text-[#ecf4ff] text-[14px] leading-[1.2]">
              {event.localName || event.eventName}
            </p>
            <div className={`${getImpactBg()} px-[8px] py-[4px] rounded-[6px] whitespace-nowrap`}>
              <p className={`font-['IBM_Plex_Sans:Bold',sans-serif] ${getImpactColor()} text-[12px]`}>
                {event.demandChange > 0 ? '+' : ''}{event.demandChange}%
              </p>
            </div>
          </div>
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] text-[#7c93b4] text-[12px] leading-[1.3]">
            {event.description}
          </p>
          <div className="flex items-center gap-[6px] mt-[2px]">
            <div className="w-[6px] h-[6px] rounded-full bg-[#44b4ff]" />
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[#a5b9d9] text-[11px]">
              {event.daysFromToday === 0 ? 'Today' : event.daysFromToday === 1 ? 'Tomorrow' : `In ${event.daysFromToday} days`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CalendarEventsCard() {
  const [events, setEvents] = useState<EventImpact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchHolidays() {
      setIsLoading(true);
      setError(null);

      try {
        const currentYear = new Date().getFullYear();
        const response = await fetch(`https://date.nager.at/api/v3/publicholidays/${currentYear}/RO`);

        if (!response.ok) {
          throw new Error('Failed to fetch holidays');
        }

        const holidays: Holiday[] = await response.json();
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Filter upcoming holidays (next 60 days)
        const upcomingHolidays = holidays
          .filter(holiday => {
            const holidayDate = new Date(holiday.date);
            const diffTime = holidayDate.getTime() - today.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays >= 0 && diffDays <= 60;
          })
          .slice(0, 5);

        // Calculate impact for each event
        const eventsWithImpact: EventImpact[] = upcomingHolidays.map(holiday => {
          const holidayDate = new Date(holiday.date);
          const daysFromToday = Math.ceil((holidayDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

          // Determine demand impact based on holiday type
          let demandChange = -15; // Default: holidays reduce demand
          let description = 'Reduced commercial activity expected';

          // Special cases for different holidays
          if (holiday.name.toLowerCase().includes('christmas')) {
            demandChange = -20;
            description = 'Significant demand reduction - businesses closed, residential heating peak';
          } else if (holiday.name.toLowerCase().includes('new year')) {
            demandChange = -18;
            description = 'Major holiday - minimal commercial activity';
          } else if (holiday.name.toLowerCase().includes('easter')) {
            demandChange = -12;
            description = 'Holiday period - lower industrial demand';
          } else if (holiday.name.toLowerCase().includes('labour day')) {
            demandChange = -16;
            description = 'Public holiday - offices and factories closed';
          } else if (holiday.name.toLowerCase().includes('national')) {
            demandChange = -14;
            description = 'National celebration - reduced business operations';
          }

          return {
            date: holiday.date,
            eventName: holiday.name,
            localName: holiday.localName,
            dayType: 'holiday' as const,
            demandImpact: demandChange < 0 ? 'Decrease' : 'Increase',
            demandChange,
            description,
            daysFromToday,
          };
        });

        setEvents(eventsWithImpact);
      } catch (err) {
        console.error('Error fetching holidays:', err);
        setError(err instanceof Error ? err.message : 'Failed to load calendar events');
      } finally {
        setIsLoading(false);
      }
    }

    fetchHolidays();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[18px] relative rounded-[24px] size-full">
        <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-pulse flex flex-col gap-[12px] w-full">
            <div className="h-[40px] bg-[rgba(37,53,79,0.3)] rounded-[12px]" />
            <div className="h-[70px] bg-[rgba(37,53,79,0.3)] rounded-[12px]" />
            <div className="h-[70px] bg-[rgba(37,53,79,0.3)] rounded-[12px]" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[18px] relative rounded-[24px] size-full">
        <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />
        <div className="w-full h-full flex items-center justify-center flex-col gap-[12px]">
          <p className="text-[#ff6b6b] text-[14px] font-['IBM_Plex_Sans:Medium',sans-serif]">Failed to load events</p>
          <p className="text-[#7c93b4] text-[12px] font-['IBM_Plex_Sans:Regular',sans-serif]">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[18px] relative rounded-[24px] size-full">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />

      {/* Header */}
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
          <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.12] relative shrink-0 text-[#ecf4ff] text-[17px]">
            Calendar & Event Impact
          </p>
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#7c93b4] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Upcoming holidays and demand forecasts
          </p>
        </div>
        <div className="bg-[rgba(68,180,255,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[rgba(68,180,255,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#44b4ff] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {events.length} upcoming
          </p>
        </div>
      </div>

      {/* Events List */}
      <div className="flex flex-col gap-[10px] w-full overflow-y-auto max-h-[280px]">
        {events.length === 0 ? (
          <div className="flex items-center justify-center py-[40px]">
            <p className="text-[#7c93b4] text-[14px] font-['IBM_Plex_Sans:Medium',sans-serif]">
              No upcoming holidays in the next 60 days
            </p>
          </div>
        ) : (
          events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))
        )}
      </div>

      {/* Footer */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full mt-auto pt-[8px] border-t border-[rgba(37,53,79,0.5)]">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Holidays impact industrial and commercial demand patterns
        </p>
        <a
          href="https://date.nager.at/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0 hover:bg-[rgba(22,32,51,0.28)] transition-colors cursor-pointer"
        >
          <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Nager.Date
          </p>
        </a>
      </div>
    </div>
  );
}
