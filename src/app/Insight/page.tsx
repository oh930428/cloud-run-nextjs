import { IoArrowForwardOutline } from "react-icons/io5";

import Image from "next/image";
import Link from "next/link";

export default function Insight() {
  return (
    <main className="insight-container">
      <header className="insight-header">
        <h1 className="insight-header-title">
          MARKET
          <br />
          INSIGHTS
        </h1>
      </header>
      <div className="insight-border"></div>
      <Link href="/Insight/1" className="insight-section">
        <div className="insight-left-section">
          <span className="insight-numbering">02.</span>
          <h4 className="insight-title">인천 영종, 한국의 마카오</h4>
          <span className="insight-date">2023-04-11 조회수 80</span>
          <p className="insight-description">
            인천 영종도는 인천경제자유구역 중 하나로 2003년부터 진행된 오래된
            인천광역시 도시계획의 일환입니다. 사업기간은 2003년 8월부터 2023년
            12월까지 차근차근 진행이 되어왔고, 2020년 12월 22일 착공하여 2025년
            12월에 개통예정인 제3연륙교를 마무리로 서쪽 특별계획구역 유보용지
            섹터(인천국제공항경제권과 연계한 국제물류도시 건설목적에 따라 장래
            전시 · 산업기능의 확충을 고려한 예비 용지)를 제외하고 어느정도
            도시개발은 완성이 될 예정입니다. 간략하게 인천영종을 살펴보자면
            아래와 같습니다.
          </p>
          <div className="w-full flex flex-row items-center gap-6">
            <span className="text-text4 text-secondary_200 underline underline-offset-[5px] decoration-solid">
              Read more
            </span>
            <IoArrowForwardOutline size={24} className="text-secondary_200" />
          </div>
        </div>
        <div className="relative w-[37.5rem] h-[25rem]">
          <Image
            src={
              "https://storage.googleapis.com/yds-btq-img-datum/deal-info/deal_complete/completed_deal_three.jpg"
            }
            alt={""}
            fill
          />
        </div>
      </Link>
      <ul className="flex flex-row items-center justify-end gap-8 px-[7rem] py-16">
        <li className="text-button_2">
          <Link
            href={"#"}
            className="hover:text-primary hover:underline focus:text-primary_800 focus:underline"
          >
            1
          </Link>
        </li>
        <li className="text-button_2">
          <Link
            href={"#"}
            className="hover:text-primary hover:underline focus:text-primary_800 focus:underline"
          >
            2
          </Link>
        </li>
        <li className="text-button_2">
          <Link
            href={"#"}
            className="hover:text-primary hover:underline focus:text-primary_800 focus:underline"
          >
            3
          </Link>
        </li>
        <li className="text-button_2">
          <Link
            href={"#"}
            className="hover:text-primary hover:underline focus:text-primary_800 focus:underline"
          >
            4
          </Link>
        </li>
      </ul>
    </main>
  );
}
