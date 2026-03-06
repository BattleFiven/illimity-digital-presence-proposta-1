import svgPaths from "./svg-63skyazjhd";

function Group1() {
  return (
    <div className="h-[64px] relative shrink-0 w-[124.823px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124.823 64">
        <g id="Group 1321320920">
          <path d={svgPaths.p1108b700} fill="var(--fill-0, #FF2698)" id="Vector" />
          <path d={svgPaths.p14b18200} fill="var(--fill-0, #FF7830)" id="Vector_2" />
          <path d={svgPaths.p1ab71d80} fill="var(--fill-0, #FF5161)" id="Vector_3" />
          <path d={svgPaths.p2d6dc8c0} fill="var(--fill-0, #092374)" id="Vector_4" />
          <path d={svgPaths.p2cf48ba0} fill="var(--fill-0, #092374)" id="Subtract" />
          <path d={svgPaths.p38d27e00} fill="var(--fill-0, #092374)" id="Vector_5" />
          <path d={svgPaths.p3cd34fc0} fill="var(--fill-0, #092374)" id="Vector_6" />
          <path d={svgPaths.pd32c400} fill="var(--fill-0, #092374)" id="Vector_7" />
          <path d={svgPaths.peec2500} fill="var(--fill-0, #092374)" id="Vector_8" />
          <path d={svgPaths.p1a053380} fill="var(--fill-0, #092374)" id="Vector_9" />
          <path d={svgPaths.p25082b00} fill="var(--fill-0, #092374)" id="Subtract_2" />
          <path d={svgPaths.p1ece6400} fill="var(--fill-0, #092374)" id="Subtract_3" />
          <path d={svgPaths.p23beb470} fill="var(--fill-0, #092374)" id="Vector_10" />
          <path d={svgPaths.p1f813300} fill="var(--fill-0, #092374)" id="Vector_11" />
          <path d={svgPaths.p5b2a780} fill="var(--fill-0, #092374)" id="Vector_12" />
          <path d={svgPaths.pcfa9700} fill="var(--fill-0, #092374)" id="Vector_13" />
          <path d={svgPaths.p2cf57300} fill="var(--fill-0, #092374)" id="Vector_14" />
          <path d={svgPaths.p1ee8b5f2} fill="var(--fill-0, #092374)" id="Vector_15" />
          <path d={svgPaths.p1c71a800} fill="var(--fill-0, #092374)" id="Vector_16" />
          <path d={svgPaths.p3713a100} fill="var(--fill-0, #092374)" id="Vector_17" />
          <path d={svgPaths.p3fc15f80} fill="var(--fill-0, #092374)" id="Vector_18" />
          <path d={svgPaths.p2b480ef0} fill="var(--fill-0, #092374)" id="Vector_19" />
          <path d={svgPaths.p2341fc00} fill="var(--fill-0, #092374)" id="Vector_20" />
          <path d={svgPaths.p10afbf00} fill="url(#paint0_linear_204_75)" id="Rectangle 8 (Stroke)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_204_75" x1="124.781" x2="9.66277e-05" y1="0.00653875" y2="64">
            <stop stopColor="#FF04C7" />
            <stop offset="1" stopColor="#FF9804" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Dehaze() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="dehaze">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="dehaze">
          <mask height="16" id="mask0_204_116" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_204_116)">
            <path d={svgPaths.p1a420a80} fill="var(--fill-0, #201A39)" id="dehaze_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#201a39] text-[14px] tracking-[-0.141px] whitespace-nowrap">
        <p className="leading-[15.82px]">Menu</p>
      </div>
      <Dehaze />
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="add">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="add">
          <mask height="16" id="mask0_204_112" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_204_112)">
            <path d={svgPaths.p225a7480} fill="var(--fill-0, #201A39)" id="add_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#201a39] text-[14px] tracking-[-0.141px] whitespace-nowrap">
        <p className="leading-[15.82px]">Servizi</p>
      </div>
      <Add />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[87px] items-center relative shrink-0">
      <Group1 />
      <Frame />
    </div>
  );
}

function ArrowOutward() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow_outward">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow_outward">
          <mask height="16" id="mask0_204_108" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_204_108)">
            <path d={svgPaths.p22006f00} fill="var(--fill-0, #201A39)" id="arrow_outward_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#201a39] text-[14px] tracking-[-0.141px] whitespace-nowrap">
        <p className="leading-[15.82px]">Conto illimity</p>
      </div>
      <ArrowOutward />
    </div>
  );
}

function ArrowOutward1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow_outward">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow_outward">
          <mask height="16" id="mask0_204_108" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_204_108)">
            <path d={svgPaths.p22006f00} fill="var(--fill-0, #201A39)" id="arrow_outward_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LinkPhoneLink() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link - Phone link">
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#201a39] text-[14px] tracking-[-0.141px] whitespace-nowrap">
        <p className="leading-[15.82px]">Conto Deposito</p>
      </div>
      <ArrowOutward1 />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[17.142px] relative shrink-0 w-[22.857px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.8568 17.1423">
        <g id="Group 1321320919">
          <path d={svgPaths.p1e3c8100} fill="var(--fill-0, white)" id="Star 6" />
          <path d={svgPaths.p29621500} fill="var(--fill-0, white)" id="Star 7" />
          <path d={svgPaths.p1ff42e00} fill="var(--fill-0, white)" id="Star 8" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="group bg-[#201a39] content-stretch flex h-[48px] items-center justify-between px-[24px] py-[16px] relative shrink-0 w-[224px] cursor-pointer" data-name="Button">
      <div className="relative overflow-hidden shrink-0 h-[16px]">
        <div className="flex flex-col transition-[translate] duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
          <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[15.82px] not-italic text-[16px] text-white whitespace-nowrap">Chiedi all'AI Agent</p>
          <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[15.82px] not-italic text-[16px] text-white whitespace-nowrap" aria-hidden="true">Chiedi all'AI Agent</p>
        </div>
      </div>
      <Group />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0">
      <Link />
      <LinkPhoneLink />
      <Button2 />
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between p-[32px] relative size-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(163,163,163,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <Frame2 />
      <Frame1 />
    </div>
  );
}