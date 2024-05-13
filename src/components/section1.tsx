"use client";

import Button from "./button";

export default function Section1() {
  return (
    <div className="section1-container ">
      <h1 className="section1-title">
        <strong className="section1-title-highlight">공간과 삶</strong>을 바꾸는{" "}
        <strong className="section1-title-highlight">금융 자문사</strong>
      </h1>
      <h3 className="section1-subtitle">
        유동산은 금융에 디지털 기술을 결합한 토큰증권 및 AI 데이터 기반의 기술을
        합쳐
        <br />
        선순위 금융을 법인 및 개인 투자자들께서도 투자할 수 있도록 안정적인
        방향성을 제안합니다.
      </h3>
      <Button
        varient="contain"
        className="section1-button"
        handleClicked={() => {}}
      >
        문의하기
      </Button>
    </div>
  );
}
