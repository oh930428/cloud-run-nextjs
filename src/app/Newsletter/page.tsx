"use client";

import { useState } from "react";

import Image from "next/image";
import { PiCheckFatFill } from "react-icons/pi";

import Button from "@/components/button";
import Border from "@/components/border";
import HeaderTitle from "@/components/header-title";

export default function Newsletter() {
  const [clicked, setClicked] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="newsletter-container">
        <HeaderTitle
          tabName={"NEWSLETTER"}
          title={"선순위 금융이란?"}
          publicDate={"24.05.03"}
          viewsCount={89}
          className={"bg-primary_800"}
        />
        <Border className="w-full border-t-[5px] border-secondary mt-4 mb-[2.5rem]" />
        <div
          className={`newsletter-img-section ${clicked ? "h-[12000px]" : "h-[2200px]"}`}
        >
          <Image
            src={"/images/newsletter.jpg"}
            alt={"개발호재 지역 분석(용인 1부"}
            priority
            fill
            objectFit={`${clicked ? "contain" : "cover"}`}
            objectPosition="top"
          />
        </div>
        {!clicked && (
          <Border className="w-full border-t-[2px] border-secondary mt-[3.125rem] mb-4" />
        )}

        {!clicked && (
          <Button
            varient={"outline"}
            className={"px-[8.125rem] py-5 mt-[6.25rem] text-button_1"}
            handleClicked={() => setClicked(true)}
          >
            MORE VIEW
          </Button>
        )}
      </div>
      <div className="newsletter-form-container">
        <h1 className="newsletter-form-title">
          <span className="newsletter-form-title-highlight">SUBSCRIBE</span>
          <br />
          NEWSLETTER
        </h1>

        <form className="newsletter-form-section">
          <div className="newsletter-form-left-section">
            <div className="newsletter-form-input-section">
              <label htmlFor="name">성함 *</label>
              <input
                className="newsletter-form-input"
                id="name"
                type="text"
                placeholder="성함"
              />
            </div>
            <div className="newsletter-form-input-section">
              <label htmlFor="email">이메일 *</label>
              <input
                className="newsletter-form-input"
                id="email"
                type="email"
                placeholder="이메일"
              />
            </div>
            <div className="newsletter-form-input-section">
              <label htmlFor="phone">휴대폰 번호 *</label>
              <input
                className="newsletter-form-input"
                id="phone"
                type="text"
                placeholder="휴대폰 번호(ex 010-1234-5678)"
              />
            </div>
            <div className="newsletter-form-input-section">
              <label htmlFor="company">회사 *</label>
              <input
                className="newsletter-form-input"
                id="company"
                type="text"
                placeholder="회사"
              />
            </div>
          </div>
          <div className="newsletter-form-right-section">
            <div className="newsletter-form-checkbox-section">
              <input
                id="privacy"
                name=""
                type="checkbox"
                className="peer newsletter-form-checkbox"
              />
              <PiCheckFatFill
                className="newsletter-form-check-icon"
                size={30}
              />
              <label htmlFor="privacy">개인정보 이용 동의 *</label>
            </div>
            <textarea
              id=""
              name=""
              cols={26}
              rows={13}
              className="newsletter-form-textarea"
            ></textarea>
          </div>
        </form>
        <Button
          className="newsletter-form-button"
          varient="contain"
          handleClicked={() => {}}
        >
          뉴스레터 구독하기
        </Button>
      </div>
    </>
  );
}
