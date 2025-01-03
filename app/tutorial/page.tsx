import Image from "next/image";
import Link from "next/link";
import {
  LuHeart,
  LuFileSpreadsheet,
  LuPresentation,
  LuClock8,
} from "react-icons/lu";

const tutorialItems = [
  {
    url: "/",
    imgSrc: "/images/post01.jpg",
    imgAlt: "첫 번째 이미지",
    categories: ["CSS", "3D", "GSAP", "Three.js"],
    likes: 1,
    views: 10,
    headline: "고정된 요소에 대한 재미있는 컨텍스트 인식 애니메이션 탐색",
    clicks: 6,
    author: "웹쓰",
    daysAgo: 6,
  },
];

export default function TutorialPage() {
  return (
    <section id="tutorial" className="mx-auto max-w-7xl px-4 mt-40">
      <div>
        <h2 className="text-4xl font-nexon mb-3">튜토리얼</h2>
        <p className="text-black300 leading-7">
          이 웹사이트는 웹 디자인과 개발을 위한 다양한 튜토리얼을 제공합니다.
          현재{" "}
          <span className="underline underline-offset-4 cursor-pointer">
            UI/UX CSS 디자인
          </span>
          과{" "}
          <span className="underline underline-offset-4 cursor-pointer">
            GSAP 인터랙티브 애니메이션
          </span>
          을 주제로 한 기초 및 심화 학습이 구성되어 있습니다. UI/UX CSS
          디자인에서는 CSS의 주요 기법과 레이아웃 구성, 속성 활용, 로그인 페이지
          디자인, CSS 애니메이션, 반응형 디자인, Flexbox, Grid 레이아웃 등
          실무에서 자주 쓰이는 기술을 다룹니다. GSAP 인터랙티브 애니메이션에서는
          패럴랙스 기법, JavaScript 애니메이션, GSAP, Framer Motion, 스크롤
          애니메이션, SVG 애니메이션 등 최신 트렌드의 인터랙티브 효과 구현법을
          익힐 수 있습니다.
        </p>
        <div className="flex gap-1 mt-4">
          <span className="border-black300 border text-black300 rounded-sm text-sm px-2">
            All
          </span>
          <span className="border-black300 border text-black300 rounded-sm text-sm px-2">
            UI/UX CSS Design
          </span>
          <span className="border-black300 border text-black300 rounded-sm text-sm px-2">
            GSAP Interative Animation
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-16">
        {tutorialItems.map((item, index) => (
          <div key={index} className="mb-10">
            <Link href={item.url} className="group">
              <div className="relative block">
                <Image
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  width={500}
                  height={400}
                  className="rounded-none transition-all duration-500 ease-in-out group-hover:brightness-75 group-hover:rounded-xl"
                />
                <div className="absolute inset-0 flex gap-1 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-black p-2 rounded-full">
                    <LuFileSpreadsheet className="size-4 text-white" />
                  </span>
                  <span className="bg-black p-2 rounded-full">
                    <LuPresentation className="size-4 text-white" />
                  </span>
                </div>
              </div>
              <div className="py-3">
                <div className="flex gap-1 mt-1 mb-2">
                  {item.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-400 rounded-sm text-xs px-2 text-white"
                    >
                      {category}
                    </span>
                  ))}
                  <span className="bg-red-500 rounded-sm text-xs text-white px-1 flex items-center justify-center">
                    <LuHeart />{" "}
                    <span className="text-[10px] pl-1">{item.likes}</span>
                  </span>
                </div>
                <h3 className="text-xl leading-7 text-black200">
                  {item.headline}
                  <span className="text-[8px] pl-1 align-super">
                    {item.clicks}
                  </span>
                </h3>
                <div className="mt-1">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <LuClock8 />
                    {item.daysAgo}일 전에{" "}
                    <em className="text-gray-800">{item.author}</em>가 작성함
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
