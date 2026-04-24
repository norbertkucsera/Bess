import { useState, useEffect } from 'react';

interface WeatherData {
  temperature_min: number;
  temperature_max: number;
  windspeed: number;
  shortwave_radiation: number;
}

interface LocationResult {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  admin1?: string;
}

function MetricCard({ title, value, isLoading }: { title: string; value: string; isLoading: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-[rgba(22,32,51,0.74)] flex-[1_0_0] min-w-px relative rounded-[18px] transition-all cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <div aria-hidden="true" className={`absolute border ${isHovered ? 'border-[rgba(68,180,255,0.6)]' : 'border-[rgba(37,53,79,0.8)]'} border-solid inset-0 pointer-events-none rounded-[18px] transition-colors`} />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative size-full whitespace-nowrap">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {title}
        </p>
        {isLoading ? (
          <div className="h-[20px] w-[80px] bg-[rgba(37,53,79,0.4)] rounded animate-pulse" />
        ) : (
          <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#ecf4ff] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {value}
          </p>
        )}
      </div>
    </div>
  );
}

function LocationSearchBar({
  selectedLocation,
  onLocationChange,
  isLoading
}: {
  selectedLocation: string;
  onLocationChange: (location: LocationResult) => void;
  isLoading: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<LocationResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const searchLocations = async () => {
      if (searchTerm.length < 2) {
        setSearchResults([]);
        return;
      }

      setIsSearching(true);
      try {
        const response = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchTerm)}&count=10&language=en&format=json`
        );
        const data = await response.json();
        setSearchResults(data.results || []);
      } catch (error) {
        console.error('Error searching locations:', error);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    };

    const timeoutId = setTimeout(searchLocations, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <div className="relative w-full">
      <div
        className="bg-[rgba(22,32,51,0.74)] relative rounded-[12px] w-full cursor-pointer hover:bg-[rgba(22,32,51,0.85)] transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex items-center justify-between px-[14px] py-[10px]">
          <div className="flex items-center gap-[10px]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z" stroke="#7c93b4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.5 10.5L14 14" stroke="#7c93b4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] text-[#ecf4ff] text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {isLoading ? 'Loading...' : selectedLocation}
            </p>
          </div>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
            }}
          >
            <path d="M3 4.5L6 7.5L9 4.5" stroke="#7c93b4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-[#162033] border border-[#25354f] rounded-[12px] p-2 z-50 shadow-[0px_8px_24px_0px_rgba(0,0,0,0.3)]">
          {/* Search input */}
          <div className="mb-2 px-2 py-1 bg-[rgba(22,32,51,0.6)] rounded-[8px] flex items-center gap-[8px]">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z" stroke="#7c93b4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.5 10.5L14 14" stroke="#7c93b4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search cities worldwide..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent outline-none text-[#ecf4ff] text-[12px] font-['IBM_Plex_Sans:Medium',sans-serif] flex-1"
              style={{ fontVariationSettings: "'wdth' 100" }}
              onClick={(e) => e.stopPropagation()}
              autoFocus
            />
          </div>

          {/* Search results */}
          <div className="max-h-[200px] overflow-y-auto">
            {isSearching ? (
              <div className="px-3 py-4 flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-[#44b4ff] border-t-transparent rounded-full animate-spin" />
              </div>
            ) : searchResults.length > 0 ? (
              searchResults.map((location, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    onLocationChange(location);
                    setIsOpen(false);
                    setSearchTerm('');
                  }}
                  className="w-full text-left px-3 py-2 text-[13px] hover:bg-[rgba(68,180,255,0.14)] rounded-[8px] transition-colors font-['IBM_Plex_Sans:Medium',sans-serif] text-[#ecf4ff]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <div className="flex flex-col gap-[2px]">
                    <span>{location.name}</span>
                    <span className="text-[11px] text-[#7c93b4]">
                      {location.admin1 ? `${location.admin1}, ` : ''}{location.country}
                    </span>
                  </div>
                </button>
              ))
            ) : searchTerm.length >= 2 ? (
              <p className="px-3 py-2 text-[#7c93b4] text-[12px] font-['IBM_Plex_Sans:Medium',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                No locations found
              </p>
            ) : (
              <p className="px-3 py-2 text-[#7c93b4] text-[12px] font-['IBM_Plex_Sans:Medium',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Type to search locations...
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function WeatherImpactCard() {
  const [selectedLocation, setSelectedLocation] = useState<LocationResult>({
    name: 'Cluj-Napoca',
    latitude: 46.7712,
    longitude: 23.6236,
    country: 'Romania',
  });
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${selectedLocation.latitude}&longitude=${selectedLocation.longitude}&daily=temperature_2m_max,temperature_2m_min,windspeed_10m_max,shortwave_radiation_sum&timezone=auto&forecast_days=1`
        );
        const data = await response.json();

        setWeatherData({
          temperature_min: Math.round(data.daily.temperature_2m_min[0]),
          temperature_max: Math.round(data.daily.temperature_2m_max[0]),
          windspeed: Math.round(data.daily.windspeed_10m_max[0]),
          shortwave_radiation: Math.round(data.daily.shortwave_radiation_sum[0] / 24), // Average W/m²
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeatherData();
  }, [selectedLocation]);

  // Calculate demand impact based on temperature
  const calculateDemandImpact = () => {
    if (!weatherData) return { change: '+0%', impact: 'Calculating...', description: 'Loading weather data...', tags: [] };

    const avgTemp = (weatherData.temperature_min + weatherData.temperature_max) / 2;
    let demandChange = 0;
    let impact = '';
    let description = '';
    let tags: string[] = [];

    if (avgTemp < 5) {
      demandChange = 10 + (5 - avgTemp) * 1.5;
      impact = 'Extreme heating demand';
      description = 'Very cold temperatures require maximum heating load. Prepare for peak energy consumption.';
      tags = ['Extreme cold', 'Peak heating'];
    } else if (avgTemp < 10) {
      demandChange = 6 + (10 - avgTemp) * 0.8;
      impact = 'High heating demand expected';
      description = 'Cold temperatures increase baseline load significantly throughout the day.';
      tags = ['Cold bias', 'Heating load up'];
    } else if (avgTemp < 15) {
      demandChange = 3 + (15 - avgTemp) * 0.4;
      impact = 'Moderate heating demand';
      description = 'Cool temperatures with moderate heating requirements during morning and evening hours.';
      tags = ['Moderate temp', 'Mild heating'];
    } else if (avgTemp < 20) {
      demandChange = 0;
      impact = 'Balanced energy demand';
      description = 'Comfortable temperatures with minimal heating or cooling requirements.';
      tags = ['Optimal temp', 'Low demand'];
    } else {
      demandChange = -(avgTemp - 20) * 0.6;
      impact = 'Cooling demand expected';
      description = 'Warm temperatures may increase cooling load during peak hours.';
      tags = ['Warm', 'Cooling load'];
    }

    // Add wind-based tag
    if (weatherData.windspeed > 25) {
      tags.push('High wind');
    }

    // Add solar radiation tag
    if (weatherData.shortwave_radiation > 400) {
      tags.push('Good solar');
    }

    const changeStr = demandChange >= 0 ? `+${demandChange.toFixed(1)}%` : `${demandChange.toFixed(1)}%`;

    return { change: changeStr + ' demand', impact, description, tags };
  };

  const impactData = calculateDemandImpact();

  const getTagColor = (tag: string) => {
    if (tag.toLowerCase().includes('cold') || tag.toLowerCase().includes('heating') || tag.toLowerCase().includes('peak')) {
      return { bg: 'rgba(68,180,255,0.16)', border: 'rgba(68,180,255,0.6)', text: '#44b4ff' };
    }
    if (tag.toLowerCase().includes('solar') || tag.toLowerCase().includes('good') || tag.toLowerCase().includes('optimal') || tag.toLowerCase().includes('low')) {
      return { bg: 'rgba(59,217,164,0.16)', border: 'rgba(59,217,164,0.6)', text: '#3bd9a4' };
    }
    return { bg: 'rgba(252,189,89,0.16)', border: 'rgba(252,189,89,0.6)', text: '#fcbd59' };
  };

  return (
    <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[18px] relative rounded-[24px] size-full">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />

      {/* Header */}
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap">
          <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.12] relative shrink-0 text-[#ecf4ff] text-[17px]">
            Weather Impact
          </p>
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#7c93b4] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Demand modifiers for tomorrow
          </p>
        </div>
        <div className="bg-[rgba(68,180,255,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[rgba(68,180,255,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
          {isLoading ? (
            <div className="h-[14px] w-[60px] bg-[rgba(68,180,255,0.3)] rounded animate-pulse" />
          ) : (
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#44b4ff] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              {impactData.change}
            </p>
          )}
        </div>
      </div>

      {/* Location Search Bar */}
      <LocationSearchBar
        selectedLocation={selectedLocation.name}
        onLocationChange={setSelectedLocation}
        isLoading={isLoading}
      />

      {/* Metrics */}
      <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
        <MetricCard
          title="Temperature"
          value={weatherData ? `${weatherData.temperature_min}°C to ${weatherData.temperature_max}°C` : '—'}
          isLoading={isLoading}
        />
        <MetricCard
          title="Wind speed"
          value={weatherData ? `${weatherData.windspeed} km/h` : '—'}
          isLoading={isLoading}
        />
        <MetricCard
          title="Solar irradiation"
          value={weatherData ? `${weatherData.shortwave_radiation} W/m²` : '—'}
          isLoading={isLoading}
        />
      </div>

      {/* Impact Box */}
      <div className="bg-[rgba(22,32,51,0.74)] content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[14px] relative rounded-[18px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
        {isLoading ? (
          <>
            <div className="h-[18px] w-[200px] bg-[rgba(37,53,79,0.4)] rounded animate-pulse" />
            <div className="h-[14px] w-full bg-[rgba(37,53,79,0.4)] rounded animate-pulse" />
          </>
        ) : (
          <>
            <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {impactData.impact}
            </p>
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {impactData.description}
            </p>
          </>
        )}
      </div>

      {/* Weather Tags */}
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full flex-wrap">
        {isLoading ? (
          <>
            <div className="h-[28px] w-[80px] bg-[rgba(37,53,79,0.4)] rounded-full animate-pulse" />
            <div className="h-[28px] w-[100px] bg-[rgba(37,53,79,0.4)] rounded-full animate-pulse" />
          </>
        ) : (
          impactData.tags.map((tag) => {
            const colors = getTagColor(tag);
            return (
              <div
                key={tag}
                className="content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
                style={{ backgroundColor: colors.bg }}
              >
                <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none rounded-[999px]" style={{ borderColor: colors.border }} />
                <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100", color: colors.text }}>
                  {tag}
                </p>
              </div>
            );
          })
        )}
      </div>

      {/* Source */}
      <a
        href="https://open-meteo.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0 hover:bg-[rgba(22,32,51,0.28)] transition-colors cursor-pointer"
      >
        <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Open-Meteo API
        </p>
      </a>
    </div>
  );
}
