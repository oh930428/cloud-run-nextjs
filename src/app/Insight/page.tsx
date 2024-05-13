import { IoArrowForwardOutline } from "react-icons/io5";

import Image from "next/image";
import Link from "next/link";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Border from "@/components/border";

export default function Insight() {
  const dealing = [
    {
      id: "1",
      img: "https://storage.googleapis.com/web-yds-img-datum/contents/content/section_contents_img1.jpg",
      title: "남양주 왕숙, 왜 인기일까?",
      publicDate: "2023-04-11",
      viewsCount: 80,
      description:
        "LH는 연간 공동주택용지 공급물량과 공급시기를 게시하는데요, 건설 및 시행업계가 주목하고 향후 국내 도시개발의 큰 틀을 가늠할 수 있는 계획이라 관심도가 높습니다."
    },
    {
      id: "2",
      img: "https://storage.googleapis.com/web-yds-img-datum/contents/content/section_contents_img2.jpg",
      title: "인천 영종, 한국의 마카오",
      publicDate: "2023-04-11",
      viewsCount: 80,
      description:
        "인천 영종도는 인천경제자유구역 중 하나로 2003년부터 진행된 오래된 인천광역시 도시계획의 일환입니다. 사업기간은 2003년 8월부터 2023년 12월까지 차근차근 진행이 되어왔고, 2020년 12월 22일 착공하여 2025년 12월에 개통예정인 제3연륙교를 마무리로 서쪽 특별계획구역 유보용지 섹터(인천국제공항경제권과 연계한 국제물류도시 건설목적에 따라 장래 전시 · 산업기능의 확충을 고려한 예비 용지)를 제외하고 어느정도 도시개발은 완성이 될 예정입니다. 간략하게 인천영종을 살펴보자면 아래와 같습니다."
    },
    {
      id: "3",
      img: "https://storage.googleapis.com/web-yds-img-datum/contents/content/section_contents_img3.jpg",
      title: "선순위 금융이란?",
      publicDate: "2023-04-11",
      viewsCount: 1280,
      description:
        "많은 분들께서 선 순위 금융이라는 단어를 처음 접해보실 것으로 예상하는데요. 그도 그럴 것이 기존에는 금융기관에서만 다루던 투자 상품이었습니다. 아마 금융권 종사자분들께서는 선순위 금융이 무엇인지 잘 아실 거라고 생각이 듭니다. 많은 금융권 종사자분들께서는 회사에서 이런 투자를 할 때 한 번쯤은 ‘나도 이거 투자하고 싶다’라는 생각을 하셨을 거라고 확신합니다. 선순위 금융 상품은 그만큼 정말 괜찮은 투자 상품입니다."
    },
    {
      id: "4",
      img: "https://storage.googleapis.com/web-yds-img-datum/contents/content/section_contents_img4.jpg",
      title: "레고랜드 사태, 그 전말",
      publicDate: "2023-04-11",
      viewsCount: 80,
      description:
        "레고랜드의 ‘레고’는 여러분들께서도 적어도 한 번쯤은 들어보셨을 그 블록형 장난감을 만드는 회사가 맞습니다. 아이들은 말할 것도 없고, 성인 중에도 매니아가 있을 정도로 강력한 브랜드 파워를 가진 곳이라 할 수 있지요. 이 글을 쓰는 저도 어렸을 때 인터넷에 올라온 스타워즈 전투함을 보고 정말 멋있어서 갖고 싶어했던 기억이 납니다. 그렇다 보니 그러한 레고에서 파생된 테마파크인 ‘레고랜드’가 지어지면 사람들이 꽤 많이 찾지 않을까 하는 기대를 할 법도 합니다."
    }
  ];
  return (
    <Tabs defaultValue="account" className="insight-container">
      <div className="insight-header">
        <h3 className="insight-header-title">
          MARKET
          <br />
          INSIGHTS
        </h3>
        <TabsList>
          <TabsTrigger value="account">인기순</TabsTrigger>
          <TabsTrigger value="password">조회순</TabsTrigger>
        </TabsList>
      </div>
      <div className="insight-border"></div>
      <TabsContent value="account">
        {dealing.map(
          ({ id, img, title, publicDate, viewsCount, description }, index) => (
            <>
              <Link
                key={index}
                href={`/Insight/${id}`}
                className="insight-section"
              >
                <div className="insight-left-section">
                  <span className="insight-numbering">
                    {String(index + 1).padStart(2, "0") + "."}
                  </span>
                  <h4 className="insight-title">{title}</h4>
                  <div className="insight-date-and-count">
                    <span className="">{publicDate}</span>
                    <Border
                      className={
                        "h-[0.6875rem] border border-secondary_600 mx-4"
                      }
                    />
                    <span className="">조회수 {viewsCount}</span>
                  </div>
                  <p className="insight-description">{description}</p>
                  <div className="w-full inline-flex flex-row items-end gap-4">
                    <span className="font-pretendard-regular  text-text4 text-secondary_200 underline underline-offset-[5px] decoration-solid">
                      Read more
                    </span>
                    <IoArrowForwardOutline
                      size={24}
                      className="text-secondary_200"
                    />
                  </div>
                </div>
                <div className="insight-right-section">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </div>
              </Link>
            </>
          )
        )}
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>

      <ul className="flex flex-row items-center justify-start gap-8 px-[7rem] py-16">
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
    </Tabs>
  );
}
