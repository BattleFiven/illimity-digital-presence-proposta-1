function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0 text-[#eae8e8] w-[240px]">
      <div className="flex flex-col justify-center relative shrink-0 w-[72.65px]">
        <p className="leading-[14.28px] whitespace-pre-wrap">Privacy Policy</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[14.28px]">Dichiarazione di Accessibilità</p>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex font-['PP_Neue_Montreal:Medium',sans-serif] items-end justify-between not-italic relative size-full text-[10.9px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[14.28px] relative shrink-0 text-[0px] text-[rgba(233,231,231,0.4)] w-[240px] whitespace-pre-wrap">
        <p className="mb-0">Copyright © 2026</p>
        <p className="text-[#eae8e8]">Illimity Bank - Banca Ifis Group</p>
      </div>
      <Frame />
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#eae8e8] text-right w-[240px]">
        <p className="leading-[14.28px] whitespace-pre-wrap">{`Terms & Conditions`}</p>
      </div>
    </div>
  );
}