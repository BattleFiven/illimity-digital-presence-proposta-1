import svgPaths from "./svg-zl8f7we2zu";

function Group() {
  return (
    <div className="h-[17.142px] relative shrink-0 w-[22.857px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.8568 17.1423">
        <g id="Group 1321320919">
          <path d={svgPaths.p1e3c8100} fill="var(--fill-0, #1C1732)" id="Star 6" />
          <path d={svgPaths.p29621500} fill="var(--fill-0, #1C1732)" id="Star 7" />
          <path d={svgPaths.p1ff42e00} fill="var(--fill-0, #1C1732)" id="Star 8" />
        </g>
      </svg>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[24px] py-[16px] relative size-full" data-name="Button">
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[15.82px]">Chiedi all’AI Agent</p>
      </div>
      <Group />
    </div>
  );
}