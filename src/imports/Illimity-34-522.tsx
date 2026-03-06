import svgPaths from "./svg-bs2y866wr4";
import imgHero from "figma:asset/880f7e269f594588b842cd245320a0d152c6f48c.png";

function Group1() {
  return (
    <div className="h-[64px] relative shrink-0 w-[124.823px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124.823 64">
        <g id="Group 1321320921">
          <path d={svgPaths.p1108b700} fill="var(--fill-0, #FF2698)" id="Vector" />
          <path d={svgPaths.p14b18200} fill="var(--fill-0, #FF7830)" id="Vector_2" />
          <path d={svgPaths.p1ab71d80} fill="var(--fill-0, #FF5161)" id="Vector_3" />
          <path d={svgPaths.p2d6dc8c0} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p2cf48ba0} fill="var(--fill-0, white)" id="Subtract" />
          <path d={svgPaths.p38d27e00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p3cd34fc0} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.pd32c400} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.peec2500} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p1a053380} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p25082b00} fill="var(--fill-0, white)" id="Subtract_2" />
          <path d={svgPaths.p39cb6a00} fill="var(--fill-0, white)" id="Subtract_3" />
          <path d={svgPaths.p23beb470} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p1f813300} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p5b2a780} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.pcfa9700} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p2cf57300} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p1ee8b5f2} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p1c71a800} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p3713a100} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p3fc15f80} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p2b480ef0} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p2341fc00} fill="var(--fill-0, white)" id="Vector_20" />
          <path d={svgPaths.p10afbf00} fill="url(#paint0_linear_34_538)" id="Rectangle 8 (Stroke)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_34_538" x1="124.781" x2="9.66277e-05" y1="0.00653875" y2="64">
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
          <mask height="16" id="mask0_34_534" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_34_534)">
            <path d={svgPaths.p1a420a80} fill="var(--fill-0, white)" id="dehaze_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.141px] whitespace-nowrap">
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
          <mask height="16" id="mask0_34_530" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_34_530)">
            <path d={svgPaths.p225a7480} fill="var(--fill-0, white)" id="add_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.141px] whitespace-nowrap">
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
          <mask height="16" id="mask0_1_604" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_604)">
            <path d={svgPaths.p22006f00} fill="var(--fill-0, white)" id="arrow_outward_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.141px] whitespace-nowrap">
        <p className="leading-[15.82px]">Conto Illimity</p>
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
          <mask height="16" id="mask0_1_604" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_604)">
            <path d={svgPaths.p22006f00} fill="var(--fill-0, white)" id="arrow_outward_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LinkPhoneLink() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link - Phone link">
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.141px] whitespace-nowrap">
        <p className="leading-[15.82px]">Conto Deposito</p>
      </div>
      <ArrowOutward1 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_624)" id="SVG">
          <path d={svgPaths.p12c5ea00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.71429" />
          <path d={svgPaths.p243b0128} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.71429" />
        </g>
        <defs>
          <clipPath id="clip0_1_624">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[24px] py-[16px] relative shrink-0 w-[192px]" data-name="Button">
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[15.82px]">Contattaci</p>
      </div>
      <Svg />
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

function Header() {
  return (
    <div className="absolute content-stretch flex h-[112px] items-center justify-between left-0 p-[32px] top-0 w-[1440px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(163,163,163,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex font-['PP_Neue_Montreal:Medium',sans-serif] items-center justify-between leading-[1.1] left-1/2 not-italic text-[#eae8e8] text-[20px] top-[624px] w-[1376px] whitespace-pre-wrap">
      <div className="flex flex-col justify-center relative shrink-0 w-[230px]">
        <p className="mb-0">Veloce.</p>
        <p>Digitale al 100%.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-center w-[230px]">
        <p className="mb-0">Vantaggiosa.</p>
        <p>Fino al 3,15% sul deposito.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-center w-[230px]">
        <p className="mb-0">Trasparente.</p>
        <p>Zero costi nascosti.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-center w-[230px]">
        <p className="mb-0">Affidabile.</p>
        <p>Con te in mente.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-right w-[230px]">
        <p className="mb-0">Vicina.</p>
        <p>Ci trovi quando vuoi.</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 5">
          <circle cx="8" cy="8" id="Ellipse 28" r="7" stroke="var(--stroke-0, white)" strokeOpacity="0.5" strokeWidth="2" />
          <g id="Ellipse 29">
            <mask fill="white" id="path-2-inside-1_34_526">
              <path d={svgPaths.p2a0ab400} />
            </mask>
            <path d={svgPaths.p2a0ab400} mask="url(#path-2-inside-1_34_526)" stroke="var(--stroke-0, white)" strokeWidth="4" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <Group />
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[16.95px]">Illimity Bank</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[32px] top-[838px]">
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">
        <p className="leading-[16.95px]">Offerta Bundle</p>
      </div>
      <Frame5 />
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">
        <p className="leading-[16.95px]">Conto Deposito</p>
      </div>
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">
        <p className="leading-[16.95px]">Deposit Only</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="h-[950px] overflow-clip relative shrink-0 w-full" data-name="Hero">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero} />
      <p className="-translate-x-1/2 absolute font-['Perfectly_Nineties:Regular',sans-serif] leading-[0] left-[calc(50%+101.5px)] not-italic text-[176px] text-center text-white top-[calc(50%-79px)] tracking-[-3.52px]">
        <span className="leading-[0.9]">{`Limitless by Design. `}</span>
        <span className="font-['Perfectly_Nineties:Italic',sans-serif] italic leading-[0.9]">Human</span>
        <span className="leading-[0.9]">{` by Nature.`}</span>
      </p>
      <Header />
      <Frame3 />
      <Frame4 />
      <div className="absolute bottom-[32px] flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-end leading-[0] not-italic right-[32px] text-[#eae8e8] text-[16px] text-right w-[173px]">
        <p className="leading-[16.95px] whitespace-pre-wrap">Tutto quello che serve per gestire il tuo denaro.</p>
      </div>
    </div>
  );
}

export default function Illimity() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Illimity">
      <Hero />
    </div>
  );
}