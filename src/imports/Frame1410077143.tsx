import svgPaths from "./svg-utl6kbfnxf";

function Frame() {
  return (
    <div className="backdrop-blur-[27px] content-stretch flex flex-col gap-[16px] items-start justify-end leading-[0] not-italic relative shrink-0 text-[#201a39] whitespace-nowrap">
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center relative shrink-0 text-[0px] tracking-[-1px]">
        <p className="font-['Perfectly_Nineties:Regular',sans-serif]">
          <span className="leading-[98.006px] text-[#201a39] text-[64px]">€8,1</span>
          <span className="leading-[98.006px] text-[#201a39] text-[75.929px]">{` `}</span>
          <span className="leading-[98.006px] text-[32px]">mld</span>
        </p>
      </div>
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-end relative shrink-0 text-[20px]">
        <p className="leading-none">Attivi Totali</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="backdrop-blur-[27px] content-stretch flex flex-col gap-[16px] items-start justify-end leading-[0] not-italic relative shrink-0 text-[#201a39] whitespace-nowrap">
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center relative shrink-0 text-[0px] tracking-[-1px]">
        <p className="font-['Perfectly_Nineties:Regular',sans-serif]">
          <span className="leading-[98.006px] text-[#201a39] text-[64px]">14,7%</span>
          <span className="leading-[98.006px] text-[#201a39] text-[75.929px]">{` `}</span>
          <span className="leading-[98.006px] text-[32px]">CET1</span>
        </p>
      </div>
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-end relative shrink-0 text-[20px]">
        <p className="leading-none">Solidità Patrimoniale</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="backdrop-blur-[27px] content-stretch flex flex-col gap-[16px] items-start justify-end leading-[0] not-italic relative shrink-0 text-[#201a39] whitespace-nowrap">
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center relative shrink-0 text-[0px] tracking-[-1px]">
        <p className="font-['Perfectly_Nineties:Regular',sans-serif]">
          <span className="leading-[98.006px] text-[#201a39] text-[64px]">€3</span>
          <span className="leading-[98.006px] text-[#201a39] text-[75.929px]">{` `}</span>
          <span className="leading-[98.006px] text-[32px]">mld</span>
        </p>
      </div>
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-end relative shrink-0 text-[20px]">
        <p className="leading-none">Risparmi Gestiti</p>
      </div>
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative size-full">
      <Frame />
      <div className="h-[107px] relative shrink-0 w-[28.671px]">
        <div className="absolute inset-[-0.12%_-1.68%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.6365 107.259">
            <path d={svgPaths.p296cbcc8} id="Vector 68" opacity="0.3" stroke="var(--stroke-0, #201A39)" />
          </svg>
        </div>
      </div>
      <Frame2 />
      <div className="h-[107px] relative shrink-0 w-[28.671px]">
        <div className="absolute inset-[-0.12%_-1.68%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.6365 107.259">
            <path d={svgPaths.p296cbcc8} id="Vector 68" opacity="0.3" stroke="var(--stroke-0, #201A39)" />
          </svg>
        </div>
      </div>
      <Frame1 />
    </div>
  );
}