import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      screens: {
        // laptop / desktop / extra
        lg: { min: "1024px", max: "1279px" },
        xl: { min: "1280px", max: "1439px" },
        "2xl": { min: "1440px" }
      }
    },
    extend: {
      fontFamily: {
        sabon: ["Sabon"],
        "sabon-bold": ["Sabon-Bold"],
        pretendard: ["Pretendard"],
        "pretendard-thin": ["Pretendard-Thin"],
        "pretendard-light": ["Pretendard-Light"],
        "pretendard-regular": ["Pretendard-Regular"],
        "pretendard-medium": ["Pretendard-Medium"],
        "pretendard-semibold": ["Pretendard-SemiBold"],
        "pretendard-bold": ["Pretendard-Bold"],
        "pretendard-extrabold": ["Pretendard-ExtraBold"]
      },
      fontSize: {
        heading_1_M: [
          "80px",
          {
            lineHeight: "90px",
            letterSpacing: "-0.08px"
          }
        ],
        heading_1_S: [
          "72px",
          {
            lineHeight: "90px",
            letterSpacing: "-0.08px"
          }
        ],
        heading_2_M: [
          "70px",
          {
            lineHeight: "70px",
            letterSpacing: "0px"
          }
        ],
        heading_2_S: [
          "40px",
          {
            lineHeight: "70px",
            letterSpacing: "0px"
          }
        ],
        heading_3: [
          "70px",
          {
            lineHeight: "70px",
            letterSpacing: "0.03px"
          }
        ],
        heading_4: [
          "42px",
          {
            lineHeight: "125%",
            letterSpacing: "0.08px"
          }
        ],
        heading_5: [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "0px"
          }
        ],
        heading_6: [
          "30px",
          {
            lineHeight: "40px",
            letterSpacing: "0px"
          }
        ],
        heading_7: [
          "20px",
          {
            lineHeight: "20px",
            letterSpacing: "0px"
          }
        ],
        text1: [
          "24px",
          {
            lineHeight: "30px",
            letterSpacing: "0.03px"
          }
        ],
        text2: [
          "24px",
          {
            lineHeight: "30px",
            letterSpacing: "0.03px"
          }
        ],
        text3: [
          "20px",
          {
            lineHeight: "25px",
            letterSpacing: "0px"
          }
        ],
        text4: [
          "20px",
          {
            lineHeight: "25px",
            letterSpacing: "0px"
          }
        ],
        text5: [
          "15px",
          {
            lineHeight: "18px",
            letterSpacing: "-0.96px"
          }
        ],
        text6: [
          "10px",
          {
            lineHeight: "10px",
            letterSpacing: "0px"
          }
        ],
        button_1: [
          "30px",
          {
            lineHeight: "35px",
            letterSpacing: "0px"
          }
        ],
        button_2: [
          "20px",
          {
            lineHeight: "15px",
            letterSpacing: "0px"
          }
        ],
        button_3: [
          "16px",
          {
            lineHeight: "19px",
            letterSpacing: "0px"
          }
        ],
      },
      colors: {
        primary: "#CBBD9A",
        primary_bg: "#F5F0E6",
        primary_100: "#CFC7B1",
        primary_200: "#CFC6B1",
        primary_400: "#A69A7C",
        primary_600: "#7D7151",
        primary_800: "#544B31",
        secondary: "#1F1F1F",
        secondary_bg: "#F3F3F3",
        secondary_200: "#C6C6C6",
        secondary_400: "#9B9B9B",
        secondary_600: "#727272",
        secondary_800: "#4B4B4B",
        deepgray: "#5B5858"
      },
      borderRadius: {},
      keyframes: {},
      animation: {}
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;

export default config;
