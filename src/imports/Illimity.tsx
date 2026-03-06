import svgPaths from "./svg-gvdnj3adbd";
import svgPathsButton from "./svg-zl8f7we2zu";
import svgPathsSVN from "./svg-nit9z7cd3o";
import imgFrame1410077078 from "figma:asset/880f7e269f594588b842cd245320a0d152c6f48c.png";
import imgUnion from "figma:asset/1956854c0e6c2261f7b3d7dd5814015ac3ceb772.png";
import imgUnion1 from "figma:asset/bddaaefff4bf05fc12cc0346170e77039005bed8.png";
import imgUnion2 from "figma:asset/f37edaf4712d8487a98b6bc38e85f16f7a05e9e9.png";
import imgUnion3 from "figma:asset/2c072a42d47f3a22b9eecfbe4cb58d824317294f.png";
import imgFrame1410077079 from "figma:asset/7d208d6ce10c564683654286bdac10316988f7aa.png";
import imgUnion4 from "figma:asset/e13d5c51f779a369b58525d82f7767722b78f668.png";
import imgFrame1410077106 from "figma:asset/4b290839acfcb6b0ca4c0d2e607f107a9e7bc862.png";
import imgFrame1410077107 from "figma:asset/88e93d978a47abfe7887ee2ee109ae5d8468355f.png";
import imgFrame1410077108 from "figma:asset/f03aac308f5871746f5d414a12eced19e04427f7.png";
import imgHero from "figma:asset/2db892d680f61d7ca84c67faa8950c0fa9d2c283.png";
import imgHero1 from "figma:asset/bdb0c22dd6dc009de7c5d59725aeabc5ccca6af0.png";
import imgDuotoneAggiornato111 from "figma:asset/12a587e661ac891845a1559db7f7b477cd3fec50.png";
import imgHero1Card from "figma:asset/dbda009cf7ce3cb8b8fa63b9ac1bf773ad990779.png";
import imgFooterGlow from "figma:asset/d165bf6da129c67923695debe4d9f2ebc81711c1.png";
import imgVector71 from "figma:asset/9cdce418b3a5571bf0032bf8a9bcbfc560939cbb.png";
import imgVector71Credit from "figma:asset/00c7fe8da6af10c265deb233351871f9088f29d7.png";
import imgVector71Prepaid from "figma:asset/ce06c2bf1a645932289ae547a3f41056d34c74a1.png";
import imgVector71Conti from "figma:asset/641bc1964342e64082e228eb03e0631f06079ee5.png";
import imgVector71Amex from "figma:asset/6a4f4cc23a90d0944bdb4a6bec55feacbbde9ccc.png";
import imgVector70Chiarezza from "figma:asset/e0ed635eba57ff52f926e39aa5218d7e24d0d783.png";
import imgVector70Coerenza from "figma:asset/b0f01b2cfb6e16b56f67718cf292aab0821a7ca6.png";
import imgVector70Solidita from "figma:asset/a878cdacb3d3a8ea44c5a28afe4482a48b00e3ef.png";
import imgVector69PerChiProgetta from "figma:asset/9e3616c0c209816ca2af045b74cb6b6025fa18e3.png";
import imgVector69PerChiProtegge from "figma:asset/956c20114eb2296f5a5eca3037e9ca4653ec3607.png";

import { useEffect, useRef, useState, useCallback } from "react";

function useParallax(speed = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let currentOffset = 0;
    let targetOffset = 0;
    let rafId: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      currentOffset = lerp(currentOffset, targetOffset, 0.06);
      setOffset(currentOffset);
      rafId = requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const viewCenter = window.innerHeight / 2;
      targetOffset = (center - viewCenter) * speed;
    };

    handleScroll();
    rafId = requestAnimationFrame(animate);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return { ref, offset };
}

function Frame1() {
  return (
    <div className="absolute h-full right-0 top-0 w-1/2">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-48.95%] max-w-none top-0 w-[197.89%]" src={imgFrame1410077078} />
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="absolute left-0 top-0 w-1/2 h-full overflow-clip">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Perfectly_Nineties:Regular'] justify-center leading-[0] left-[100%] not-italic text-[#201a39] text-[176px] text-center top-1/2 tracking-[-3.52px] whitespace-nowrap">
        <p>
          <span className="leading-[0.9]">{`La tua nuova `}</span>
          <span className="font-['Perfectly_Nineties:Italic',sans-serif] italic leading-[0.9]">Banca</span>
        </p>
      </div>
    </div>
  );
}

function Group8() {
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
          <path d={svgPaths.p35d12700} fill="var(--fill-0, #092374)" id="Subtract_3" />
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
          <path d={svgPaths.p10afbf00} fill="url(#paint0_linear_1_567)" id="Rectangle 8 (Stroke)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_567" x1="124.781" x2="9.66277e-05" y1="0.00653875" y2="64">
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
          <mask height="16" id="mask0_1_557" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_557)">
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
          <mask height="16" id="mask0_1_551" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_551)">
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

function Frame2() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[87px] items-center relative shrink-0">
      <Group8 />
      <Frame2 />
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

function ButtonSparkleGroup() {
  return (
    <div className="h-[17.142px] relative shrink-0 w-[22.857px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.8568 17.1423">
        <path d={svgPathsButton.p1e3c8100} fill="var(--fill-0, #1C1732)" />
        <path d={svgPathsButton.p29621500} fill="var(--fill-0, #1C1732)" />
        <path d={svgPathsButton.p1ff42e00} fill="var(--fill-0, #1C1732)" />
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="group bg-white content-stretch flex items-center justify-between px-[24px] py-[16px] relative shrink-0 w-[232px] cursor-pointer" data-name="Button">
      <div className="relative overflow-hidden shrink-0 h-[16px]">
        <div className="flex flex-col transition-[translate] duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
          <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[15.82px] not-italic text-[16px] text-black whitespace-nowrap">Chiedi all'AI Agent</p>
          <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[15.82px] not-italic text-[16px] text-black whitespace-nowrap" aria-hidden="true">Chiedi all'AI Agent</p>
        </div>
      </div>
      <ButtonSparkleGroup />
    </div>
  );
}

function Frame4() {
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
    <div className="absolute content-stretch flex h-[112px] items-center justify-between left-0 p-[32px] top-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(163,163,163,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <Frame5 />
      <Frame4 />
    </div>
  );
}

function Group2() {
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

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] relative shrink-0">
      <Group2 />
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#201a39] text-[16px] whitespace-nowrap">
        <p className="leading-[16.95px]">Illimity Bank</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bottom-[32px] content-stretch flex flex-col gap-[6px] items-start left-[32px] z-[2]">
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(32,26,57,0.5)] whitespace-nowrap">
        <p className="leading-[16.95px]">Offerta Bundle</p>
      </div>
      <Frame15 />
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(32,26,57,0.5)] whitespace-nowrap">
        <p className="leading-[16.95px]">Conto Deposito</p>
      </div>
      <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(32,26,57,0.5)] whitespace-nowrap">
        <p className="leading-[16.95px]">Deposit Only</p>
      </div>
    </div>
  );
}

const HERO_VALUE_PROPS = [
  { title: "Veloce.", desc: "Digitale al 100%." },
  { title: "Vantaggiosa.", desc: "Fino al 3,15% sul deposito." },
  { title: "Trasparente.", desc: "Zero costi nascosti." },
  { title: "Affidabile.", desc: "Con te in mente." },
  { title: "Vicina.", desc: "Ci trovi quando vuoi." },
];

