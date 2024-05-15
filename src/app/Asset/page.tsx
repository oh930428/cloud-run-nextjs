import Image from "next/image";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Border from "@/components/border";

export default function Asset() {
  const assets = [
    {
      img: "https://storage.googleapis.com/yds-btq-img-datum/deal-info/deal_complete/completed_deal_three.jpg",
      title: "인천 남동공단 물류센터",
      key1: "연수익률",
      key2: "LTV",
      key3: "기간",
      key4: "시공사",
      value1: "All in Cost 9.00% *",
      value2: "52.8 %",
      value3: "24개월",
      value4: "-",
      tag1: "후순위 담보 관련 투자",
      tag2: "물류센터"
    },
    {
      img: "https://storage.googleapis.com/yds-btq-img-datum/deal-info/deal_complete/completed_deal_three.jpg",
      title: "울산 전하동 KCC 근린상가시설",
      key1: "연수익률",
      key2: "LTV",
      key3: "기간",
      key4: "시공사",
      value1: "All in Cost 9.00% *",
      value2: "52.8 %",
      value3: "24개월",
      value4: "-",
      tag1: "후순위 담보 관련 투자",
      tag2: "물류센터"
    }
  ];

  return (
    <Tabs defaultValue="account" className="asset-container">
      <div className="asset-header">
        <h3 className="asset-header-title">
          LIST OF
          <br />
          ASSETS
        </h3>
        <TabsList>
          <TabsTrigger value="account">진행중</TabsTrigger>
          <TabsTrigger value="password">완료</TabsTrigger>
        </TabsList>
      </div>
      <Border className={"2xl:border-t-[3px] border-deepgray"} />
      <TabsContent
        value="account"
        className="px-[5rem] py-[9.375rem] grid grid-flow-col auto-cols-[23.75rem] auto-rows-[57.5rem] place-content-center gap-[3.125rem]"
      >
        {assets.map(
          (
            {
              img,
              title,
              key1,
              key2,
              key3,
              key4,
              value1,
              value2,
              value3,
              value4,
              tag1,
              tag2
            },
            index
          ) => (
            <div
              key={index}
              className="w-full h-full flex flex-col items-center gap-5"
            >
              <a className="relative w-full h-[25rem]" href="#">
                <div className="w-full h-full absolute flex flex-row items-center justify-center transition duration-300 ease-in-out opacity-0 hover:opacity-80 z-20 bg-black text-primary">
                  <IoArrowForwardCircleOutline size={42} />
                </div>
                <Image
                  src={img}
                  alt={title}
                  priority
                  fill
                  objectFit="cover"
                  quality={100}
                />
              </a>

              <div className="w-full h-[31.25rem] flex flex-col items-start justify-between">
                <span className="h-[25%] break-keep font-pretendard-extrabold text-[38px] group">
                  {title}
                  <div className="w-16 h-[7px] mt-4 bg-primary group-hover:w-full transition-all duration-500"></div>
                </span>

                <div className="w-full h-[50%] flex flex-row items-center justify-between gap-2">
                  <div className="w-[30%] flex flex-col items-start font-pretendard-semibold text-button_1 gap-[2.1875rem]">
                    <span>{key1}</span>
                    <span>{key3}</span>
                    <span>{key4}</span>
                    <span>{key2}</span>
                  </div>
                  <div className="w-[70%] flex flex-col items-start font-pretendard-medium text-[1.875rem] leading-[2.1875rem] gap-[2.1875rem] text-secondary_800">
                    <span>{value1}</span>
                    <span>{value2}</span>
                    <span>{value3}</span>
                    <span>{value4}</span>
                  </div>
                </div>
                <div className="w-full h-[10%] flex flex-row items-center justify-between">
                  <div className="bg-primary_800 text-white text-text3 px-6 py-3 rounded-[0.3125rem]">
                    {tag1}
                  </div>
                  <div className="border border-secondary_800 text-secondary_800 text-text3 rounded-[0.3125rem] px-[2.125rem] py-3">
                    {tag2}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </TabsContent>
      <Border className={"2xl:border-t-[3px] border-deepgray"} />
      <ul className="px-[7rem] py-[3.125rem] list-disc space-y-[0.375rem] font-pretendard-light text-secondary_800 text-text5">
        <li>All in Cost : 이자와 수수료를 모두 포함하는 최종 연간 수익률</li>
        <li>
          당사의 투자자문이 투자의 성공을 보증 내지 확약하는 것은 아닙니다.
          당사는 투자 자문만을 제공하며, 투자자문에 따른 금융주선, 금융중개,
          투자중개, 업무는 제공하지 않습니다.
        </li>
      </ul>
    </Tabs>
  );
}
