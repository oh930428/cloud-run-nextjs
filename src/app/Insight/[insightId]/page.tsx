"use client";

import Image from "next/image";
import { PiShareNetworkBold, PiArrowElbowDownLeftBold } from "react-icons/pi";

import Button from "@/components/button";
import HeaderTitle from "@/components/header-title";
import Border from "@/components/border";

export default function InsightDetail() {
  return (
    <section className="insight-detail-container">
      <HeaderTitle
        tabName={"MARKET INSIGHT"}
        title={"개발호재 지역 분석(용인 1부)"}
        publicDate={"24.05.03"}
        viewsCount={89}
        className="bg-secondary"
      />
      <Border className="w-full border-t-[5px] border-secondary mt-4 mb-[2.5rem]" />
      <div className="insight-detail-img-section">
        <Image
          src={"/images/insight_detail.jpg"}
          alt={"개발호재 지역 분석(용인 1부"}
          fill
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center"
          }}
        />
      </div>
      <Border className="w-full border-t-[2px] border-secondary mt-[3.125rem] mb-4" />
      <div className="insight-detail-button-section">
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
