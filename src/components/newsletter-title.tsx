export default function NewsletterTitle() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full bg-primary_800 py-5">
        <h3 className="text-heading_5 text-white tracking-[1rem] font-sabonbold text-center">
          NEWSLETTER
        </h3>
      </div>
      <div className="w-full flex flex-row items-center border-y-[3px] border-secondary font-pretendard my-[0.9375rem]">
        <div className="w-[20%] text-text2">24.05.03</div>
        <div className="w-[60%] border-x-[3px] border-secondary text-[40px] py-8">
          개발호재 지역 분석(용인 1부)
        </div>
        <div className="w-[20%] text-text2">조회수 89</div>
      </div>
    </div>
  );
}
