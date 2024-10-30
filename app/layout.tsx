import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "웹스토리보이 : 코딩 지식의 길잡이",
  description:
    "다양한 프로그래밍 언어와 기술을 아우르는 폭넓은 코딩 튜토리얼, 팁, 리소스를 만나보세요. 초급부터 고급까지, 여러분의 코딩 목표 달성을 위한 맞춤형 학습 자료를 제공합니다",
  keywords: [
    "웹스토리보이",
    "튜토리얼",
    "웹 개발",
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "node.js",
    "react.js",
    "프로그래밍",
  ],
  authors: [{ name: "웹스토리보이" }],
  openGraph: {
    url: "https://webstoryboy.com",
    type: "website",
    title: "웹스토리보이 : 코딩 지식의 길잡이",
    description:
      "다양한 프로그래밍 언어와 기술을 아우르는 폭넓은 코딩 튜토리얼, 팁, 리소스를 만나보세요",
    images: [
      {
        url: "https://webstoryboy.com/webstoryboy.jpg",
        width: 1200,
        height: 630,
        alt: "웹스토리보이 로고",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "웹스토리보이 : 코딩 지식의 길잡이",
    description:
      "다양한 프로그래밍 언어와 기술을 아우르는 폭넓은 코딩 튜토리얼, 팁, 리소스를 만나보세요",
    images: ["https://webstoryboy.com/webstoryboy.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
