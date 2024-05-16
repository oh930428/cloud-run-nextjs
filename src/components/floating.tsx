"use client";

import Button from "./button";
import { IoPaperPlane } from "react-icons/io5";

export default function Floating() {
  return (
    <div className="floating-container">
      <Button
        className="group floating-button"
        varient="contain"
        handleClicked={() => {}}
      >
        <span className="floating-span">문의하기</span>
        <IoPaperPlane size="30" />
      </Button>
    </div>
  );
}
