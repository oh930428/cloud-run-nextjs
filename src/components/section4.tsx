export default function Section4() {
  const performances = [
    {
      value: "120",
      unit: "조원",
      description: "부동산 선순위 대출채권 투자 규모 *"
    },
    {
      value: "219",
      unit: "억원",
      description: "당사 누적 부동산 대출채권 자문 규모"
    },
    {
      value: "27.2",
      unit: "%",
      description: "2023년도 당사 고객 연환산 수익률"
    },
    {
      value: "20.2",
      unit: "억원",
      description: "2023년도 당사 고객 총 수익 **"
    },
    {
      value: "8~10",
      unit: "%",
      description: "평균 수익률 ***"
    }
  ];

  return (
    <div className="section4-container">
      {performances.map(({ value, unit, description }, index) => (
        <div key={index} className="section4">
          <span className="section4-unit">
            <span className="section4-value">{value} </span>
            {unit}
          </span>
          <span className="section4-description">{description}</span>
        </div>
      ))}
      <div className="section4-explanation">
        <span>* 금융위원회, 금융감독원, 한국은행 자료 기준</span>
        <span>* 이자 및 수수료 (취급, 자문, 법률 등) 모두 포함</span>
        <span>* 유동산 취급자산 투자수익률</span>
      </div>
    </div>
  );
}
