import svgPaths from "./svg-ykdldmby85";

function Group() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 5">
          <circle cx="8" cy="8" id="Ellipse 28" r="7" stroke="var(--stroke-0, #201A39)" strokeOpacity="0.5" strokeWidth="2" />
          <g id="Ellipse 29">
            <mask fill="white" id="path-2-inside-1_1_600">
              <path d={svgPaths.p2a0ab400} />
            </mask>
            <path d={svgPaths.p2a0ab400} mask="url(#path-2-inside-1_1_600)" stroke="var(--stroke-0, #201A39)" strokeWidth="4" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] relative shrink-0">
      <Group />
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#201a39] text-[16px] whitespace-nowrap">
        <p className="leading-[16.95px]">Illimity Bank</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(32,26,57,0.5)] whitespace-nowrap">
        <p className="leading-[16.95px]">Offerta Bundle</p>
      </div>
      <Frame1 />
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(32,26,57,0.5)] whitespace-nowrap">
        <p className="leading-[16.95px]">Conto Deposito</p>
      </div>
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(32,26,57,0.5)] whitespace-nowrap">
        <p className="leading-[16.95px]">Deposit Only</p>
      </div>
    </div>
  );
}