function LogoWhite() {
  return (
    <div className="h-[64px] relative shrink-0 w-[124.823px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124.823 64">
        <path d={svgPaths.p1108b700} fill="#FF2698" />
        <path d={svgPaths.p14b18200} fill="#FF7830" />
        <path d={svgPaths.p1ab71d80} fill="#FF5161" />
        <path d={svgPaths.p2d6dc8c0} fill="white" />
        <path d={svgPaths.p2cf48ba0} fill="white" />
        <path d={svgPaths.p38d27e00} fill="white" />
        <path d={svgPaths.p3cd34fc0} fill="white" />
        <path d={svgPaths.pd32c400} fill="white" />
        <path d={svgPaths.peec2500} fill="white" />
        <path d={svgPaths.p1a053380} fill="white" />
        <path d={svgPaths.p25082b00} fill="white" />
        <path d={svgPaths.p35d12700} fill="white" />
        <path d={svgPaths.p23beb470} fill="white" />
        <path d={svgPaths.p1f813300} fill="white" />
        <path d={svgPaths.p5b2a780} fill="white" />
        <path d={svgPaths.pcfa9700} fill="white" />
        <path d={svgPaths.p2cf57300} fill="white" />
        <path d={svgPaths.p1ee8b5f2} fill="white" />
        <path d={svgPaths.p1c71a800} fill="white" />
        <path d={svgPaths.p3713a100} fill="white" />
        <path d={svgPaths.p3fc15f80} fill="white" />
        <path d={svgPaths.p2b480ef0} fill="white" />
        <path d={svgPaths.p2341fc00} fill="white" />
        <path d={svgPaths.p10afbf00} fill="url(#paint0_linear_hero_logo_w)" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_hero_logo_w" x1="124.781" x2="9.66277e-05" y1="0.00653875" y2="64">
            <stop stopColor="#FF04C7" />
            <stop offset="1" stopColor="#FF9804" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function HeaderWhite() {
  return (
    <div className="content-stretch flex h-[112px] items-center justify-between p-[32px] w-full">
      <div aria-hidden="true" className="absolute border-[rgba(163,163,163,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[87px] items-center relative shrink-0">
        <LogoWhite />
        <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-white text-[14px] tracking-[-0.141px] whitespace-nowrap">
              <p className="leading-[15.82px]">Menu</p>
            </div>
            <div className="relative shrink-0 size-[16px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <mask height="16" id="mask_dehaze_hero_w" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                  <rect fill="#D9D9D9" height="16" width="16" />
                </mask>
                <g mask="url(#mask_dehaze_hero_w)">
                  <path d={svgPaths.p1a420a80} fill="white" />
                </g>
              </svg>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-white text-[14px] tracking-[-0.141px] whitespace-nowrap">
              <p className="leading-[15.82px]">Servizi</p>
            </div>
            <div className="relative shrink-0 size-[16px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <mask height="16" id="mask_add_hero_w" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                  <rect fill="#D9D9D9" height="16" width="16" />
                </mask>
                <g mask="url(#mask_add_hero_w)">
                  <path d={svgPaths.p225a7480} fill="white" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame4 />
    </div>
  );
}

function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const whitePanelRef = useRef<HTMLDivElement>(null);
  const oldTextWhiteRef = useRef<HTMLDivElement>(null);
  const oldDarkTextRef = useRef<HTMLDivElement>(null);
  const newTextRef = useRef<HTMLDivElement>(null);
  const headerDarkRef = useRef<HTMLDivElement>(null);
  const headerWhiteRef = useRef<HTMLDivElement>(null);
  const propsRef = useRef<HTMLDivElement>(null);
  const navDarkRef = useRef<HTMLDivElement>(null);
  const circleSvgRef = useRef<HTMLDivElement>(null);
  const oldSmallTextsRef = useRef<HTMLDivElement>(null);
  const smallDarkClipRef = useRef<HTMLDivElement>(null);
  const bottomRightRef = useRef<HTMLDivElement>(null);

  const SCROLL_DISTANCE = 1700;
  const STICKY_RELEASE = 1200; // wrapper releases when "Nature" is ~centered

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        if (!wrapperRef.current) return;
        const rect = wrapperRef.current.getBoundingClientRect();
        const scrolled = Math.max(0, -rect.top);
        const p = Math.min(1, scrolled / SCROLL_DISTANCE);
        const c = (v: number) => Math.max(0, Math.min(1, v));
        const imgExp = c(p / 0.4);
        const oldFade = c(1 - p / 0.2);
        const hdrTr = c(p / 0.35);
        const propApp = c((p - 0.25) / 0.25);
        const btmApp = c((p - 0.3) / 0.25);
        const circFade = c(1 - p / 0.25);
        const panelW = 50 * (1 - imgExp);

        // Slide-through: text enters from right, crosses center, exits left
        const slideP = c((p - 0.15) / 0.8);
        const slideX = 120 - slideP * 240;
        const newOp = slideP < 0.1 ? slideP / 0.1 : slideP > 0.9 ? (1 - slideP) / 0.1 : 1;
        if (whitePanelRef.current) whitePanelRef.current.style.width = `${panelW}%`;
        if (oldDarkTextRef.current) {
          oldDarkTextRef.current.style.clipPath = `inset(0 ${100 - panelW}% 0 0)`;
          oldDarkTextRef.current.style.opacity = String(oldFade);
        }
        if (oldTextWhiteRef.current) oldTextWhiteRef.current.style.opacity = String(oldFade);
        if (newTextRef.current) {
          newTextRef.current.style.opacity = String(newOp);
          newTextRef.current.style.transform = `translate(calc(-50% + ${slideX}vw), -50%)`;
        }
        if (headerDarkRef.current) {
          headerDarkRef.current.style.opacity = String(1 - hdrTr);
          headerDarkRef.current.style.pointerEvents = hdrTr < 0.5 ? "auto" : "none";
          headerDarkRef.current.style.zIndex = hdrTr < 0.5 ? "6" : "5";
        }
        if (headerWhiteRef.current) {
          headerWhiteRef.current.style.opacity = String(hdrTr);
          headerWhiteRef.current.style.pointerEvents = hdrTr > 0.01 ? "auto" : "none";
          headerWhiteRef.current.style.zIndex = hdrTr >= 0.5 ? "6" : "5";
        }
        if (propsRef.current) {
          propsRef.current.style.opacity = String(propApp);
          propsRef.current.style.transform = `translateX(-50%) translateY(${(1 - propApp) * 40}px)`;
        }
        if (navDarkRef.current) navDarkRef.current.style.clipPath = `inset(0 ${100 - panelW}% 0 0)`;

        if (oldSmallTextsRef.current) oldSmallTextsRef.current.style.opacity = String(oldFade);
        if (smallDarkClipRef.current) {
          smallDarkClipRef.current.style.clipPath = `inset(0 ${100 - panelW}% 0 0)`;
          smallDarkClipRef.current.style.opacity = String(oldFade);
        }
        if (bottomRightRef.current) bottomRightRef.current.style.color = `rgba(234,232,232,${0.5 + btmApp * 0.5})`;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={wrapperRef} className="relative shrink-0 w-full z-[8]" style={{ height: `calc(200vh + ${STICKY_RELEASE}px)` }}>
      <div className="sticky top-0 h-screen overflow-clip">
        <img alt="" className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none" src={imgFrame1410077078} />
        <div ref={whitePanelRef} className="absolute left-0 top-0 bottom-0 bg-white z-[1] pointer-events-none" style={{ width: "50%" }} />
        <div ref={oldDarkTextRef} className="absolute inset-0 flex items-center justify-center z-[3] pointer-events-none" style={{ clipPath: "inset(0 50% 0 0)" }}>
          <p className="font-['Perfectly_Nineties:Regular',sans-serif] text-[176px] text-center text-[#201a39] tracking-[-3.52px] whitespace-nowrap leading-[0]">
            <span className="leading-[0.9]">{`La tua nuova `}</span>
            <span className="font-['Perfectly_Nineties:Italic',sans-serif] italic leading-[0.9]">Banca</span>
          </p>
        </div>
        <div ref={oldTextWhiteRef} className="absolute inset-0 flex items-center justify-center z-[2] pointer-events-none">
          <p className="font-['Perfectly_Nineties:Regular',sans-serif] text-[176px] text-center text-white tracking-[-3.52px] whitespace-nowrap leading-[0]">
            <span className="leading-[0.9]">{`La tua nuova `}</span>
            <span className="font-['Perfectly_Nineties:Italic',sans-serif] italic leading-[0.9]">Banca</span>
          </p>
        </div>
        <div ref={newTextRef} className="absolute left-1/2 top-1/2 z-[2] pointer-events-none" style={{ opacity: 0, transform: "translate(calc(-50% + 120vw), -50%)", willChange: "transform, opacity" }}>
          <p className="font-['Perfectly_Nineties:Regular',sans-serif] text-[176px] text-center text-white tracking-[-3.52px] whitespace-nowrap leading-[0]">
            <span className="leading-[0.9]">{`Limitless by Design. `}</span>
            <span className="font-['Perfectly_Nineties:Italic',sans-serif] italic leading-[0.9]">Human</span>
            <span className="leading-[0.9]">{` by Nature.`}</span>
          </p>
        </div>
        <div ref={headerDarkRef} className="absolute left-0 top-0 w-full z-[6]"><Header /></div>
        <div ref={headerWhiteRef} className="absolute left-0 top-0 w-full z-[5]" style={{ opacity: 0, pointerEvents: "none" }}><HeaderWhite /></div>
        <div ref={propsRef} className="absolute left-1/2 bottom-[280px] flex items-start justify-between w-[1376px] z-[4] pointer-events-none" style={{ opacity: 0, transform: "translateX(-50%) translateY(40px)" }}>
          {HERO_VALUE_PROPS.map((vp, i) => (
            <div key={i} className={`flex flex-col justify-center relative shrink-0 w-[230px] font-['PP_Neue_Montreal:Medium',sans-serif] text-[20px] text-[#eae8e8] leading-[1.1] not-italic whitespace-pre-wrap ${i === 0 ? "text-left" : i === 4 ? "text-right" : "text-center"}`}>
              <p className="mb-0">{vp.title}</p>
              <p>{vp.desc}</p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-[32px] content-stretch flex flex-col gap-[6px] items-start left-[32px] z-[2]">
          <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">
            <p className="leading-[16.95px]">Offerta Bundle</p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] relative shrink-0">
            <div className="relative shrink-0 size-[16px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g>
                  <circle cx="8" cy="8" r="7" stroke="white" strokeOpacity="0.5" strokeWidth="2" />
                  <g>
                    <mask fill="white" id="path-2-inside-1_white">
                      <path d={svgPaths.p2a0ab400} />
                    </mask>
                    <path d={svgPaths.p2a0ab400} mask="url(#path-2-inside-1_white)" stroke="white" strokeWidth="4" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-white text-[16px] whitespace-nowrap">
              <p className="leading-[16.95px]">Illimity Bank</p>
            </div>
          </div>
          <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">
            <p className="leading-[16.95px]">Conto Deposito</p>
          </div>
          <div className="flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">
            <p className="leading-[16.95px]">Deposit Only</p>
          </div>
        </div>
        <div ref={navDarkRef} className="absolute inset-0 z-[3] pointer-events-none" style={{ clipPath: "inset(0 50% 0 0)" }}>
          <Frame14 />
        </div>
        <div ref={bottomRightRef} className="absolute bottom-[32px] flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-end leading-[0] not-italic right-[32px] text-[#eae8e8] text-[16px] text-right w-[173px] z-[4]">
          <p className="leading-[16.95px] whitespace-pre-wrap">Tutto quello che serve per gestire il tuo denaro.</p>
        </div>
        <div ref={circleSvgRef} className="-translate-x-1/2 absolute bottom-[0.02px] flex items-center justify-center left-1/2 w-[100vw] aspect-square z-[0] pointer-events-none">
          <div className="-scale-y-100 flex-none rotate-180 w-full aspect-square">
            <div className="relative w-full aspect-square" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1618.98 1618.98">
                <path d={svgPaths.p26d4fa80} id="Vector" stroke="url(#paint0_linear_hero_scroll)" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_hero_scroll" x1="809.491" x2="809.491" y1="-0.508717" y2="1619.49">
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
        <div ref={oldSmallTextsRef}>
          <p className="absolute z-[2] font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.02] left-[calc(50%-608px)] not-italic text-white text-[44.208px] top-[60.8%]">Limitless by Design.</p>
          <p className="absolute z-[2] font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.02] right-[calc(50%-608px)] not-italic text-[44.208px] text-right text-white top-[60.8%] whitespace-nowrap">Human by Nature.</p>
        </div>
        <div ref={smallDarkClipRef} className="absolute inset-0 z-[3] pointer-events-none" style={{ clipPath: "inset(0 50% 0 0)" }}>
          <p className="absolute font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.02] left-[calc(50%-608px)] not-italic text-[#201a39] text-[44.208px] top-[60.8%]">Limitless by Design.</p>
        </div>
      </div>
    </div>
  );
}

function ScrollRevealParagraph() {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const words: { word: string; italic: boolean; isSpace: boolean }[] = [];
  const textParts: { text: string; italic: boolean }[] = [
    { text: "illimity unisce solidit\u00e0 finanziaria e approccio digitale. Semplifica ci\u00f2 che \u00e8 complesso. Rende l\u2019esperienza bancaria pi\u00f9 ", italic: false },
    { text: "fluida", italic: true },
    { text: ".", italic: false },
  ];
  textParts.forEach((part) => {
    part.text.split(/(\s+)/).forEach((w) => {
      if (w.length > 0) words.push({ word: w, italic: part.italic, isSpace: w.trim() === "" });
    });
  });
  const contentWords = words.filter((w) => !w.isSpace);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const start = viewH * 0.85;
      const end = viewH * 0.3;
      const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
      const total = contentWords.length;
      wordRefs.current.forEach((span, i) => {
        if (!span) return;
        const wp = Math.max(0, Math.min(1, (progress - i / total) / (1 / total)));
        span.style.opacity = String(0.12 + wp * 0.88);
      });
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { update(); ticking = false; }); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  let idx = 0;
  return (
    <p ref={containerRef} className="relative shrink-0 text-[#201a39] w-[632px]">
      {words.map((w, i) => {
        if (w.isSpace) return <span key={i}>{w.word}</span>;
        const ci = idx++;
        return (
          <span
            key={i}
            ref={(el) => { wordRefs.current[ci] = el; }}
            className={w.italic ? "font-['Perfectly_Nineties:Italic',sans-serif] italic leading-none" : "leading-none"}
            style={{ opacity: 0.12, transition: "opacity 0.12s ease-out" }}
          >{w.word}</span>
        );
      })}
    </p>
  );
}

function Frame49() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] gap-[4px] items-start leading-[0] left-[calc(50%+4px)] not-italic text-[75.924px] top-[309px] tracking-[-1.5185px] whitespace-pre-wrap">
      <p className="bg-clip-text min-w-full relative shrink-0 text-[transparent] w-[min-content]" style={{ backgroundImage: "linear-gradient(90.3354deg, rgb(33, 48, 182) 8.3724%, rgb(49, 69, 158) 40.013%, rgb(185, 29, 187) 72.075%)", WebkitTextFillColor: "transparent" }}>
        <span className="bg-clip-text font-['Perfectly_Nineties:Italic',sans-serif] italic leading-none" style={{ backgroundImage: "linear-gradient(90.3354deg, rgb(33, 48, 182) 8.3724%, rgb(49, 69, 158) 40.013%, rgb(185, 29, 187) 72.075%)", WebkitTextFillColor: "transparent" }}>
          Banking by people.
        </span>
        <span className="leading-none">{` `}</span>
      </p>
      <ScrollRevealParagraph />
    </div>
  );
}
/*

à finanziaria e approccio digitale. Semplifica ciò che è complesso. Rende l’function Frame() {
*/
function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-end leading-[0] not-italic relative shrink-0 text-[#201a39] whitespace-nowrap">
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

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-end leading-[0] not-italic relative shrink-0 text-[#201a39] whitespace-nowrap">
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

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-end leading-[0] not-italic relative shrink-0 text-[#201a39] whitespace-nowrap">
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

function Frame55() {
  return (
    <div className="absolute content-stretch flex gap-[32px] items-center left-[calc(8.33%+4px)] top-[900px]">
      <Frame />
      <div className="h-[107px] relative shrink-0 w-[28.671px]">
        <div className="absolute inset-[-0.12%_-1.68%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.6365 107.259">
            <path d={svgPaths.p296cbcc8} id="Vector 68" opacity="0.3" stroke="var(--stroke-0, #201A39)" />
          </svg>
        </div>
      </div>
      <Frame51 />
      <div className="h-[107px] relative shrink-0 w-[28.671px]">
        <div className="absolute inset-[-0.12%_-1.68%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.6365 107.259">
            <path d={svgPaths.p296cbcc8} id="Vector 68" opacity="0.3" stroke="var(--stroke-0, #201A39)" />
          </svg>
        </div>
      </div>
      <Frame50 />
    </div>
  );
}

function Hero1() {
  const parallaxRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const viewH = window.innerHeight;
          const progress = 1 - (rect.top + rect.height) / (viewH + rect.height);
          const offset = (progress - 0.5) * 70;
          el.style.transform = `scale(1.15) translateY(${offset}px)`;
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white h-[1057px] overflow-clip relative shrink-0 w-full z-[7]" data-name="Hero">
      <div
        className="absolute h-[578.846px] left-[calc(50%-612px)] top-[128px] w-[436.002px]"
        data-name="Union"
        style={{
          WebkitMaskImage: `url(${imgHero1Card})`,
          WebkitMaskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskImage: `url(${imgHero1Card})`,
          maskSize: '100% 100%',
          maskRepeat: 'no-repeat',
        }}
      >
        <img
          ref={parallaxRef}
          alt=""
          className="absolute block max-w-none size-full object-cover will-change-transform"
          height="578.846"
          src={imgHero1Card}
          width="436.002"
          style={{ transform: 'scale(1.15) translateY(0px)' }}
        />
      </div>
      <div className="absolute bottom-[854px] font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.1] not-italic left-[calc(50%+4px)] text-[#201a39] text-[24px] translate-y-full w-[493px] whitespace-pre-wrap">
        <p className="mb-0">{`Più esperienza. `}</p>
        <p>Meno burocrazia.</p>
      </div>
      <Frame49 />
      <Frame55 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 size-[1617.98px] top-[141.32px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1617.98 1617.98" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Frame 1410077121">
          <g clipPath="url(#clip0_1_618)">
            <g filter="url(#filter0_f_1_618)" id="Ellipse 30">
              <ellipse cx="610.98" cy="-26.3201" fill="var(--fill-0, #1B23DB)" rx="434" ry="231" />
            </g>
            <g filter="url(#filter1_f_1_618)" id="Ellipse 32" opacity="0.6">
              <ellipse cx="610.98" cy="154.18" fill="var(--fill-0, #1B23DB)" rx="129" ry="411.5" />
            </g>
            <g filter="url(#filter2_f_1_618)" id="Ellipse 31">
              <ellipse cx="1007.98" cy="-26.3201" fill="var(--fill-0, #BB06A6)" rx="434" ry="231" />
            </g>
            <g filter="url(#filter3_f_1_618)" id="Ellipse 33" opacity="0.6">
              <ellipse cx="1007.98" cy="154.18" fill="var(--fill-0, #BB06A6)" rx="140" ry="411.5" />
            </g>
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1350" id="filter0_f_1_618" width="1756" x="-267.02" y="-701.32">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_618" stdDeviation="222" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1711" id="filter1_f_1_618" width="1146" x="37.9805" y="-701.32">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_618" stdDeviation="222" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1350" id="filter2_f_1_618" width="1756" x="129.98" y="-701.32">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_618" stdDeviation="222" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1711" id="filter3_f_1_618" width="1168" x="423.98" y="-701.32">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_618" stdDeviation="222" />
          </filter>
          <clipPath id="clip0_1_618">
            <path d={svgPaths.pcdf6200} fill="white" />
          </clipPath>
          <g data-figma-scatter="f0.51_w0.06_aj180_sj0.65_r0_s1471151057957568022_sw1" data-figma-scatter-ref="stroke0_1_618_ref" id="stroke0_1_618" />
          <path d={svgPaths.p1fdbac00} id="stroke0_1_618_ref" />
        </defs>
      </svg>
    </div>
  );
}

function Frame52() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] items-start left-1/2 -translate-x-1/2 not-italic pb-[5px] text-[138.803px] text-white top-[191.5px] tracking-[-2.7761px] w-[1266px] whitespace-pre-wrap">
      <p className="leading-none relative shrink-0 text-center w-full">Modularità, senza limiti:</p>
      <p className="leading-none relative shrink-0 text-center w-full">costruisci il tuo</p>
      <p className="leading-[0] relative shrink-0 w-full">
        <span className="font-['Perfectly_Nineties:Italic',sans-serif] italic leading-none">ecosistema</span>
        <span className="leading-none">{` di servizi.`}</span>
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[calc(8.33%+3px)] not-italic text-white top-[901.83px]">
      <p className="absolute font-['Perfectly_Nineties:Regular',sans-serif] leading-none left-[calc(12.5%-57px)] text-[109.013px] top-[calc(50%+112.83px)] tracking-[-2.1803px]">02</p>
      <p className="absolute font-['PP_Neue_Montreal:Medium',sans-serif] leading-[35.313px] right-[calc(75%+113px)] text-[30px] top-[calc(50%+176px)] translate-x-full">/ 05</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between py-[32px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[52.326px] text-white tracking-[-0.5233px] whitespace-nowrap">
        <p className="leading-none">Carte di credito</p>
      </div>
      <div className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[18px] text-right text-white w-[223px] whitespace-pre-wrap">
        <p className="mb-0">Fino al 3.15%</p>
        <p>sul Conto Deposito</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between py-[32px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[52.326px] text-white tracking-[-0.5233px] whitespace-nowrap">
        <p className="leading-none">Carte di debito</p>
      </div>
      <div className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[18px] text-right text-white w-[223px] whitespace-pre-wrap">
        <p className="mb-0">Scegli quella</p>
        <p>più adatta a te</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-between py-[32px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[52.326px] text-white tracking-[-0.5233px] whitespace-nowrap">
        <p className="leading-none">Carte prepagate</p>
      </div>
      <div className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[18px] text-right text-white w-[223px] whitespace-pre-wrap">
        <p className="mb-0">Controllo totale</p>
        <p>delle spese</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between py-[32px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[52.326px] text-white tracking-[-0.5233px] whitespace-nowrap">
        <p className="leading-none">Conti collegati</p>
      </div>
      <div className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[18px] text-right text-white w-[223px] whitespace-pre-wrap">
        <p className="mb-0">Tutti i conti in</p>
        <p>un unico spazio</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between py-[32px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[52.326px] text-white tracking-[-0.5233px] whitespace-nowrap">
        <p className="leading-none">Carte Amex</p>
      </div>
      <div className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[18px] text-right text-white w-[223px] whitespace-pre-wrap">
        <p className="mb-0">Vantaggi esclusivi</p>
        <p>sui tuoi acquisti</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame7 />
      <Frame8 />
      <Frame10 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[16.95px] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">Servizi</p>
      <Frame9 />
    </div>
  );
}

function Svg1() {
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

function Button3() {
  return (
    <div className="group bg-white content-stretch flex gap-[32px] items-center px-[24px] py-[16px] relative shrink-0 cursor-pointer" data-name="Button">
      <div className="relative overflow-hidden shrink-0 h-[16px]">
        <div className="flex flex-col transition-[translate] duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
          <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[15.82px] not-italic text-[16px] text-black whitespace-nowrap">Personalizza il tuo Conto</p>
          <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[15.82px] not-italic text-[16px] text-black whitespace-nowrap" aria-hidden="true">Personalizza il tuo Conto</p>
        </div>
      </div>
      <Svg1 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full">
      <Button3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[calc(50%+24px)] top-[810px] w-[590px]">
      <Frame53 />
      <Frame54 />
    </div>
  );
}

const SERVICES_DATA = [
  {
    title: "Carte di credito",
    desc: ["Fino al 3.15%", "sul Conto Deposito"],
    image: imgVector71Credit,
  },
  {
    title: "Carte di debito",
    desc: ["Scegli quella", "più adatta a te"],
    image: imgVector71,
  },
  {
    title: "Carte prepagate",
    desc: ["Controllo totale", "delle spese"],
    image: imgVector71Prepaid,
  },
  {
    title: "Conti collegati",
    desc: ["Tutti i conti in", "un unico spazio"],
    image: imgVector71Conti,
  },
  {
    title: "Carte Amex",
    desc: ["Vantaggi esclusivi", "sui tuoi acquisti"],
    image: imgVector71Amex,
  },
];

function Hero2() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const STEP_HEIGHT = 400; // px of scroll per item

  const handleScroll = useCallback(() => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const scrolled = Math.max(0, -rect.top);
    const scrollableDistance = rect.height - window.innerHeight;

    if (scrollableDistance <= 0) return;

    const progress = Math.min(1, scrolled / scrollableDistance);
    const newIndex = Math.min(4, Math.floor(progress * 5));
    setActiveIndex(newIndex);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      className="bg-[#130a27] relative shrink-0 w-full z-[6]"
      data-name="Hero"
    >
      {/* Wave SVG at top */}
      <div
        className="absolute h-[208px] left-[-2px] top-[-110px] w-[1445px]"
        data-name="Union"
      >
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1445 208"
        >
          <path
            d={svgPaths.p4979380}
            fill="var(--fill-0, white)"
            id="Union"
          />
        </svg>
      </div>

      {/* Decorative background blur — spans entire section */}
      <div className="absolute inset-0 overflow-clip pointer-events-none">
        <Frame33 />
      </div>

      {/* Title — scrolls normally, NOT sticky */}
      <div className="relative px-[0px] pt-[300px] pb-[80px]">
        <div className="content-stretch flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] items-start mx-auto not-italic pb-[5px] text-[138.803px] text-white tracking-[-2.7761px] w-[1266px] whitespace-pre-wrap">
          <p className="leading-none relative shrink-0 text-center w-full">
            Modularità, senza limiti:
          </p>
          <p className="leading-none relative shrink-0 text-center w-full">
            costruisci il tuo
          </p>
          <p className="leading-[0] relative shrink-0 w-full">
            <span className="font-['Perfectly_Nineties:Italic',sans-serif] italic leading-none">
              ecosistema
            </span>
            <span className="leading-none">{` di servizi.`}</span>
          </p>
        </div>
      </div>

      {/* Tall scroll wrapper — creates scroll space for 5 items */}
      <div
        ref={wrapperRef}
        className="relative"
        style={{ height: `calc(100vh + ${5 * STEP_HEIGHT}px)` }}
      >
        {/* Sticky viewport — pins during scroll */}
        <div className="sticky top-0 h-screen overflow-clip">
          {/* Original 1578px layout, translated to center services module in viewport.
              Services module center ≈ y:1064px in original layout.
              translateY(calc(50vh - 1064px)) aligns that center to viewport center. */}
          <div
            className="h-[1578px] relative w-full"
            style={{ transform: "translateY(calc(50vh - 1150px))" }}
          >
            {/* Dynamic image — exact original position & size */}
            <div
              className="absolute h-[528.396px] left-[calc(16.67%+2px)] top-[722px] w-[398px]"
              data-name="Union"
            >
              {SERVICES_DATA.map((s, i) => (
                <img
                  key={i}
                  alt={s.title}
                  className="absolute block max-w-none size-full object-contain transition-opacity duration-700 ease-in-out"
                  style={{ opacity: activeIndex === i ? 1 : 0 }}
                  src={s.image}
                />
              ))}
            </div>

            {/* Dynamic counter — exact original Group1 position */}
            <div className="absolute contents left-[calc(8.33%+3px)] not-italic text-white top-[901.83px]">
              <p className="absolute font-['Perfectly_Nineties:Regular',sans-serif] leading-none left-[calc(12.5%-57px)] text-[109.013px] top-[calc(50%+112.83px)] tracking-[-2.1803px] transition-all duration-500">
                {String(activeIndex + 1).padStart(2, "0")}
              </p>
              <p className="absolute font-['PP_Neue_Montreal:Medium',sans-serif] leading-[35.313px] right-[calc(75%+113px)] text-[30px] top-[calc(50%+176px)] translate-x-full">
                / 05
              </p>
            </div>

            {/* Service items — exact original Frame11 position */}
            <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[calc(50%+24px)] top-[810px] w-[590px]">
              {/* Frame53 equivalent */}
              <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
                <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[16.95px] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">
                  Servizi
                </p>
                {/* Frame9 equivalent — all items */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  {SERVICES_DATA.map((s, i) => (
                    <div
                      key={i}
                      className="content-stretch flex items-center justify-between py-[32px] relative shrink-0 w-full transition-opacity duration-500 ease-in-out"
                      style={{ opacity: activeIndex === i ? 1 : 0.25 }}
                    >
                      <div
                        aria-hidden="true"
                        className={`absolute border-solid border-t ${
                          activeIndex === i || i >= 3 ? "border-b" : ""
                        } inset-0 pointer-events-none transition-colors duration-500 ease-in-out`}
                        style={{ borderColor: activeIndex === i ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.2)" }}
                      />
                      <div className="flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[52.326px] text-white tracking-[-0.5233px] whitespace-nowrap">
                        <p className="leading-none">{s.title}</p>
                      </div>
                      <div className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[18px] text-right text-white w-[223px] whitespace-pre-wrap">
                        <p className="mb-0">{s.desc[0]}</p>
                        <p>{s.desc[1]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Button — same as original Frame54 */}
              <Frame54 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[15px] relative shrink-0 w-[22px]">
      <div className="flex flex-col font-['Perfectly_Nineties:Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">
        <p className="leading-none whitespace-pre-wrap">01.</p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0">
      <Frame77 />
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[72px] text-white">Libertà</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[24px] relative w-full">
          <Frame64 />
          <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[26px] text-right text-white w-[260px] whitespace-pre-wrap">Scegli cosa attivare. Quando vuoi.</p>
        </div>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[15px] relative shrink-0 w-[22px]">
      <div className="flex flex-col font-['Perfectly_Nineties:Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-none">02.</p>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[16px] items-end opacity-20 relative shrink-0">
      <Frame78 />
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[72px] text-white">Chiarezza</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame65 />
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.1] not-italic opacity-0 relative shrink-0 text-[26px] text-right text-white w-[260px] whitespace-pre-wrap">Scegli cosa attivare. Quando vuoi.</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[15px] relative shrink-0 w-[22px]">
      <div className="flex flex-col font-['Perfectly_Nineties:Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-none">03.</p>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[16px] items-end opacity-20 relative shrink-0">
      <Frame79 />
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[72px] text-white">Coerenza</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame66 />
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.1] not-italic opacity-0 relative shrink-0 text-[26px] text-right text-white w-[260px] whitespace-pre-wrap">Scegli cosa attivare. Quando vuoi.</p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[15px] relative shrink-0 w-[22px]">
      <div className="flex flex-col font-['Perfectly_Nineties:Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-none">04.</p>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[16px] items-end opacity-20 relative shrink-0">
      <Frame80 />
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[72px] text-white">Solidità</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame67 />
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.1] not-italic opacity-0 relative shrink-0 text-[26px] text-right text-white w-[260px] whitespace-pre-wrap">Scegli cosa attivare. Quando vuoi.</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[38px] items-end left-[86px] top-[521px] w-[711px]">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 711 1">
            <path d="M0 0.5H711" id="Vector 65" opacity="0.2" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
      <Frame58 />
      <Frame60 />
      <Frame62 />
      <Frame63 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-center justify-center mb-[-5px] pl-[270px] relative shrink-0">
      <p className="font-['Perfectly_Nineties:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[138.803px] text-white tracking-[-2.7761px]">che ti somiglia.</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 pb-[5px] top-[108px]">
      <p className="font-['Perfectly_Nineties:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[138.803px] text-white tracking-[-2.7761px] min-w-full w-[min-content] whitespace-pre-wrap ml-[-100px]">La Banca</p>
      <Frame57 />
    </div>
  );
}

function Group3() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-[108px]">
      <Frame56 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] left-[calc(54.17%+39.5px)] not-italic text-[24px] text-center text-white top-[196.5px] whitespace-nowrap">
        <p className="leading-[1.1]">Perché illimity?</p>
      </div>
    </div>
  );
}

const MODULO_DATA = [
  {
    number: "01.",
    title: "Libertà",
    desc: "Scegli cosa attivare.\nQuando vuoi.",
    image: imgUnion2,
  },
  {
    number: "02.",
    title: "Chiarezza",
    desc: "Informazioni trasparenti.\nSenza ambiguità.",
    image: imgVector70Chiarezza,
  },
  {
    number: "03.",
    title: "Coerenza",
    desc: "Un'esperienza\nintegrata, ovunque.",
    image: imgVector70Coerenza,
  },
  {
    number: "04.",
    title: "Solidità",
    desc: "Banca regolamentata.\nStandard patrimoniali solidi.",
    image: imgVector70Solidita,
  },
];

function Modulo() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-[#130a27] h-[1165px] relative shrink-0 w-full z-[5]" data-name="Modulo">
      <div className="absolute inset-0 flex justify-center">
        <div className="relative w-[1440px] h-full">
          <div className="-translate-x-1/2 absolute bottom-[-103.28px] flex h-[207.28px] items-center justify-center left-1/2 w-screen">
            <div className="-scale-y-100 flex-none rotate-180 w-full h-full">
              <div className="h-full relative w-full" data-name="Union">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 207.28">
                  <path d={svgPaths.p103b0100} fill="var(--fill-0, #130A27)" id="Union" />
                </svg>
              </div>
            </div>
          </div>

          {/* Dynamic items list */}
          <div className="absolute content-stretch flex flex-col gap-[38px] items-end left-[86px] top-[521px] w-[711px]">
            {/* Top separator line */}
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.5px_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 711 1">
                  <path d="M0 0.5H711" id="Vector 65" opacity="0.2" stroke="var(--stroke-0, white)" />
                </svg>
              </div>
            </div>

            {MODULO_DATA.map((item, i) => {
              const isActive = activeIndex === i;
              return (
                <div
                  key={i}
                  className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer"
                  onMouseEnter={() => setActiveIndex(i)}
                >
                  {/* Number + Title group */}
                  <div
                    className="content-stretch flex gap-[16px] items-end relative shrink-0 transition-all duration-500 ease-in-out"
                    style={{
                      opacity: isActive ? 1 : 0.2,
                      transform: isActive ? "translateX(24px)" : "translateX(0px)",
                    }}
                  >
                    <div className="content-stretch flex flex-col items-center justify-center pb-[15px] relative shrink-0 w-[22px]">
                      <div className="flex flex-col font-['Perfectly_Nineties:Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[-0.24px] whitespace-nowrap">
                        <p className="leading-none">{item.number}</p>
                      </div>
                    </div>
                    <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[72px] text-white">
                      {item.title}
                    </p>
                  </div>

                  {/* Description — reveals on hover */}
                  <p
                    className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[26px] text-right text-white w-[340px] whitespace-pre-wrap transition-opacity duration-500 ease-in-out"
                    style={{ opacity: isActive ? 1 : 0 }}
                  >
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Dynamic image with crossfade */}
          <div className="absolute h-[586.32px] left-[calc(58.33%+92px)] top-[512px] w-[426px]" data-name="Union">
            {MODULO_DATA.map((item, i) => (
              <img
                key={i}
                alt={item.title}
                className="absolute block max-w-none size-full object-cover transition-opacity duration-700 ease-in-out"
                style={{ opacity: activeIndex === i ? 1 : 0 }}
                src={item.image}
              />
            ))}
          </div>

          <Group3 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-full left-0 top-0 w-[720px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[-144.89%] left-[166.2%] max-w-none top-[135.13%] w-[-286.72%]" src={imgFrame1410077078} />
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="absolute h-[285px] left-[calc(33.33%-7px)] overflow-clip bottom-[22px] w-[247px]">
      <div className="-translate-x-1/2 absolute bottom-[35px] flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] justify-end leading-[0.9] left-[calc(50%+124px)] not-italic text-[138.803px] text-center text-white tracking-[-2.7761px] whitespace-nowrap">
        <p className="mb-0">Per chi</p>
        <p className="font-['Perfectly_Nineties:Italic',sans-serif] italic">Progetta</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[calc(33.33%-7px)] top-[643px]">
      <div className="-translate-x-1/2 absolute bottom-[57px] flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] justify-end leading-[0.9] left-[calc(50%+0.5px)] not-italic text-[#201a39] text-[138.803px] text-center tracking-[-2.7761px] whitespace-nowrap">
        <p className="mb-0">Per chi</p>
        <p className="font-['Perfectly_Nineties:Italic',sans-serif] italic">Progetta</p>
      </div>
      <Frame68 />
    </div>
  );
}

function ArrowOutward2() {
  return (
    <div className="relative shrink-0 size-[19.016px]" data-name="arrow_outward">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0161 19.0161">
        <g id="arrow_outward">
          <mask height="20" id="mask0_1_534" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="19.0161" id="Bounding box" width="19.0161" />
          </mask>
          <g mask="url(#mask0_1_534)">
            <path d={svgPaths.p1f444a00} fill="var(--fill-0, #201A39)" id="arrow_outward_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex h-[72px] items-center justify-between py-[15.451px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(32,26,57,0.15)] border-solid border-t-[1.189px] inset-0 pointer-events-none" />
      <div className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#201a39] text-[18px] w-[223px] whitespace-pre-wrap">
        <p className="mb-0">Fino al 3.15%</p>
        <p>sul Conto Deposito</p>
      </div>
      <ArrowOutward2 />
    </div>
  );
}

function ArrowOutward3() {
  return (
    <div className="relative shrink-0 size-[19.016px]" data-name="arrow_outward">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0161 19.0161">
        <g id="arrow_outward">
          <mask height="20" id="mask0_1_608" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="19.0161" id="Bounding box" width="19.0161" />
          </mask>
          <g mask="url(#mask0_1_608)">
            <path d={svgPaths.p11082880} fill="var(--fill-0, #201A39)" id="arrow_outward_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex h-[72px] items-center justify-between py-[15.451px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(32,26,57,0.15)] border-solid border-t-[1.189px] inset-0 pointer-events-none" />
      <div className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#201a39] text-[18px] w-[273px] whitespace-pre-wrap">
        <p className="mb-0">+1.50% sulla giacenza</p>
        <p>del Conto Corrente.</p>
      </div>
      <ArrowOutward3 />
    </div>
  );
}

function ArrowOutward4() {
  return (
    <div className="relative shrink-0 size-[19.016px]" data-name="arrow_outward">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0161 19.0161">
        <g id="arrow_outward">
          <mask height="20" id="mask0_1_608" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="19.0161" id="Bounding box" width="19.0161" />
          </mask>
          <g mask="url(#mask0_1_608)">
            <path d={svgPaths.p11082880} fill="var(--fill-0, #201A39)" id="arrow_outward_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex h-[72px] items-center justify-between py-[15.451px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(32,26,57,0.15)] border-b-[1.189px] border-solid border-t-[1.189px] inset-0 pointer-events-none" />
      <div className="flex-[1_0_0] font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.1] min-h-px min-w-px not-italic relative text-[#201a39] text-[18px] whitespace-pre-wrap">
        <p className="mb-0">Strumenti per pianificare</p>
        <p>e raggiungere i tuoi obiettivi.</p>
      </div>
      <ArrowOutward4 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(75%+10px)] top-[339px] w-[293px]">
      <Frame25 />
      <Frame26 />
      <Frame28 />
    </div>
  );
}

function Svg2() {
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

function Button4() {
  return (
    <div className="group absolute bg-[#eae8e8] bottom-[32px] content-stretch flex gap-[32px] items-center px-[24px] py-[16px] right-[calc(-50vw+720px+32px)] cursor-pointer z-[1]" data-name="Button">
      <div className="relative overflow-hidden shrink-0 h-[16px]">
        <div className="flex flex-col transition-[translate] duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
          <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[15.82px] not-italic text-[16px] text-black whitespace-nowrap">Apri il tuo Conto Progetto</p>
          <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[15.82px] not-italic text-[16px] text-black whitespace-nowrap" aria-hidden="true">Apri il tuo Conto Progetto</p>
        </div>
      </div>
      <Svg2 />
    </div>
  );
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
}

function useHero3Anim(progress: number, startExit: number, endExit: number, startEnter: number, endEnter: number) {
  const rawExit = progress < startExit ? 0 : progress > endExit ? 1 : (progress - startExit) / (endExit - startExit);
  const exit = easeInOutCubic(rawExit);
  const rawEnter = progress < startEnter ? 0 : progress > endEnter ? 1 : (progress - startEnter) / (endEnter - startEnter);
  const enter = easeInOutCubic(rawEnter);
  return { opacity1: 1 - exit, opacity2: enter, y1: -exit * 50, y2: (1 - enter) * 35 };
}

function Hero3() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!sectionRef.current) { ticking = false; return; }
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = sectionRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        const scrollableDistance = sectionHeight - viewportHeight;
        if (scrollableDistance <= 0) { ticking = false; return; }
        const scrolled = -rect.top;
        const p = Math.max(0, Math.min(1, scrolled / scrollableDistance));
        setProgress(p);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Staggered timing for different content groups
  const text = useHero3Anim(progress, 0.12, 0.45, 0.40, 0.73);
  const img = useHero3Anim(progress, 0.14, 0.47, 0.42, 0.75);
  const features = useHero3Anim(progress, 0.16, 0.49, 0.44, 0.77);
  const btn = useHero3Anim(progress, 0.18, 0.51, 0.46, 0.79);
  const bigText = useHero3Anim(progress, 0.18, 0.53, 0.48, 0.84);

  return (
    <div ref={sectionRef} className="relative w-[1440px] shrink-0" style={{ height: "250vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-visible bg-white" data-name="Hero">
        {/* Gradino — dark wave from Modulo pinned at top */}
        <div className="absolute top-[-103.28px] left-1/2 -translate-x-1/2 w-screen h-[207.28px] z-[10] pointer-events-none">
          <div className="-scale-y-100 rotate-180 w-full h-full">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 207.28">
              <path d={svgPaths.p103b0100} fill="#130A27" id="Union_hero3" />
            </svg>
          </div>
        </div>

        {/* Left abstract image */}
        <div className="absolute h-full top-0 right-[720px] left-[calc(-50vw+720px)]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute inset-0 w-full h-full object-cover object-right max-w-none" src={imgFrame1410077078} />
          </div>
        </div>

        {/* Top-left text */}
        <p className="absolute font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.02] left-[104px] not-italic text-[44.208px] text-white top-[80px] w-[305px] whitespace-pre-wrap">Proteggi, progetta, vivi.</p>

        {/* Decorative circle SVG */}
        <div className="-translate-x-1/2 absolute bottom-[0.02px] flex items-center justify-center left-[calc(50%+0.01px)] size-[1617.983px] pointer-events-none">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative size-[1617.983px]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1618.98 1618.98">
                <path d={svgPaths.p26d4fa80} id="Vector" stroke="url(#paint0_linear_hero_progetta)" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_hero_progetta" x1="809.491" x2="809.491" y1="-0.508717" y2="1619.49">
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

        {/* ===== STATE 1: Per chi Progetta ===== */}
        <div style={{ opacity: text.opacity1, transform: `translateY(${text.y1}px)`, pointerEvents: text.opacity1 < 0.3 ? "none" as const : "auto" as const }}>
          <div className="-translate-y-1/2 absolute flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+74px)] not-italic text-[#201a39] text-[16px] top-[178.5px] whitespace-nowrap">
            <p className="leading-[16.972px]">Per chi progetta</p>
          </div>
          <div className="absolute font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.09] left-[calc(50%+74px)] not-italic text-[#201a39] text-[26px] top-[209px] w-[360px] whitespace-pre-wrap">
            <p className="mb-0">{`Conto Deposito, `}</p>
            <p className="mb-0">{`Conto Corrente `}</p>
            <p>e Pianificazione.</p>
          </div>
        </div>
        <div className="absolute flex h-[344.184px] items-center justify-center left-[calc(50%+74px)] top-[338px] w-[260px]" style={{ opacity: img.opacity1, transform: `translateY(${img.y1}px)`, pointerEvents: img.opacity1 < 0.3 ? "none" as const : "auto" as const }}>
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[344.184px] relative w-[260px]" data-name="Union">
              <img alt="" className="absolute block max-w-none size-full" height="344.184" src={imgVector69PerChiProgetta} width="260" />
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-start left-[calc(75%+10px)] top-[339px] w-[293px]" style={{ opacity: features.opacity1, transform: `translateY(${features.y1}px)`, pointerEvents: features.opacity1 < 0.3 ? "none" as const : "auto" as const }}>
          <Frame25 />
          <Frame26 />
          <Frame28 />
        </div>
        <div className="absolute inset-0" style={{ opacity: bigText.opacity1, transform: `translateY(${bigText.y1}px)`, pointerEvents: bigText.opacity1 < 0.3 ? "none" as const : "auto" as const }}>
          <Group6 />
        </div>
        <div className="group absolute bg-[#eae8e8] bottom-[32px] content-stretch flex gap-[32px] items-center px-[24px] py-[16px] right-[calc(-50vw+720px+32px)] cursor-pointer z-[1]" data-name="Button" style={{ opacity: btn.opacity1, transform: `translateY(${btn.y1}px)`, pointerEvents: btn.opacity1 < 0.3 ? "none" as const : "auto" as const }}>
          <div className="relative overflow-hidden shrink-0 h-[16px]">
            <div className="flex flex-col transition-[translate] duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
              <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[15.82px] not-italic text-[16px] text-black whitespace-nowrap">Apri il tuo Conto Progetto</p>
              <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[15.82px] not-italic text-[16px] text-black whitespace-nowrap" aria-hidden="true">Apri il tuo Conto Progetto</p>
            </div>
          </div>
          <Svg2 />
        </div>

        {/* ===== STATE 2: Per chi Protegge ===== */}
        <div style={{ opacity: text.opacity2, transform: `translateY(${text.y2}px)`, pointerEvents: text.opacity2 < 0.3 ? "none" as const : "auto" as const }}>
          <div className="-translate-y-1/2 absolute flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+74px)] not-italic text-[#201a39] text-[16px] top-[178.5px] whitespace-nowrap">
            <p className="leading-[16.972px]">Per chi protegge</p>
          </div>
          <div className="absolute font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.09] left-[calc(50%+74px)] not-italic text-[#201a39] text-[26px] top-[209px] w-[360px] whitespace-pre-wrap">
            <p className="mb-0">Conto Deposito</p>
            <p>semplice.</p>
          </div>
        </div>
        <div className="absolute flex h-[344.184px] items-center justify-center left-[calc(50%+74px)] top-[338px] w-[260px]" style={{ opacity: img.opacity2, transform: `translateY(${img.y2}px)`, pointerEvents: img.opacity2 < 0.3 ? "none" as const : "auto" as const }}>
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[344.184px] relative w-[260px]" data-name="Union">
              <img alt="" className="absolute block max-w-none size-full" height="344.184" src={imgVector69PerChiProtegge} width="260" />
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-start left-[calc(75%+10px)] top-[339px] w-[293px]" style={{ opacity: features.opacity2, transform: `translateY(${features.y2}px)`, pointerEvents: features.opacity2 < 0.3 ? "none" as const : "auto" as const }}>
          <div className="content-stretch flex h-[72px] items-center justify-between py-[15.451px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[rgba(32,26,57,0.15)] border-solid border-t-[1.189px] inset-0 pointer-events-none" />
            <div className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#201a39] text-[18px] w-[223px] whitespace-pre-wrap">
              <p className="mb-0">Fino al 3.15%</p>
              <p>di rendimento.</p>
            </div>
            <ArrowOutward2 />
          </div>
          <div className="content-stretch flex h-[72px] items-center justify-between py-[15.451px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[rgba(32,26,57,0.15)] border-solid border-t-[1.189px] inset-0 pointer-events-none" />
            <div className="flex-[1_0_0] font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.1] min-h-px min-w-px not-italic relative text-[#201a39] text-[18px] whitespace-pre-wrap">
              <p className="mb-0">Depositi protetti</p>
              <p>fino a 100.000€</p>
            </div>
            <ArrowOutward3 />
          </div>
          <div className="content-stretch flex h-[72px] items-center justify-between py-[15.451px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[rgba(32,26,57,0.15)] border-b-[1.189px] border-solid border-t-[1.189px] inset-0 pointer-events-none" />
            <div className="flex-[1_0_0] font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.1] min-h-px min-w-px not-italic relative text-[#201a39] text-[18px] whitespace-pre-wrap">
              <p className="mb-0">Interessi accreditati</p>
              <p>periodicamente</p>
            </div>
            <ArrowOutward4 />
          </div>
        </div>
        <div className="absolute inset-0" style={{ opacity: bigText.opacity2, transform: `translateY(${bigText.y2}px)`, pointerEvents: bigText.opacity2 < 0.3 ? "none" as const : "auto" as const }}>
          <div className="absolute contents left-[calc(33.33%-7px)] top-[643px]">
            <div className="-translate-x-1/2 absolute bottom-[57px] flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] justify-end leading-[0.9] left-[calc(50%+0.5px)] not-italic text-[#201a39] text-[138.803px] text-center tracking-[-2.7761px] whitespace-nowrap">
              <p className="mb-0">Per chi</p>
              <p className="font-['Perfectly_Nineties:Italic',sans-serif] italic">Protegge</p>
            </div>
            <div className="absolute h-[285px] left-[calc(33.33%-7px)] overflow-clip bottom-[22px] w-[247px]">
              <div className="-translate-x-1/2 absolute bottom-[35px] flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] justify-end leading-[0.9] left-[calc(50%+124px)] not-italic text-[138.803px] text-center text-white tracking-[-2.7761px] whitespace-nowrap">
                <p className="mb-0">Per chi</p>
                <p className="font-['Perfectly_Nineties:Italic',sans-serif] italic">Protegge</p>
              </div>
            </div>
          </div>
        </div>
        <div className="group absolute bg-[#eae8e8] bottom-[32px] content-stretch flex gap-[32px] items-center px-[24px] py-[16px] right-[calc(-50vw+720px+32px)] cursor-pointer z-[1]" data-name="Button" style={{ opacity: btn.opacity2, transform: `translateY(${btn.y2}px)`, pointerEvents: btn.opacity2 < 0.3 ? "none" as const : "auto" as const }}>
          <div className="relative overflow-hidden shrink-0 h-[16px]">
            <div className="flex flex-col transition-[translate] duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
              <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[15.82px] not-italic text-[16px] text-black whitespace-nowrap">Apri il tuo Conto Deposito</p>
              <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[15.82px] not-italic text-[16px] text-black whitespace-nowrap" aria-hidden="true">Apri il tuo Conto Deposito</p>
            </div>
          </div>
          <Svg2 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[950px] right-0 top-0 w-[720px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[144.89%] left-[-120.52%] max-w-none top-[-9.76%] w-[286.72%]" src={imgFrame1410077079} />
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="absolute h-[285px] left-1/2 overflow-clip top-[643px] w-[239px]">
      <div className="-translate-x-1/2 absolute bottom-[35px] flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] justify-end leading-[0.9] left-[calc(50%-119.5px)] not-italic text-[138.803px] text-center text-white tracking-[-2.7761px] whitespace-nowrap">
        <p className="mb-0">Per chi</p>
        <p className="font-['Perfectly_Nineties:Italic',sans-serif] italic">Protegge</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute bottom-[22px] contents left-[calc(33.33%+20px)]">
      <div className="-translate-x-1/2 absolute bottom-[57px] flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] justify-end leading-[0.9] left-1/2 not-italic text-[#201a39] text-[138.803px] text-center tracking-[-2.7761px] whitespace-nowrap">
        <p className="mb-0">Per chi</p>
        <p className="font-['Perfectly_Nineties:Italic',sans-serif] italic">Protegge</p>
      </div>
      <Frame69 />
    </div>
  );
}

function ArrowOutward5() {
  return (
    <div className="relative shrink-0 size-[19.016px]" data-name="arrow_outward">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0161 19.0161">
        <g id="arrow_outward">
          <mask height="20" id="mask0_1_534" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="19.0161" id="Bounding box" width="19.0161" />
          </mask>
          <g mask="url(#mask0_1_534)">
            <path d={svgPaths.p1f444a00} fill="var(--fill-0, #201A39)" id="arrow_outward_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex h-[72px] items-center justify-between py-[15.451px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(32,26,57,0.15)] border-solid border-t-[1.189px] inset-0 pointer-events-none" />
      <div className="flex-[1_0_0] font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.1] min-h-px min-w-px not-italic relative text-[#201a39] text-[18px] whitespace-pre-wrap">
        <p className="mb-0">Fino al 3.15%</p>
        <p>di rendimento.</p>
      </div>
      <ArrowOutward5 />
    </div>
  );
}

function ArrowOutward6() {
  return (
    <div className="relative shrink-0 size-[19.016px]" data-name="arrow_outward">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0161 19.0161">
        <g id="arrow_outward">
          <mask height="20" id="mask0_1_608" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="19.0161" id="Bounding box" width="19.0161" />
          </mask>
          <g mask="url(#mask0_1_608)">
            <path d={svgPaths.p11082880} fill="var(--fill-0, #201A39)" id="arrow_outward_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex h-[72px] items-center justify-between py-[15.451px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(32,26,57,0.15)] border-solid border-t-[1.189px] inset-0 pointer-events-none" />
      <div className="flex-[1_0_0] font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.1] min-h-px min-w-px not-italic relative text-[#201a39] text-[18px] whitespace-pre-wrap">
        <p className="mb-0">Depositi protetti</p>
        <p>fino a 100.000€</p>
      </div>
      <ArrowOutward6 />
    </div>
  );
}

function ArrowOutward7() {
  return (
    <div className="relative shrink-0 size-[19.016px]" data-name="arrow_outward">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0161 19.0161">
        <g id="arrow_outward">
          <mask height="20" id="mask0_1_608" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="19.0161" id="Bounding box" width="19.0161" />
          </mask>
          <g mask="url(#mask0_1_608)">
            <path d={svgPaths.p11082880} fill="var(--fill-0, #201A39)" id="arrow_outward_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex h-[72px] items-center justify-between py-[15.451px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(32,26,57,0.15)] border-b-[1.189px] border-solid border-t-[1.189px] inset-0 pointer-events-none" />
      <div className="flex-[1_0_0] font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.1] min-h-px min-w-px not-italic relative text-[#201a39] text-[18px] whitespace-pre-wrap">
        <p className="mb-0">Interessi accreditati</p>
        <p>periodicamente</p>
      </div>
      <ArrowOutward7 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(25%+1px)] top-[339px] w-[293px]">
      <Frame30 />
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[65px] top-[170px]">
      <div className="absolute h-[386.184px] left-[65px] top-[339px] w-[260px]" data-name="Union">
        <img alt="" className="absolute block max-w-none size-full" height="386.184" src={imgUnion4} width="260" />
      </div>
      <div className="absolute font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.09] left-[65px] not-italic text-[#201a39] text-[26px] top-[209px] w-[360px] whitespace-pre-wrap">
        <p className="mb-0">Conto Deposito</p>
        <p>semplice.</p>
      </div>
      <Frame29 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['PP_Neue_Montreal:Medium',sans-serif] justify-center leading-[0] left-[65px] not-italic text-[#201a39] text-[16px] top-[178.5px] whitespace-nowrap">
        <p className="leading-[16.972px]">Per chi protegge</p>
      </div>
    </div>
  );
}

function Svg3() {
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

function Button5() {
  return (
    <div className="group absolute bg-[#eae8e8] bottom-[32px] content-stretch flex gap-[32px] items-center left-[32px] px-[24px] py-[16px] cursor-pointer" data-name="Button">
      <div className="relative overflow-hidden shrink-0 h-[16px]">
        <div className="flex flex-col transition-[translate] duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
          <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[15.82px] not-italic text-[16px] text-black whitespace-nowrap">Apri il tuo Conto Deposito</p>
          <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[15.82px] not-italic text-[16px] text-black whitespace-nowrap" aria-hidden="true">Apri il tuo Conto Deposito</p>
        </div>
      </div>
      <Svg3 />
    </div>
  );
}

function Hero4() {
  return (
    <div className="bg-white h-[950px] overflow-clip relative shrink-0 w-[1440px]" data-name="Hero">
      <Frame6 />
      <Group5 />
      <Group4 />
      <Button5 />
      <div className="-translate-x-1/2 absolute flex items-center justify-center left-[calc(50%+0.01px)] size-[1617.983px] top-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[1617.983px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1618.98 1618.98">
              <path d={svgPaths.p26d4fa80} id="Vector" stroke="url(#paint0_linear_1_549)" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_549" x1="809.491" x2="809.491" y1="-0.508717" y2="1619.49">
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
  );
}

function Frame81() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[1440px] z-[4]">
      <Hero3 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="relative shrink-0 w-full max-w-[1440px] px-[28px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[623px] relative w-full">
          <div className="font-['Perfectly_Nineties:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#201a39] text-[0px] text-[75.924px] tracking-[-1.5185px] w-[585px] whitespace-pre-wrap">
            <p className="mb-0">{`Proteggi ciò che hai. Progetta ciò che vuoi. `}</p>
            <p className="bg-clip-text font-['Perfectly_Nineties:Italic',sans-serif] italic text-[transparent] pb-[6px] -mb-[6px]" style={{ backgroundImage: "linear-gradient(90.0776deg, rgb(33, 48, 182) 8.3724%, rgb(49, 69, 158) 31.955%, rgb(185, 29, 187) 56.149%)", WebkitTextFillColor: "transparent" }}>
              Apri il tuo Conto
            </p>
            <p className="bg-clip-text font-['Perfectly_Nineties:Italic',sans-serif] italic text-[transparent]" style={{ backgroundImage: "linear-gradient(90.0776deg, rgb(33, 48, 182) 8.3724%, rgb(49, 69, 158) 31.955%, rgb(185, 29, 187) 56.149%)", WebkitTextFillColor: "transparent" }}>
              in 5 minuti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SvgGroupScegli() {
  return (
    <div className="-translate-x-1/2 absolute h-[269.983px] left-[calc(50%-0.01px)] top-0 w-[436.983px]">
      <div className="absolute inset-[-0.19%_-0.11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 437.983 270.983">
          <g id="Group_scegli">
            <path d={svgPathsSVN.p8cf8f00} id="V_s1" stroke="url(#paint0_scegli)" />
            <path d={svgPathsSVN.p31bdca00} id="V_s2" stroke="url(#paint1_scegli)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_scegli" x1="302.491" x2="302.491" y1="0.331682" y2="270.651">
              <stop stopColor="#E1DFDA" /><stop offset="0.1875" stopColor="#E1DFDA" stopOpacity="0.3" /><stop offset="0.350962" stopColor="#E1DFDA" stopOpacity="0" /><stop offset="0.610577" stopColor="#E1DFDA" stopOpacity="0" /><stop offset="0.778846" stopColor="#E1DFDA" stopOpacity="0.3" /><stop offset="1" stopColor="#E1DFDA" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_scegli" x1="135.491" x2="135.491" y1="0.331682" y2="270.651">
              <stop stopColor="#E1DFDA" /><stop offset="0.1875" stopColor="#E1DFDA" stopOpacity="0.3" /><stop offset="0.350962" stopColor="#E1DFDA" stopOpacity="0" /><stop offset="0.610577" stopColor="#E1DFDA" stopOpacity="0" /><stop offset="0.778846" stopColor="#E1DFDA" stopOpacity="0.3" /><stop offset="1" stopColor="#E1DFDA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[270px] overflow-clip relative shrink-0 w-[437px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[182.48%] left-[-34.55%] max-w-none top-[-3.96%] w-[169.09%]" src={imgFrame1410077078} />
      </div>
      <SvgGroupScegli />
    </div>
  );
}

function Svg4() {
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

function Button6() {
  return (
    <div className="group bg-white content-stretch flex items-center justify-between px-[24px] py-[16px] relative shrink-0 w-[192px] cursor-pointer" data-name="Button">
      <div className="relative overflow-hidden shrink-0 h-[16px]">
        <div className="flex flex-col transition-[translate] duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
          <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[15.82px] not-italic text-[16px] text-black whitespace-nowrap">Apri il tuo conto</p>
          <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[15.82px] not-italic text-[16px] text-black whitespace-nowrap" aria-hidden="true">Apri il tuo conto</p>
        </div>
      </div>
      <Svg4 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="h-[270px] overflow-clip relative w-[437px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -scale-x-100 -scale-y-100">
        <img alt="" className="absolute h-[169.51%] left-[-1.51%] max-w-none top-[-1.19%] w-[157.08%]" src={imgFrame1410077078} />
      </div>
      <div className="-translate-x-1/2 absolute flex items-center justify-center left-[calc(50%+0.51px)] size-[269.983px] top-0">
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="relative size-[269.983px]">
            <div className="absolute inset-[-0.19%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 270.983 270.983">
                <path d={svgPathsSVN.p33c0af00} id="V_verifica" stroke="url(#paint0_verifica)" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_verifica" x1="135.491" x2="135.491" y1="0.331682" y2="270.651">
                    <stop stopColor="#E1DFDA" /><stop offset="0.1875" stopColor="#E1DFDA" stopOpacity="0.3" /><stop offset="0.350962" stopColor="#E1DFDA" stopOpacity="0" /><stop offset="0.610577" stopColor="#E1DFDA" stopOpacity="0" /><stop offset="0.778846" stopColor="#E1DFDA" stopOpacity="0.3" /><stop offset="1" stopColor="#E1DFDA" />
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

function SvgGroupGestisci() {
  return (
    <div className="-translate-x-1/2 absolute h-[269.983px] left-[calc(50%-0.01px)] top-0 w-[436.983px]">
      <div className="absolute inset-[-0.19%_-0.11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 437.983 270.983">
          <g id="Group_gestisci">
            <path d={svgPathsSVN.p8cf8f00} id="V_g1" stroke="url(#paint0_gestisci)" />
            <path d={svgPathsSVN.p2cfbd700} id="V_g2" stroke="url(#paint1_gestisci)" />
            <path d={svgPathsSVN.p1e7cad00} id="V_g3" stroke="url(#paint2_gestisci)" />
            <path d={svgPathsSVN.p1147e580} id="V_g4" stroke="url(#paint3_gestisci)" />
            <path d={svgPathsSVN.p31bdca00} id="V_g5" stroke="url(#paint4_gestisci)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_gestisci" x1="302.491" x2="302.491" y1="0.331682" y2="270.651">
              <stop stopColor="#E1DFDA" /><stop offset="0.1875" stopColor="#E1DFDA" stopOpacity="0.3" /><stop offset="0.350962" stopColor="#E1DFDA" stopOpacity="0" /><stop offset="0.610577" stopColor="#E1DFDA" stopOpacity="0" /><stop offset="0.778846" stopColor="#E1DFDA" stopOpacity="0.3" /><stop offset="1" stopColor="#E1DFDA" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_gestisci" x1="218.509" x2="218.509" y1="0.331682" y2="270.651">
              <stop stopColor="#E1DFDA" /><stop offset="0.1875" stopColor="#E1DFDA" stopOpacity="0.3" /><stop offset="0.350962" stopColor="#E1DFDA" stopOpacity="0" /><stop offset="0.610577" stopColor="#E1DFDA" stopOpacity="0" /><stop offset="0.778846" stopColor="#E1DFDA" stopOpacity="0.3" /><stop offset="1" stopColor="#E1DFDA" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_gestisci" x1="258.509" x2="258.509" y1="0.331682" y2="270.651">
              <stop stopColor="#E1DFDA" /><stop offset="0.1875" stopColor="#E1DFDA" stopOpacity="0.3" /><stop offset="0.350962" stopColor="#E1DFDA" stopOpacity="0" /><stop offset="0.610577" stopColor="#E1DFDA" stopOpacity="0" /><stop offset="0.778846" stopColor="#E1DFDA" stopOpacity="0.3" /><stop offset="1" stopColor="#E1DFDA" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_gestisci" x1="178.509" x2="178.509" y1="0.331682" y2="270.651">
              <stop stopColor="#E1DFDA" /><stop offset="0.1875" stopColor="#E1DFDA" stopOpacity="0.3" /><stop offset="0.350962" stopColor="#E1DFDA" stopOpacity="0" /><stop offset="0.610577" stopColor="#E1DFDA" stopOpacity="0" /><stop offset="0.778846" stopColor="#E1DFDA" stopOpacity="0.3" /><stop offset="1" stopColor="#E1DFDA" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_gestisci" x1="135.491" x2="135.491" y1="0.331682" y2="270.651">
              <stop stopColor="#E1DFDA" /><stop offset="0.1875" stopColor="#E1DFDA" stopOpacity="0.3" /><stop offset="0.350962" stopColor="#E1DFDA" stopOpacity="0" /><stop offset="0.610577" stopColor="#E1DFDA" stopOpacity="0" /><stop offset="0.778846" stopColor="#E1DFDA" stopOpacity="0.3" /><stop offset="1" stopColor="#E1DFDA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="h-[270px] overflow-clip relative shrink-0 w-[437px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[169.51%] left-[-1.51%] max-w-none top-[-1.19%] w-[157.08%]" src={imgFrame1410077078} />
      </div>
      <SvgGroupGestisci />
    </div>
  );
}

const ROWS_DATA = [
  { title: "Scegli", number: "01", desc: "Conto Progetto o solo Deposito. Decidi tu." },
  { title: "Verifica", number: "02", desc: "Conferma la tua identità. Tutto online." },
  { title: "Firma in digitale", number: "03", desc: "Il tuo conto è attivo." },
];

const ROW_IMAGES = [Frame18, Frame21, Frame36];

function NumberCircle({ number, isActive }: { number: string; isActive: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative z-[1] rounded-[60px] shrink-0 size-[56px] transition-colors duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" style={{ backgroundColor: isActive ? '#120a24' : '#ffffff' }}>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(32,26,57,0.6)] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <div className="flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[37.695px] text-center tracking-[-0.7539px] whitespace-nowrap transition-colors duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" style={{ color: isActive ? '#ffffff' : '#201a39' }}>
        <p className="leading-none">{number}</p>
      </div>
    </div>
  );
}

function ModuleRow({ index, isActive, onHover }: { index: number; isActive: boolean; onHover: (i: number) => void }) {
  const { title, number, desc } = ROWS_DATA[index];
  const ImageComp = ROW_IMAGES[index];
  const hasBorders = index === 1;

  return (
    <div
      className="relative shrink-0 w-full overflow-clip cursor-pointer transition-[height,background-color] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
      style={{ height: isActive ? 270 : 135, backgroundColor: isActive ? '#e7e6e9' : '#ffffff' }}
      onMouseEnter={() => onHover(index)}
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pl-[16px] pr-[32px] py-[16px] relative size-full" style={{ gap: "max(170px, calc(50vw - 550px))" }}>
          <div className="transition-[filter] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" style={{ filter: isActive ? 'saturate(1)' : 'saturate(0.3)' }}>
            <ImageComp />
          </div>
          <div className="content-stretch flex flex-col gap-[32px] items-start pt-[32px] relative flex-1 min-w-0">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#201a39] text-[37.695px] whitespace-nowrap">
                  <p className="leading-none">{title}</p>
                </div>
              </div>
              <p
                className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#201a39] text-[23px] w-[496px] whitespace-pre-wrap transition-opacity duration-400 ease-[cubic-bezier(0.76,0,0.24,1)]"
                style={{ opacity: isActive ? 1 : 0 }}
              >
                {desc}
              </p>
            </div>
            <div
              className="transition-opacity duration-400 ease-[cubic-bezier(0.76,0,0.24,1)]"
              style={{ opacity: isActive ? 1 : 0, pointerEvents: isActive ? 'auto' : 'none' }}
            >
              <Button6 />
            </div>
          </div>
          {/* Vertical separator line */}
          <div className="absolute right-[60px] w-0" style={{ top: index === 0 ? 96 : 0, bottom: index === 2 ? 'auto' : 0, height: index === 2 ? 40 : undefined }}>
            <div className="absolute inset-[0_-0.25px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.5 270">
                <path d="M0.25 0V270" stroke="var(--stroke-0, #201A39)" strokeOpacity="0.6" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-[32px] top-[40px]">
        <NumberCircle number={number} isActive={isActive} />
      </div>
      {hasBorders && <div aria-hidden="true" className="absolute border-[#d2d1d7] border-b border-solid border-t inset-0 pointer-events-none" />}
    </div>
  );
}

function Frame23() {
  const [activeRow, setActiveRow] = useState(0);

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[calc(100vw-56px)]">
      <div aria-hidden="true" className="absolute border border-[#d2d1d7] border-solid inset-[-1px] pointer-events-none" />
      <ModuleRow index={0} isActive={activeRow === 0} onHover={setActiveRow} />
      <ModuleRow index={1} isActive={activeRow === 1} onHover={setActiveRow} />
      <ModuleRow index={2} isActive={activeRow === 2} onHover={setActiveRow} />
    </div>
  );
}

function Hero5() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[80px] items-center justify-end relative shrink-0 w-screen z-[3] px-[0px] pt-[140px] pb-[28px]" data-name="Hero">
      <Frame37 />
      <Frame23 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents font-['PP_Neue_Montreal:Medium',sans-serif] leading-[0.9] left-[calc(8.33%+15px)] not-italic text-[44.208px] text-shadow-[0px_0px_60px_rgba(0,0,0,0.45)] text-white top-[289px] whitespace-pre-wrap">
      <div className="absolute left-[calc(8.33%+15px)] top-[289px] w-[283px]">
        <p className="mb-0">Digitale</p>
        <p>{`per scelta. `}</p>
      </div>
      <div className="-translate-x-full absolute left-[calc(66.67%+344px)] text-right top-[289px] w-[283px]">
        <p className="mb-0">Vicina per</p>
        <p>vocazione.</p>
      </div>
    </div>
  );
}

function Hero7() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[470px] left-[calc(50%-0.5px)] w-[523px]" data-name="duotone_aggiornato11 1">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[121.49%] left-[-6.69%] max-w-none top-[-21.49%] w-[113.39%]" style={{ transform: 'scaleX(-1)' }} src={imgDuotoneAggiornato111} />
      </div>
    </div>
  );
}

function Hero6() {
  return (
    <div className="h-[600px] overflow-clip relative shrink-0 w-screen z-[2] flex justify-center" data-name="Hero">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero} />
      <div className="relative w-[1440px] h-full shrink-0">
        <div className="-translate-x-1/2 absolute bottom-[0.02px] flex items-center justify-center left-[calc(50%+0.01px)] size-[1617.983px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative size-[1617.983px]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1618.98 1618.98">
                <path d={svgPaths.p26d4fa80} id="Vector" opacity="0.4" stroke="url(#paint0_linear_1_555)" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_555" x1="809.491" x2="809.491" y1="-0.508717" y2="1619.49">
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
        <div className="-translate-x-1/2 absolute bottom-[361px] flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] justify-end leading-[0] left-1/2 not-italic text-[235.808px] text-center text-shadow-[0px_0px_75.664px_rgba(24,12,49,0.2)] text-white tracking-[-4.7162px] whitespace-nowrap">
          <p>
            <span className="leading-none">{`Oltre la `}</span>
            <span className="font-['Perfectly_Nineties:Italic',sans-serif] italic leading-none">Banca.</span>
          </p>
        </div>
        <Group7 />
        <Hero7 />
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <img alt="" className="block w-full h-auto" src={imgFooterGlow} />
  );
}

function Svg5() {
  return (
    <div className="absolute inset-[24.75px_25.2px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6 22.5">
        <g id="SVG">
          <path d={svgPaths.p15fd4b00} fill="var(--fill-0, #EAE8E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLinkInstagramLink() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] overflow-clip relative rounded-[36px] shrink-0 size-[72px]" data-name="Item → Link - instagram link">
      <Svg5 />
    </div>
  );
}

function RiFacebookFill() {
  return (
    <div className="absolute inset-[25.2px]" data-name="ri:facebook-fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6 21.6">
        <g id="ri:facebook-fill">
          <path d={svgPaths.p3f18dc80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLinkLinkedinLink() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] overflow-clip relative rounded-[36px] shrink-0 size-[72px]" data-name="Item → Link - linkedin link">
      <RiFacebookFill />
    </div>
  );
}

function Svg6() {
  return (
    <div className="absolute inset-[24.75px_25.2px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6 22.5">
        <g id="SVG">
          <path d={svgPaths.pbab4e00} fill="var(--fill-0, #EAE8E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLinkLinkedinLink1() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] overflow-clip relative rounded-[36px] shrink-0 size-[72px]" data-name="Item → Link - linkedin link">
      <Svg6 />
    </div>
  );
}

function DeviconTwitter() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14.4px] top-[calc(50%-0.35px)]" data-name="devicon:twitter">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g clipPath="url(#clip0_1_540)" id="devicon:twitter">
          <path d={svgPaths.p19cd6800} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_540">
            <rect fill="white" height="14.4" width="14.4" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ItemLinkLinkedinLink2() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] overflow-clip relative rounded-[36px] shrink-0 size-[72px]" data-name="Item → Link - linkedin link">
      <DeviconTwitter />
    </div>
  );
}

function MdiYoutube() {
  return (
    <div className="absolute inset-[25.2px]" data-name="mdi:youtube">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6 21.6">
        <g id="mdi:youtube">
          <path d={svgPaths.p3f5f4300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLinkLinkedinLink3() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] overflow-clip relative rounded-[36px] shrink-0 size-[72px]" data-name="Item → Link - linkedin link">
      <MdiYoutube />
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex gap-[10.8px] items-center left-[32px] top-[409.3px]" data-name="List">
      <ItemLinkInstagramLink />
      <ItemLinkLinkedinLink />
      <ItemLinkLinkedinLink1 />
      <ItemLinkLinkedinLink2 />
      <ItemLinkLinkedinLink3 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0 text-[#eae8e8] w-[240px]">
      <div className="flex flex-col justify-center relative shrink-0 w-[72.65px]">
        <p className="leading-[14.28px] whitespace-pre-wrap text-[12px]">Privacy Policy</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[14.28px] text-[12px]">Dichiarazione di Accessibilità</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex font-['PP_Neue_Montreal:Medium',sans-serif] items-end justify-between left-1/2 not-italic text-[10.9px] top-[950px] w-[95.56%] z-[1]">
      <div className="flex flex-col justify-center leading-[14.28px] relative shrink-0 text-[10.9px] text-[rgba(233,231,231,0.4)] w-[240px] whitespace-pre-wrap">
        <p className="mb-0 text-[12px]">Copyright © 2026</p>
        <p className="text-[#eae8e8] text-[12px]">Illimity Bank - Banca Ifis Group</p>
      </div>
      <Frame42 />
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#eae8e8] text-right w-[240px]">
        <p className="leading-[14.28px] whitespace-pre-wrap text-[12px]">{`Terms & Conditions`}</p>
      </div>
    </div>
  );
}

function Svg7() {
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

function Button7() {
  return (
    <div className="group bg-white content-stretch flex items-center justify-between px-[24px] py-[16px] relative shrink-0 w-[192px] cursor-pointer" data-name="Button">
      <div className="relative overflow-hidden shrink-0 h-[16px]">
        <div className="flex flex-col transition-[translate] duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
          <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[15.82px] not-italic text-[16px] text-black whitespace-nowrap">Apri il tuo conto</p>
          <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[15.82px] not-italic text-[16px] text-black whitespace-nowrap" aria-hidden="true">Apri il tuo conto</p>
        </div>
      </div>
      <Svg7 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23px] items-start left-[49.44%] top-[241.3px]">
      <div className="flex flex-col font-['Perfectly_Nineties:Regular',sans-serif] h-[119px] justify-center leading-[0] not-italic relative shrink-0 text-[#eae8e8] text-[55px] tracking-[-1.65px] w-[437px]">
        <p className="leading-none whitespace-pre-wrap">Scopri un modo nuovo di vivere la banca.</p>
      </div>
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[16px] text-white w-[332px] whitespace-pre-wrap">Apri il tuo conto in 5 minuti. Zero burocrazia, zero costi nascosti. Solo trasparenza.</p>
      <Button7 />
    </div>
  );
}

function NavList() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[3px] relative shrink-0 text-[#eae8e8] text-[18px] tracking-[-0.4px] w-full" data-name="Nav → List">
      <div className="flex flex-col justify-center min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[21.8px] whitespace-pre-wrap">Conto Illimity</p>
      </div>
      <div className="flex flex-col justify-center min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[21.8px] whitespace-pre-wrap">Conto Deposito</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[21.8px]">Carte e Pagamenti</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[21.8px]">Prodotti per te</p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[154px]">
      <div className="flex flex-col justify-center relative shrink-0 text-[12px] text-[rgba(233,231,231,0.4)] tracking-[-0.141px] w-full">
        <p className="leading-[15.82px] whitespace-pre-wrap">Servizi</p>
      </div>
      <NavList />
    </div>
  );
}

function NavList1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[3px] relative shrink-0 text-[#eae8e8] text-[18px] tracking-[-0.4px] w-full" data-name="Nav → List">
      <div className="flex flex-col justify-center min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[21.8px] whitespace-pre-wrap">Chi siamo</p>
      </div>
      <div className="flex flex-col justify-center min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[21.8px] whitespace-pre-wrap">Stato richieste</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[21.8px]">Accedi</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[21.8px]">Supporto</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[154.09px]">
      <div className="flex flex-col justify-center relative shrink-0 text-[12px] text-[rgba(233,231,231,0.4)] tracking-[-0.141px] w-full">
        <p className="leading-[15.82px] whitespace-pre-wrap">Illimity Bank</p>
      </div>
      <NavList1 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-[447.5px]">
      <Frame46 />
      <Frame47 />
    </div>
  );
}

function NavList2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[3px] relative shrink-0 text-[#eae8e8] text-[18px] tracking-[-0.4px] w-full" data-name="Nav → List">
      <div className="flex flex-col justify-center min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[21.8px] whitespace-pre-wrap">illimity.com</p>
      </div>
      <div className="flex flex-col justify-center min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[21.8px] whitespace-pre-wrap">Investor Relations</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[21.8px]">Newsroom</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[21.8px]">Lavora con noi</p>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[154.09px]">
      <div className="flex flex-col justify-center relative shrink-0 text-[12px] text-[rgba(233,231,231,0.4)] tracking-[-0.141px] w-full">
        <p className="leading-[15.82px] whitespace-pre-wrap">Gruppo Illimity</p>
      </div>
      <NavList2 />
    </div>
  );
}

function NavList3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[3px] relative shrink-0 text-[#eae8e8] text-[18px] tracking-[-0.4px] w-full" data-name="Nav → List">
      <div className="flex flex-col justify-center min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[21.8px] whitespace-pre-wrap">Supporto</p>
      </div>
      <div className="flex flex-col justify-center min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[21.8px] whitespace-pre-wrap">Privacy</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[21.8px]">Trasparenza</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[21.8px]">Avvisi alla clientela</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[21.8px]">Sicurezza</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[21.8px]">Avvisi alla clientela</p>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[154.09px]">
      <div className="flex flex-col justify-center relative shrink-0 text-[12px] text-[rgba(233,231,231,0.4)] tracking-[-0.141px] w-full">
        <p className="leading-[15.82px] whitespace-pre-wrap">Link utili</p>
      </div>
      <NavList3 />
    </div>
  );
}

function NavList4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[3px] relative shrink-0 text-[#eae8e8] text-[18px] tracking-[-0.4px] w-full" data-name="Nav → List">
      <div className="flex flex-col justify-center min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[21.8px] whitespace-pre-wrap">Portabilità</p>
      </div>
      <div className="flex flex-col justify-center min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[21.8px] whitespace-pre-wrap">Disconoscimenti</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[21.8px]">Recesso</p>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[154.09px]">
      <div className="flex flex-col justify-center relative shrink-0 text-[12px] text-[rgba(233,231,231,0.4)] tracking-[-0.141px] w-full">
        <p className="leading-[15.82px] whitespace-pre-wrap">Diritti e prerogative dei clienti</p>
      </div>
      <NavList4 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0">
      <Frame73 />
      <Frame74 />
      <Frame75 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex font-['PP_Neue_Montreal:Medium',sans-serif] gap-[16.18%] items-start leading-[0] left-[calc(50%-24px)] not-italic top-[582px] w-[92.22%]">
      <Frame45 />
      <Frame61 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0_0_0.37%_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 29.5628">
        <g id="Group">
          <path d={svgPaths.p1b85b80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ApplePayLogo() {
  return (
    <div className="h-[29.672px] overflow-clip relative shrink-0 w-[72px]" data-name="apple-pay logo">
      <Group />
    </div>
  );
}

function Nexi() {
  return (
    <div className="absolute inset-[0.01%_0_-0.01%_0]" data-name="nexi">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 20.533">
        <g id="nexi">
          <path d={svgPaths.p2648cd00} fill="var(--fill-0, white)" id="Fill-36" />
          <path d={svgPaths.p384d7400} fill="var(--fill-0, white)" id="Fill-37" />
          <path d={svgPaths.p162a7e80} fill="var(--fill-0, white)" id="Fill-38" />
          <path d={svgPaths.p1226300} fill="var(--fill-0, white)" id="Fill-39" />
        </g>
      </svg>
    </div>
  );
}

function LogoDouble() {
  return (
    <div className="absolute contents inset-[0.01%_0_-0.01%_0]" data-name="logo-double">
      <Nexi />
    </div>
  );
}

function LogoDark() {
  return (
    <div className="absolute contents inset-[0.01%_0_-0.01%_0]" data-name="logo-dark">
      <LogoDouble />
    </div>
  );
}

function Symbols() {
  return (
    <div className="absolute contents inset-[0.01%_0_-0.01%_0]" data-name="Symbols">
      <LogoDark />
    </div>
  );
}

function NexiLogoLogo() {
  return (
    <div className="h-[20.533px] overflow-clip relative shrink-0 w-[68px]" data-name="Nexi_Logo logo">
      <Symbols />
    </div>
  );
}

function Frame76() {
  return (
    <div className="absolute bottom-[100.59px] content-stretch flex gap-[16px] items-center right-[32px]">
      <ApplePayLogo />
      <div className="h-[31.409px] relative shrink-0 w-[78px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 31.409">
          <path d={svgPaths.p2f3dcc40} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="h-[22.247px] relative shrink-0 w-[36px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 22.2465">
          <path d={svgPaths.p72bff70} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <NexiLogoLogo />
    </div>
  );
}

function Button9() {
  return <div className="absolute bg-white inset-[0_-4px] rounded-[2px] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.06)]" data-name="Button" />;
}

function Button8() {
  return (
    <div className="content-stretch flex h-full items-center px-[10px] py-[2px] relative shrink-0" data-name="Button 1">
      <Button9 />
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#201a39] text-[14px] text-center text-ellipsis tracking-[-0.08px] w-[100px] whitespace-nowrap">Privati</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex h-full items-center px-[10px] py-[3px] relative shrink-0" data-name="Button 2">
      <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[14px] text-center text-ellipsis text-white tracking-[-0.08px] w-[100px] whitespace-nowrap">Aziende</p>
    </div>
  );
}

function SegmentedControl() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] bottom-[98px] h-[36px] left-[32px] rounded-[4px]" data-name="Segmented control">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <Button8 />
        <Button10 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,255,255,0.3)] border-solid inset-[-0.25px] pointer-events-none rounded-[4.25px]" />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[10.97%_39.44%_80.85%_49.44%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 82.0368">
        <g id="Group 1321320920">
          <path d={svgPaths.p1f8ca0b0} fill="var(--fill-0, #FF2698)" id="Vector" />
          <path d={svgPaths.p1c9571d0} fill="var(--fill-0, #FF7830)" id="Vector_2" />
          <path d={svgPaths.pb23300} fill="var(--fill-0, #FF5161)" id="Vector_3" />
          <path d={svgPaths.p110bb000} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3d7a3f00} fill="var(--fill-0, white)" id="Subtract" />
          <path d={svgPaths.p11724580} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p3cf72300} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p33d7e400} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p361a5dc0} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p9f49800} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p11bc4200} fill="var(--fill-0, white)" id="Subtract_2" />
          <path d={svgPaths.p2e3ff700} fill="var(--fill-0, white)" id="Subtract_3" />
          <path d={svgPaths.p2ec60000} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p2ec83ff0} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p299a6400} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p2e72c900} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p1cde1570} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p11697000} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p2c759100} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p252db500} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p16054700} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p3de8bd00} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p2fe2df80} fill="var(--fill-0, white)" id="Vector_20" />
          <path d={svgPaths.p2192c5f0} fill="url(#paint0_linear_1_485)" id="Rectangle 8 (Stroke)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_485" x1="159.947" x2="0.000120799" y1="0.00879371" y2="82.0368">
            <stop stopColor="#FF04C7" />
            <stop offset="1" stopColor="#FF9804" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#130a27] h-[1003px] overflow-clip relative shrink-0 w-screen z-[1] flex justify-center" data-name="Footer">
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <Frame40 />
      </div>
      <div className="relative w-full max-w-[1440px] h-full shrink-0">
        <List />
        <Frame41 />
        <Frame43 />
        <div className="absolute left-[32px] top-[582px] font-['PP_Neue_Montreal:Medium',sans-serif] not-italic leading-[0]">
          <Frame45 />
        </div>
        <div className="absolute left-[49.44%] top-[582px] font-['PP_Neue_Montreal:Medium',sans-serif] not-italic leading-[0]">
          <Frame61 />
        </div>
        <Frame76 />
        <SegmentedControl />
        <Group9 />
      </div>
    </div>
  );
}

export default function Illimity() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-center relative size-full" data-name="Illimity">
      <Hero />
      <div className="relative z-[9] w-full flex flex-col items-center" style={{ marginTop: "-100vh" }}>
        <Hero1 />
        <Hero2 />
        <Modulo />
        <Frame81 />
        <Hero5 />
        <Hero6 />
        <Footer />
      </div>
    </div>
  );
}