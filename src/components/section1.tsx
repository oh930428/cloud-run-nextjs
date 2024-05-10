import Button from "./button";

export default function Section1() {
  return (
    <div className="section1-container ">
      <div className="section1">
        <h1 className="lg:text-heading_3_R xl:text-heading_2_M 2xl:text-heading_1_R mb-10">
          <strong className="text-primary lg:text-heading_3_B xl:text-heading_2_L 2xl:text-heading_1_B">
            공간과 삶
          </strong>
          을 바꾸는{" "}
          <strong className="text-primary lg:text-heading_3_B xl:text-heading_2_L 2xl:text-heading_1_B">
            금융 자문사
          </strong>
        </h1>
        <h3 className="lg:text-text5 xl:text-text3 2xl:text-text1 text-center mb-10">
          유동산은 금융에 디지털 기술을 결합한 토큰증권 및 AI 데이터 기반의
          기술을 합쳐
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
    </div>
  );
}
