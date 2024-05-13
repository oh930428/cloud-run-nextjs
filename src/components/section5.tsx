"use client";

import Button from "./button";

export default function Section5() {
  return (
    <div className="section5-container">
      <h5 className="section5-title">Solution</h5>
      <span className="section5-subtitle">
        은행에 <span className="section5-subtitle-highlight">돈</span> 맡기지
        마세요. 은행과
        <span className="section5-subtitle-highlight"> 같이 투자</span>하세요
      </span>
      <span className="section5-description">
        더 자세한 내용은 유동산 내 선순위 금융 전문가와
        <br />
        무료 상담을 통해 확인하실 수 있습니다
      </span>
      <form className="section5-form-container">
        <div className="section5-form">
          {/* TODO - validation 추가 및 API 연결 */}
          <div className="section5-form-left-section">
            <input
              name=""
              type="text"
              className="section5-form-input"
              placeholder="성함"
            />
            <input
              name=""
              type="email"
              className="section5-form-input"
              placeholder="이메일"
            />
            <input
              name=""
              type="text"
              className="section5-form-input"
              placeholder="휴대폰 번호"
            />
            <input
              name=""
              type="text"
              className="section5-form-input"
              placeholder="회사(소속)"
            />
          </div>
          <div className="section5-form-right-section">
            <div className="section5-form-file-container">
              <input id="file-upload-button" type="file" hidden />
              <input
                type="text"
                className="section5-form-file-input"
                placeholder="선택된 파일 없음"
              />
              <label
                htmlFor="file-upload-button"
                className="section5-form-file-button"
              >
                파일첨부
              </label>
            </div>
            <textarea
              id=""
              name=""
              cols={30}
              rows={9}
              placeholder="문의"
              className="section5-form-input"
            ></textarea>
          </div>
        </div>

        <Button
          className="section5-form-button"
          varient="contain"
          handleClicked={() => {}}
        >
          제출하기
        </Button>
      </form>
    </div>
  );
}
