"use client";

import { useState } from "react";

import Image from "next/image";
import { PiCheckFatFill } from "react-icons/pi";

import Button from "@/components/button";
import Border from "@/components/border";
import NewsletterTitle from "@/components/newsletter-title";

export default function Newsletter() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="w-full flex flex-col items-center bg-white py-[8rem] px-[7rem] text-center">
      <NewsletterTitle />
      <Border className="w-full border-t-[5px] border-secondary" />
      <div className="my-[3.125rem]">
        {clicked ? (
          <Image
            src={"/images/newsletter.jpg"}
            alt={""}
            width={1216}
            height={4460}
          />
        ) : (
          <Image
            src={"/images/newsletter_summary.jpg"}
            alt={""}
            width={1216}
            height={4460}
          />
        )}
      </div>
      <Border
        className={`w-full border-t-[5px] ${clicked && "my-[6.25rem]"}  border-secondary`}
      />
      {!clicked && (
        <Button
          varient={"outline"}
          className={"px-[8.125rem] py-5 my-[6.25rem] text-button_1"}
          handleClicked={() => setClicked(true)}
        >
          MORE VIEW
        </Button>
      )}
      <div className="w-full bg-primary_800 p-[7rem]">
        <div className="font-sabonbold mb-[6.25rem]">
          <h1 className="text-heading_1_R text-white">
            <span className="text-primary_100">SUBSCRIBE</span>
            <br />
            NEWSLETTER
          </h1>
        </div>
        <form className="w-ufll flex flex-col items-center justify-center">
          <div className="w-full flex flex-row items-center justify-between gap-16 mb-[9.375rem]">
            <div className="w-1/2 flex flex-col gap-5">
              <div className="flex flex-col items-start text-white text-text2 gap-5">
                <label htmlFor="name">성함 *</label>
                <input
                  className="w-full p-[1.875rem] text-secondary_400 text-text2 rounded-md"
                  id="name"
                  type="text"
                  placeholder="성함"
                />
              </div>
              <div className="flex flex-col items-start text-white text-text2 gap-5">
                <label htmlFor="email">이메일 *</label>
                <input
                  className="w-full p-[1.875rem] text-secondary_400 text-text2 rounded-md"
                  id="email"
                  type="email"
                  placeholder="이메일"
                />
              </div>
              <div className="flex flex-col items-start text-white text-text2 gap-5">
                <label htmlFor="phone">휴대폰 번호 *</label>
                <input
                  className="w-full p-[1.875rem] text-secondary_400 text-text2 rounded-md"
                  id="phone"
                  type="text"
                  placeholder="휴대폰 번호(ex 010-1234-5678)"
                />
              </div>
              <div className="flex flex-col items-start text-white text-text2 gap-5">
                <label htmlFor="company">회사 *</label>
                <input
                  className="w-full p-[1.875rem] text-secondary_400 text-text2 rounded-md"
                  id="company"
                  type="text"
                  placeholder="회사"
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-5">
              <div className="flex flex-row items-center gap-5 relative">
                <input
                  type="checkbox"
                  name=""
                  id="privacy"
                  className="peer w-[1.875rem] h-[1.875rem] bg-secondary_400 rounded-xl appearance-none"
                />
                <PiCheckFatFill
                  className="absolute -top-1 left-2 hidden peer-checked:block text-white"
                  size={30}
                />
                <label htmlFor="privacy" className="text-white text-text2">
                  개인정보 이용 동의 *
                </label>
              </div>
              <textarea
                name=""
                id=""
                cols={26}
                rows={12}
                className="w-full h-full pl-6 py-4 rounded-md text-[30px] tracking-wide font-medium leading-[150%] overflow-auto resize-none"
              ></textarea>
            </div>
          </div>

          <Button
            className="w-[40%] text-button_1 px-[6.8125rem] py-5 text-white"
            varient="contain"
            handleClicked={() => {}}
          >
            뉴스레터 구독하기
          </Button>
        </form>
      </div>
    </div>
  );
}
