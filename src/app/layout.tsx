import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "",
  keywords: "灵钥通枢,灵启天玑,ai梅花,ai奇门,ai塔罗,ai雷诺曼,ai八字,ai算命," +
    "ai占卜, ai风水, ai八卦, ai易经, ai紫微斗数, ai奇门遁甲, ai六爻,六爻解忧,赛博占卜,灵爻妙解,鬼谷奇门",
  description: "​灵钥通枢（https://ai.letfate.com/）是全网首家免费的AI思维链占卜网站，融合了六爻、梅花易数等传统占卜术数，运用人工智能技术，为用户提供精准、便捷的占卜服务",
  appleWebApp: true
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
