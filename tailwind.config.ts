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
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
      }
    },
    extend: {
      fontFamily: {
        sabonbold: ["SabonBold"],
        pretendard: ["Pretendard"]
      },
      fontSize: {
        heading_1_B: [
          "80px",
          {
            lineHeight: "90px",
            letterSpacing: "-0.5%",
            fontWeight: 700
          }
        ],
        heading_1_R: [
          "72px",
          {
            lineHeight: "90px",
            letterSpacing: "-0.5%",
            fontWeight: 400
          }
        ],
        heading_2_L: [
          "70px",
          {
            lineHeight: "70px",
            letterSpacing: "0%",
            fontWeight: 700
          }
        ],
        heading_2_M: [
          "62px",
          {
            lineHeight: "70px",
            letterSpacing: "0%",
            fontWeight: 400
          }
        ],
        heading_2_S: [
          "40px",
          {
            lineHeight: "70px",
            letterSpacing: "0%",
            fontWeight: 700
          }
        ],
        heading_3_B: [
          "60px",
          {
            lineHeight: "70px",
            letterSpacing: "0.2%",
            fontWeight: 700
          }
        ],
        heading_3_R: [
          "52px",
          {
            lineHeight: "70px",
            letterSpacing: "0.2%",
            fontWeight: 400
          }
        ],
        heading_4: [
          "42px",
          {
            lineHeight: "50px",
            letterSpacing: "0.5%",
            fontWeight: 800
          }
        ],
        heading_5: [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "0%",
            fontWeight: 700
          }
        ],
        heading_6: [
          "30px",
          {
            lineHeight: "40px",
            letterSpacing: "0%",
            fontWeight: 700
          }
        ],
        heading_7: [
          "20px",
          {
            lineHeight: "20px",
            letterSpacing: "0%",
            fontWeight: 700
          }
        ],
        heading_8: [
          "16px",
          {
            lineHeight: "16px",
            letterSpacing: "0%",
            fontWeight: 700
          }
        ],
        text1: [
          "24px",
          {
            lineHeight: "30px",
            letterSpacing: "0.2%",
            fontWeight: 600
          }
        ],
        text2: [
          "24px",
          {
            lineHeight: "30px",
            letterSpacing: "0.2%",
            fontWeight: 500
          }
        ],
        text3: [
          "20px",
          {
            lineHeight: "25px",
            letterSpacing: "0%",
            fontWeight: 500
          }
        ],
        text4: [
          "20px",
          {
            lineHeight: "25px",
            letterSpacing: "0%",
            fontWeight: 400
          }
        ],
        text5: [
          "15px",
          {
            lineHeight: "18px",
            letterSpacing: "-6%",
            fontWeight: 400
          }
        ],
        text6: [
          "10px",
          {
            lineHeight: "10px",
            letterSpacing: "0%",
            fontWeight: 400
          }
        ],
        button_1: [
          "30px",
          {
            lineHeight: "35px",
            letterSpacing: "0%",
            fontWeight: 600
          }
        ],
        button_2: [
          "20px",
          {
            lineHeight: "15px",
            letterSpacing: "0%",
            fontWeight: 700
          }
        ],
        button_3: [
          "16px",
          {
            lineHeight: "19px",
            letterSpacing: "0%",
            fontWeight: 700
          }
        ],
        button_4: [
          "14px",
          {
            lineHeight: "17px",
            letterSpacing: "0%",
            fontWeight: 700
          }
        ],
        button_5: [
          "12px",
          {
            lineHeight: "15px",
            letterSpacing: "0%",
            fontWeight: 700
          }
        ]
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
