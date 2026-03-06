import svgPaths from "./svg-nit9z7cd3o";
import imgFrame1410077107 from "figma:asset/880f7e269f594588b842cd245320a0d152c6f48c.png";

function Group() {
  return (
    <div className="-translate-x-1/2 absolute h-[269.983px] left-[calc(50%-0.01px)] top-0 w-[436.983px]">
      <div className="absolute inset-[-0.19%_-0.11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 437.983 270.983">
          <g id="Group 1321320922">
            <path d={svgPaths.p8cf8f00} id="Vector" stroke="url(#paint0_linear_160_744)" />
            <path d={svgPaths.p31bdca00} id="Vector_2" stroke="url(#paint1_linear_160_744)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_160_744" x1="302.491" x2="302.491" y1="0.331682" y2="270.651">
              <stop stopColor="#E1DFDA" />
              <stop offset="0.1875" stopColor="#E1DFDA" stopOpacity="0.3" />
              <stop offset="0.350962" stopColor="#E1DFDA" stopOpacity="0" />
              <stop offset="0.610577" stopColor="#E1DFDA" stopOpacity="0" />
              <stop offset="0.778846" stopColor="#E1DFDA" stopOpacity="0.3" />
              <stop offset="1" stopColor="#E1DFDA" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_160_744" x1="135.491" x2="135.491" y1="0.331682" y2="270.651">
              <stop stopColor="#E1DFDA" />
              <stop offset="0.1875" stopColor="#E1DFDA" stopOpacity="0.3" />
              <stop offset="0.350962" stopColor="#E1DFDA" stopOpacity="0" />
              <stop offset="0.610577" stopColor="#E1DFDA" stopOpacity="0" />
              <stop offset="0.778846" stopColor="#E1DFDA" stopOpacity="0.3" />
              <stop offset="1" stopColor="#E1DFDA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[270px] overflow-clip relative shrink-0 w-[437px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[182.48%] left-[-34.55%] max-w-none top-[-3.96%] w-[169.09%]" src={imgFrame1410077107} />
      </div>
      <Group />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#120a24] content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[60px] shrink-0 size-[56px]">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(32,26,57,0.6)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <div className="flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[37.695px] text-center text-white tracking-[-0.7539px] whitespace-nowrap">
        <p className="leading-none">01</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#201a39] text-[37.695px] whitespace-nowrap">
        <p className="leading-none">Scegli</p>
      </div>
      <Frame14 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame />
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#201a39] text-[23px] w-[496px] whitespace-pre-wrap">Conto Progetto o solo Deposito. Decidi tu.</p>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_530)" id="SVG">
          <path d={svgPaths.p12c5ea00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.71429" />
          <path d={svgPaths.p3545da40} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.71429" />
        </g>
        <defs>
          <clipPath id="clip0_1_530">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[24px] py-[16px] relative shrink-0 w-[192px]" data-name="Button">
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[15.82px]">Apri il tuo conto</p>
      </div>
      <Svg />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pt-[32px] relative shrink-0 w-[730px]">
      <Frame17 />
      <Button />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#e7e6e9] h-[270px] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between pl-[16px] pr-[32px] py-[16px] relative size-full">
          <Frame4 />
          <Frame1 />
          <div className="absolute h-[166px] left-[1324px] top-[104px] w-0">
            <div className="absolute inset-[0_-0.25px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.5 166">
                <path d="M0.25 0V166" id="Vector 66" stroke="var(--stroke-0, #201A39)" strokeOpacity="0.6" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[270px] overflow-clip relative shrink-0 w-[437px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[-169.51%] left-[100.06%] max-w-none top-[165.56%] w-[-157.08%]" src={imgFrame1410077107} />
      </div>
      <div className="-translate-x-1/2 absolute flex items-center justify-center left-[calc(50%+0.51px)] size-[269.983px] top-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="relative size-[269.983px]" data-name="Vector">
            <div className="absolute inset-[-0.19%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 270.983 270.983">
                <path d={svgPaths.p33c0af00} id="Vector" stroke="url(#paint0_linear_160_735)" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_160_735" x1="135.491" x2="135.491" y1="0.331682" y2="270.651">
                    <stop stopColor="#E1DFDA" />
                    <stop offset="0.1875" stopColor="#E1DFDA" stopOpacity="0.3" />
                    <stop offset="0.350962" stopColor="#E1DFDA" stopOpacity="0" />
                    <stop offset="0.610577" stopColor="#E1DFDA" stopOpacity="0" />
                    <stop offset="0.778846" stopColor="#E1DFDA" stopOpacity="0.3" />
                    <stop offset="1" stopColor="#E1DFDA" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[60px] shrink-0 size-[56px]">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(32,26,57,0.6)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <div className="flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#201a39] text-[37.695px] text-center tracking-[-0.7539px] whitespace-nowrap">
        <p className="leading-none">02</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#201a39] text-[37.695px] whitespace-nowrap">
        <p className="leading-none">Verifica</p>
      </div>
      <Frame15 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-[730px]">
      <Frame8 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white h-[135px] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between pl-[16px] pr-[32px] py-[16px] relative size-full">
          <Frame7 />
          <Frame2 />
          <div className="absolute h-[40px] left-[1324px] top-0 w-0">
            <div className="absolute inset-[0_-0.25px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.5 40">
                <path d="M0.25 0V40" id="Vector 66" stroke="var(--stroke-0, #201A39)" strokeOpacity="0.6" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-0 h-[39px] left-[1324px] w-0">
            <div className="absolute inset-[0_-0.25px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.5 39">
                <path d="M0.25 0V39" id="Vector 67" stroke="var(--stroke-0, #201A39)" strokeOpacity="0.6" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d2d1d7] border-b border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Group1() {
  return (
    <div className="-translate-x-1/2 absolute h-[269.983px] left-[calc(50%-0.01px)] top-0 w-[436.983px]">
      <div className="absolute inset-[-0.19%_-0.11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 437.983 270.983">
          <g id="Group 1321320922">
            <path d={svgPaths.p8cf8f00} id="Vector" stroke="url(#paint0_linear_160_737)" />
            <path d={svgPaths.p2cfbd700} id="Vector_2" stroke="url(#paint1_linear_160_737)" />
            <path d={svgPaths.p1e7cad00} id="Vector_3" stroke="url(#paint2_linear_160_737)" />
            <path d={svgPaths.p1147e580} id="Vector_4" stroke="url(#paint3_linear_160_737)" />
            <path d={svgPaths.p31bdca00} id="Vector_5" stroke="url(#paint4_linear_160_737)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_160_737" x1="302.491" x2="302.491" y1="0.331682" y2="270.651">
              <stop stopColor="#E1DFDA" />
              <stop offset="0.1875" stopColor="#E1DFDA" stopOpacity="0.3" />
              <stop offset="0.350962" stopColor="#E1DFDA" stopOpacity="0" />
              <stop offset="0.610577" stopColor="#E1DFDA" stopOpacity="0" />
              <stop offset="0.778846" stopColor="#E1DFDA" stopOpacity="0.3" />
              <stop offset="1" stopColor="#E1DFDA" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_160_737" x1="218.509" x2="218.509" y1="0.331682" y2="270.651">
              <stop stopColor="#E1DFDA" />
              <stop offset="0.1875" stopColor="#E1DFDA" stopOpacity="0.3" />
              <stop offset="0.350962" stopColor="#E1DFDA" stopOpacity="0" />
              <stop offset="0.610577" stopColor="#E1DFDA" stopOpacity="0" />
              <stop offset="0.778846" stopColor="#E1DFDA" stopOpacity="0.3" />
              <stop offset="1" stopColor="#E1DFDA" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_160_737" x1="258.509" x2="258.509" y1="0.331682" y2="270.651">
              <stop stopColor="#E1DFDA" />
              <stop offset="0.1875" stopColor="#E1DFDA" stopOpacity="0.3" />
              <stop offset="0.350962" stopColor="#E1DFDA" stopOpacity="0" />
              <stop offset="0.610577" stopColor="#E1DFDA" stopOpacity="0" />
              <stop offset="0.778846" stopColor="#E1DFDA" stopOpacity="0.3" />
              <stop offset="1" stopColor="#E1DFDA" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_160_737" x1="178.509" x2="178.509" y1="0.331682" y2="270.651">
              <stop stopColor="#E1DFDA" />
              <stop offset="0.1875" stopColor="#E1DFDA" stopOpacity="0.3" />
              <stop offset="0.350962" stopColor="#E1DFDA" stopOpacity="0" />
              <stop offset="0.610577" stopColor="#E1DFDA" stopOpacity="0" />
              <stop offset="0.778846" stopColor="#E1DFDA" stopOpacity="0.3" />
              <stop offset="1" stopColor="#E1DFDA" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_160_737" x1="135.491" x2="135.491" y1="0.331682" y2="270.651">
              <stop stopColor="#E1DFDA" />
              <stop offset="0.1875" stopColor="#E1DFDA" stopOpacity="0.3" />
              <stop offset="0.350962" stopColor="#E1DFDA" stopOpacity="0" />
              <stop offset="0.610577" stopColor="#E1DFDA" stopOpacity="0" />
              <stop offset="0.778846" stopColor="#E1DFDA" stopOpacity="0.3" />
              <stop offset="1" stopColor="#E1DFDA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[270px] overflow-clip relative shrink-0 w-[437px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[169.51%] left-[-1.51%] max-w-none top-[-1.19%] w-[157.08%]" src={imgFrame1410077107} />
      </div>
      <Group1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[60px] shrink-0 size-[56px]">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(32,26,57,0.6)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <div className="flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#201a39] text-[37.695px] text-center tracking-[-0.7539px] whitespace-nowrap">
        <p className="leading-none">03</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#201a39] text-[37.695px] whitespace-nowrap">
        <p className="leading-none">Gestisci</p>
      </div>
      <Frame16 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-[730px]">
      <Frame12 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white h-[135px] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between pl-[16px] pr-[32px] py-[16px] relative size-full">
          <Frame10 />
          <Frame11 />
          <div className="absolute h-[40px] left-[1324px] top-0 w-0">
            <div className="absolute inset-[0_-0.25px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.5 40">
                <path d="M0.25 0V40" id="Vector 66" stroke="var(--stroke-0, #201A39)" strokeOpacity="0.6" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame9 />
    </div>
  );
}

export default function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <div aria-hidden="true" className="absolute border border-[#d2d1d7] border-solid inset-[-1px] pointer-events-none" />
      <Frame3 />
      <Frame6 />
    </div>
  );
}