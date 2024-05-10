import Image from "next/image";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

import Button from "./button";

export default function Section3() {
  const images = [
    {
      url: "https://storage.googleapis.com/yds-btq-img-datum/deal-info/deal_sixteen/image_16.jpg",
      location: "포항 학산",
      type: "공동주택",
      value: "50억"
    },
    {
      url: "https://storage.googleapis.com/yds-btq-img-datum/deal-info/deal_fourteen/image_14.jpg",
      location: "평택 브레인시티",
      type: "공동주택",
      value: "50억"
    },
    {
      url: "https://storage.googleapis.com/yds-btq-img-datum/deal-info/deal_complete/completed_deal_four.jpg",
      location: "양양 카펠라",
      type: "리조트",
      value: "50억"
    },
    {
      url: "https://storage.googleapis.com/yds-btq-img-datum/deal-info/deal_complete/completed_deal_one.jpg",
      location: "홍대입구역",
      type: "KT 임대주택",
      value: "50억"
    },
    {
      url: "https://storage.googleapis.com/yds-btq-img-datum/deal-info/deal_complete/completed_deal_two.jpg",
      location: "당진시 물류단지",
      type: "물류센터",
      value: "50억"
    },
    {
      url: "https://storage.googleapis.com/yds-btq-img-datum/deal-info/deal_complete/completed_deal_three.jpg",
      location: "영종도 인스파이어",
      type: "복합 리조트",
      value: "50억"
    }
  ];

  return (
    <div className="section3-container">
      <span className="section3-title">Performance</span>
      <h2 className="section3-subtitle">
        <span className="section3-subtitle-highlight">
          대한민국 금융을 선도하는
        </span>
        은행, 증권사 및 보험사와
        <br />
        함께 선순위 금융시장을 혁신합니다.
      </h2>
      <span className="section3-description">
        2024년 현재, O개 은행, O개 증권사, O개 저축은행,
        <br />
        O개 전문투자기관과 함께 합니다.
      </span>
      <Button
        className="section3-button"
        varient="contain"
        handleClicked={() => {}}
      >
        자세히
      </Button>
      <div className="section3-partner-logo">
        <Image src="/images/partner.jpg" alt="" fill quality={100} />
      </div>

      <div className="section3-completed-assets-container">
        {images.map(({ url, location, type, value }, index) => (
          <div key={index} className="section3-completed-assets">
            <div className="section3-completed-assets-hover-box">
              <span className="section3-completed-assets-hover-title">
                {location}
                <br />
                {type}
              </span>
              <span className="section3-completed-assets-hover-amount">{`${value} 완료`}</span>
              <IoArrowForwardCircleOutline
                size={42}
                className="section3-completed-assets-hover-icon"
              />
            </div>
            <Image src={url} alt="" fill quality={100} />
          </div>
        ))}
      </div>
    </div>
  );
}
