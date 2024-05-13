"use client";

import Image from "next/image";

import Button from "./button";

export default function Section2() {
  return (
    <div className="section2-container">
      <div className="section2-bg-section">
        <div className="section2-bg">
          <Image
            src={"/images/bg_section2.jpg"}
            fill
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            quality={100}
            alt={"section2-bg"}
          />
        </div>
      </div>
      <div className="section2-main-section">
        <h5 className="section2-main-title">What We Offer</h5>
        <span className="section2-main-subtitle">
          <span className="section2-main-subtitle-highlight">
            우량한 실물 자산 기반의
          </span>
          <br />
          선순위 투자 기회 제공
        </span>
        <span className="section2-main-description">
          서울, 수도권 내 대규모 부동산 자산을 선순위 담보로 한<br />
          대출채권에 대해 차별화된 투자자문서비스를 제공드립니다
        </span>
        <Button
          className="section-main-button"
          varient="contain"
          handleClicked={() => {}}
        >
          자세히
        </Button>
      </div>
    </div>
  );
}
