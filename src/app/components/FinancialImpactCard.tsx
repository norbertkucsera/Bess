import { useState } from 'react';

export default function FinancialImpactCard() {
  return (
    <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[18px] relative rounded-[24px] size-full">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />

      {/* Header */}
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap">
          <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.12] relative shrink-0 text-[#ecf4ff] text-[17px]">
            Financial Impact
          </p>
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#7c93b4] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Value of the AI recommendation
          </p>
        </div>
        <div className="bg-[rgba(59,217,164,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[rgba(59,217,164,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#3bd9a4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Savings view
          </p>
        </div>
      </div>

      {/* Financial Metrics */}
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
        {/* Savings Hero */}
        <div className="bg-[rgba(22,32,51,0.74)] content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative rounded-[18px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Estimated savings
          </p>
          <p className="font-['Sora:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#3bd9a4] text-[30px] whitespace-nowrap">
            €14,800
          </p>
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Tomorrow vs. non-optimized strategy
          </p>
        </div>

        {/* Split Metrics */}
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
          {/* Avoided Imbalance */}
          <div className="bg-[rgba(22,32,51,0.74)] content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative rounded-[18px] shrink-0 flex-1">
            <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Avoided imbalance
            </p>
            <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              €6,200
            </p>
          </div>

          {/* Battery Value */}
          <div className="bg-[rgba(22,32,51,0.74)] content-stretch flex flex-col gap-[6px] items-start px-[14px] py-[12px] relative rounded-[18px] shrink-0 flex-1">
            <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Battery value
            </p>
            <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              €8,600
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#3bd9a4] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[16px] shrink-0 cursor-pointer hover:bg-[#34c593] transition-colors w-full">
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#080c16] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Open financial optimization
        </p>
      </div>

      {/* Sources */}
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
        <div className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Energy Price API
          </p>
        </div>
        <div className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Withthegrid
          </p>
        </div>
      </div>
    </div>
  );
}
