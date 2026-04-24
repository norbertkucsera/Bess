import { useState } from 'react';

function RiskItem({ label }: { label: string }) {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-start relative shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="#FCBD59" r="4" />
        </svg>
      </div>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#a5b9d9] text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {label}
      </p>
    </div>
  );
}

export default function RiskImbalanceCard() {
  return (
    <div className="bg-[#121a2a] content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[18px] relative rounded-[24px] size-full">
      <div aria-hidden="true" className="absolute border border-[#25354f] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_32px_0px_rgba(0,29,48,0.16)]" />

      {/* Header */}
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap">
          <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.12] relative shrink-0 text-[#ecf4ff] text-[17px]">
            Risk & Imbalance Alert
          </p>
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#7c93b4] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            What could move the plan
          </p>
        </div>
        <div className="bg-[rgba(252,189,89,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[rgba(252,189,89,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#fcbd59] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Medium risk
          </p>
        </div>
      </div>

      {/* Risk List */}
      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
        <RiskItem label="Evening peak demand" />
        <RiskItem label="Lower solar production" />
        <RiskItem label="High market price volatility" />
      </div>

      {/* Mitigation */}
      <div className="bg-[rgba(22,32,51,0.74)] content-stretch flex flex-col gap-[8px] items-start px-[14px] py-[12px] relative rounded-[18px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.8)] border-solid inset-0 pointer-events-none rounded-[18px]" />
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] tracking-[0.12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Suggested mitigation
        </p>
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#ecf4ff] text-[15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Reserve 12 MWh battery capacity for 18:00-21:00.
        </p>
      </div>

      {/* Sources */}
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
        <div className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Withthegrid
          </p>
        </div>
        <div className="bg-[rgba(22,32,51,0.16)] content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[rgba(37,53,79,0.6)] border-solid inset-0 pointer-events-none rounded-[999px]" />
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7c93b4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Energy Price API
          </p>
        </div>
      </div>
    </div>
  );
}
