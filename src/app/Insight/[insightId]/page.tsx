"use client";

import Image from "next/image";
import { PiShareNetworkBold, PiArrowElbowDownLeftBold } from "react-icons/pi";

import Button from "@/components/button";

export default function InsightDetail() {
  return (
    <section className="w-full flex flex-col items-center justify-end bg-white text-center px-[112px] py-[8.5rem]">
      <div className="w-full bg-black py-5 mb-[3.125rem]">
        <h3 className="text-heading_5 text-white tracking-[0.6rem] font-sabonbold">
          MARKET INSIGHT
        </h3>
      </div>
      <div className="w-full mb-[0.875rem]">
        <h1 className="text-heading_1_B text-black tracking-[0.6rem] font-sabonbold mb-[1.875rem]">
          YOUDONGSAN
        </h1>
        <h5 className="text-heading_7 text-primary_800 tracking-[0.1rem] font-sabonbold mb-[3.125rem]">
          EDITORIAL. YOUDONGSAN
        </h5>
        <div className="border-[5px] border-secondary"></div>
      </div>
      <div className="w-full flex flex-row items-center border-y-[3px] border-secondary font-pretendard mb-[2rem]">
        <div className="w-[20%] text-text2">24.05.03</div>
        <div className="w-[60%] border-x-[3px] border-secondary text-[40px] py-8">
          개발호재 지역 분석(용인 1부)
        </div>
        <div className="w-[20%] text-text2">조회수 89</div>
      </div>
      <div className="relative w-[1216px] h-[3325px]">
        <Image src={"/images/insight_detail.jpg"} alt={""} fill />
      </div>
      <div className="w-full border-[5px] border-secondary my-[3.75rem]"></div>
      <div className="w-full flex flex-row items-center justify-end gap-5">
        <Button
          varient={"contain"}
          className={
            "flex flex-row items-center gap-[0.625rem] px-6 py-4 bg-black text-white font-pretendard text-button_2"
          }
          handleClicked={() => {}}
        >
          공유하기
          <PiShareNetworkBold size={24} />
        </Button>
        <Button
          varient={"contain"}
          className={
            "flex flex-row items-center gap-[0.625rem] px-6 py-4 bg-black text-white font-pretendard text-button_2"
          }
          handleClicked={() => {}}
        >
          돌아가기
          <PiArrowElbowDownLeftBold size={24} />
        </Button>
      </div>
    </section>
  );
}
