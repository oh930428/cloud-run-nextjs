"use client";

import { useState } from "react";

import Image from "next/image";

import { VscNote } from "react-icons/vsc";
import { GrNote } from "react-icons/gr";
import { FiFileText } from "react-icons/fi";
import { TbPlus, TbMinus, TbDownload } from "react-icons/tb";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Border from "@/components/border";

export default function AssetDetail() {
  const [opened, setOpened] = useState(false);

  const assets = {
    id: "1",
    img: "https://storage.googleapis.com/yds-btq-img-datum/deal-info/deal_complete/completed_deal_three.jpg",
    title: "당산 플라밍고 골프장",
    contents: [
      { key: "프로젝트 명", value: "당산 플라밍고 후순위 담보 관련 투자" },
      { key: "연 수익률", value: "52.8 %" },
      { key: "기간", value: "24개월" },
      { key: "시공사", value: "-" }
    ],
    tag1: "후순위 담보 관련 투자",
    tag2: "골프장"
  };

  const specialAsset = {
    title: "홍대입구역 KT 임대주택 TOTAL IM",
    file: "/images/total_IM.pdf"
  };

  const handleFileSectionOpen = () => {
    setOpened(!opened);
  };

  return (
    <Tabs defaultValue="account" className="asset-detail-container">
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

      <TabsContent value="account" className="asset-detail-main-section">
        <div className="asset-detail-main-img">
          <Image
            src={assets.img}
            alt={assets.title}
            priority
            fill
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="asset-detail-main-article">
          <h4 className="asset-detail-main-article-title">{assets.title}</h4>
          <div className="asset-detail-main-article-content-section">
            {assets.contents.map(({ key, value }, index) => (
              <div key={index} className="asset-detail-main-article-content">
                <span className="asset-detail-main-article-content-label">
                  {key}
                  <Border className="asset-detail-main-article-content-label-underline" />
                </span>
                <span className="asset-detail-main-article-content-value">
                  {value}
                </span>
              </div>
            ))}
          </div>
          <div className="asset-detail-main-article-tag-section">
            <div className="asset-detail-main-article-tag-first">
              {assets.tag1}
            </div>
            <div className="asset-detail-main-article-tag-second">
              {assets.tag2}
            </div>
          </div>
          <span className="asset-detail-main-article-footer">
            * 본 의견서는 유동산 심의기준으로 작성된 의견이며, 당사는 우량하고
            안전한 자산을 다루는 특성 상 보수적인 의견을 드리고 있음을
            알려드립니다.
          </span>
        </div>
      </TabsContent>

      <div className="relative w-full h-[44.25rem] my-[3.125rem] mb-[3.125rem]">
        <Image
          src={"/images/bg-asset-detail.jpg"}
          alt={""}
          priority
          fill
          objectFit="contain"
          quality={100}
        />
      </div>

      <div className="flex flex-col items-center gap-3 px-[7rem] mb-[6.25rem]">
        <div
          className={`w-full ${opened ? "bg-primary rounded-md transition-all" : "hover:bg-primary_bg rounded-md"} flex flex-col items-center shadow-[0_2px_4px_rgba(0,0,0,0.25)]`}
        >
          <div
            className="w-full flex flex-row items-center justify-between  px-[4.625rem] rounded-md py-3"
            onClick={handleFileSectionOpen}
          >
            <div
              className={`w-[4.625rem] h-[4.625rem] flex items-center justify-center rounded-full ${opened ? "bg-white" : "bg-primary_800"}`}
            >
              <VscNote
                size={32}
                className={`${opened ? "text-primary_800" : "text-white"}`}
              />
            </div>
            <span
              className={`font-pretendard-semibold text-button_1 ${opened ? "text-white" : "text-primary_800"} text-center`}
            >
              {specialAsset.title}
            </span>
            <div className={`${opened ? "text-white" : "text-primary_800"}`}>
              {opened ? <TbMinus size={32} /> : <TbPlus size={32} />}
            </div>
          </div>
          {opened && (
            <>
              <embed
                src={specialAsset.file}
                type="application/pdf"
                width="100%"
                height="1100px"
              />
              <a
                href={specialAsset.file}
                download={`${specialAsset.title}.pdf`}
                className="flex flex-row items-center font-pretendard-bold text-button_2 self-end text-primary_800 bg-white px-6 py-3 mr-[3.75rem] my-6 gap-[0.625rem] rounded-md"
              >
                <TbDownload size={20} />
                다운로드
              </a>
            </>
          )}
        </div>
        {/* <button className="w-full flex flex-row items-center justify-between shadow-[0_2px_4px_rgba(0,0,0,0.25)] px-[4.625rem] rounded-md py-3 group hover:bg-primary_bg focus:bg-primary">
          <div className="w-[4.625rem] h-[4.625rem] flex items-center justify-center rounded-full bg-primary_800">
            <GrNote size={32} className="text-white -rotate-90" />
          </div>
          <span className="font-pretendard-semibold text-button_1 text-primary_800 text-center">
            {specialAsset.title}
          </span>
          <div className="text-primary_800 transform group-hover:rotate-[45deg] group-focus:rotate-[45deg] transition duration-300 ease-in-out">
            <TbPlus size={32} />
          </div>
        </button>
        <button className="w-full flex flex-row items-center justify-between shadow-[0_2px_4px_rgba(0,0,0,0.25)] px-[4.625rem] rounded-md py-3 group hover:bg-primary_bg focus:bg-primary">
          <div className="w-[4.625rem] h-[4.625rem] flex items-center justify-center rounded-full bg-primary_800">
            <FiFileText size={32} className="text-white" />
          </div>
          <span className="font-pretendard-semibold text-button_1 text-primary_800 text-center">
            {specialAsset.title}
          </span>
          <div className="text-primary_800 transform group-hover:rotate-[45deg] group-focus:rotate-[45deg] transition duration-300 ease-in-out">
            <TbPlus size={32} />
          </div>
        </button> */}
      </div>

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
