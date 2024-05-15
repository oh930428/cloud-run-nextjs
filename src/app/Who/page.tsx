import Image from "next/image";

export default function Who() {
  return (
    <div className="who-container">
      <div className="who-header">
        <h3 className="who-header-title">
          WHO
          <br />
          WE ARE
        </h3>
      </div>

      <div className="who-description">
        <span className="who-description-title">YOUDONGSAN</span>
        <span className="who-description-subtitle">
          유동산은 한국투자증권 PF 부서에서 근무했던 인력들이 주축이 되어 만든
          회사이며, 금융적 아이디어에 AI 데이터 기반의 정밀한 기술을 합쳐
          안정적인 선순위 금융을 일반 법인도 투자할 수 있도록 시장을 개척하기
          위해 움직이고 있습니다.
        </span>
      </div>

      <div className="who-determination">
        <span className="who-determination-title">
          유동산은 한국투자증권 PF 부서에서 근무했던 인력들이 주축이 되어 만든
          회사이며, 금융적 아이디어에 AI 데이터 기반의 정밀한 기술을 합쳐
          안정적인 선순위 금융을 일반 법인도 투자할 수 있도록 시장을 개척하기
          위해 움직이고 있습니다.
        </span>
      </div>

      <div className="who-roadmap">
        <Image
          src={"/images/bg-who-roadmap.jpg"}
          alt={"roadmap"}
          width={1200}
          height={1600}
          priority
          quality={100}
          sizes="100vw"
        />
      </div>

      <div className="who-vision">
        <span className="who-vision-title">VISION</span>
        <span className="who-vision-en">
          “Youdongsan and our clients are brought together
          <br />
          to develop our places, lives, and communities.”
        </span>
        <span className="who-vision-kr">공간과 삶을 바꾸는 금융회사</span>
      </div>
    </div>
  );
}
