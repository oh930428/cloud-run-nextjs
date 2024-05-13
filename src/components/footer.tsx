import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo-section">
        <Image
          src={
            "https://storage.googleapis.com/yds-btq-img-datum/main-info/logo-light.png"
          }
          fill
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center"
          }}
          quality={100}
          alt="youdongsan_logo"
        />
      </div>
      <ul className="footer-main-section">
        <li>Tel. 070-4422-8400</li>
        <li>Mobile. 010-4752-0104</li>
        <li>Email. admin@youdongsan.com</li>
        <li>Website. www.ydsinvestment.com</li>
        <li>Address. 서울특별시 영등포구 국제금융로 8길 11 8층 812호</li>
      </ul>
      <div className="footer-border"></div>
      <ul className="footer-sub-section">
        <div className="footer-sub-left-section">
          <li>대표이사 : 조세영 | 법인등록번호 : 11011-7997608</li>
          <li>사업장 주소 : 서울특별시 영등포구 국제금융로 8길 11 8층 812호</li>
        </div>
        <div className="footer-sub-right-section">
          <li>&lsquo;공간&rsquo;과 &lsquo;삶&rsquo;을 바꾸는 금융회사,</li>
          <li>(주)유동산|유동산투자자문(주)</li>
        </div>
      </ul>
    </div>
  );
}
