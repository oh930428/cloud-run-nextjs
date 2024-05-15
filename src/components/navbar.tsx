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
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center"
          }}
          quality={100}
          alt="youdongsan_logo"
        />
      </Link>
      <div className="navbar-tab-container">
        <div className={`navbar-tab-section ${textColor}`}>
          <Link href={""}>WHAT</Link>
          <Link href={"/Who"}>WHO</Link>
          <Link href={"/Asset"}>ASSET</Link>
          <Link href={"/Insight"}>INSIGHT</Link>
          <Link href={"/Newsletter"}>NEWSLETTER</Link>
        </div>
        <div className="navbar-button-section">
          <Button
            className="navbar-button"
            varient="contain"
            handleClicked={() => {}}
          >
            LOGIN
          </Button>
          <Button
            className="navbar-button"
            varient="contain"
            handleClicked={() => {}}
          >
            SIGN UP
          </Button>
        </div>
      </div>
    </div>
  );
}
