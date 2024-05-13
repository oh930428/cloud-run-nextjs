import Image from "next/image";

type HeaderTitleProps = {
  tabName: string;
  title: string;
  publicDate: string;
  viewsCount: number;
  className: string;
};

export default function HeaderTitle({
  tabName,
  title,
  publicDate,
  viewsCount,
  className
}: HeaderTitleProps) {
  return (
    <div className="header-title-container">
      <div className={`header-tabname-section ${className}`}>
        <span className="header-tabname">{tabName}</span>
      </div>

      <div className="header-logo-section">
        <Image
          src={
            "https://storage.googleapis.com/yds-btq-img-datum/main-info/logo-dark.png"
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

      <span className="header-logo-description">EDITORIAL. YOUDONGSAN</span>

      <div className="header-date-title-count-section">
        <div className="header-date">{publicDate}</div>
        <div className="header-title">{title}</div>
        <div className="header-count">조회수 {viewsCount}</div>
      </div>
    </div>
  );
}
