"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Button from "./button";

export default function Navbar() {
  const logo = usePathname() == "/" ? "logo-light.png" : "logo-dark.png";
  const textColor = usePathname() == "/" ? "text-white" : "text-black";

  return (
    <div className="navbar-container">
      <Link href={"/"} className="navbar-icon-section">
        <Image
          src={`https://storage.googleapis.com/yds-btq-img-datum/main-info/${logo}`}
          fill
          quality={100}
          alt="youdongsan_logo"
        />
      </Link>
      <div
        className={`navbar-tab-section ${textColor} lg:text-heading_8 xl:text-heading_7 2xl:text-heading_7`}
      >
        <Link href={""}>WHAT</Link>
        <Link href={""}>WHO</Link>
        <Link href={""}>ASSET</Link>
        <Link href={"/Insight"}>INSIGHT</Link>
        <Link href={"/Newsletter"}>NEWSLETTER</Link>
        <Button
          className="navbar-tab-button"
          varient="contain"
          handleClicked={() => {}}
        >
          LOGIN
        </Button>
        <Button
          className="navbar-tab-button"
          varient="contain"
          handleClicked={() => {}}
        >
          SIGN UP
        </Button>
      </div>
    </div>
  );
}
