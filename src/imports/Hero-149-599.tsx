import svgPaths from "./svg-muds4hlp23";
import imgHero from "figma:asset/2db892d680f61d7ca84c67faa8950c0fa9d2c283.png";
import imgDuotoneAggiornato111 from "figma:asset/12a587e661ac891845a1559db7f7b477cd3fec50.png";

function Group() {
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

export default function Hero() {
  return (
    <div className="relative size-full" data-name="Hero">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero} />
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
      <Group />
      <div className="-translate-x-1/2 absolute bottom-0 h-[470px] left-[calc(50%-0.5px)] w-[523px]" data-name="duotone_aggiornato11 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.49%] left-[-6.69%] max-w-none top-[-21.49%] w-[113.39%]" src={imgDuotoneAggiornato111} />
        </div>
      </div>
    </div>
  );
}