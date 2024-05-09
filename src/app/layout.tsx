import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "YOUDONSAN",
  description: "유동산투자자문 주식회사"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
