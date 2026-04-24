import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const zenMaru = Zen_Maru_Gothic({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zen-maru",
});

export const metadata: Metadata = {
  verification: {
    google: "3a0fbfpoeTD-7Oyc70fiYBzC6koVXQ4esrXnwVJmwIo",
  },
  title: "はるここ｜不登校の子のためのオンライン家庭学習サポート",
  description:
    "学校に行けなくても大丈夫。お子さんのペースで学びを続けられる、不登校専門のオンライン家庭学習サポートです。すらら×個別サポートで安心して学べる環境を整えます。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={zenMaru.variable}>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
