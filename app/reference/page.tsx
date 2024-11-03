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
    imgSrc: "/images/post04.jpg",
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

export default function ReferencePage() {
  return (
    <section id="tutorial" className="mx-auto max-w-7xl px-4 mt-40">
      <div>
        <h2 className="text-4xl font-nexon mb-3">레퍼런스</h2>
        <p className="text-black300 leading-7">
          웹스토리보이가 제공하는 유료 및 무료 강의에 대한 가이드를 제공합니다.
          현재는 웹디자인개발기능사 2025와 리액트를 위한 자바스크립트 기초
          마스터 강의가 준비되어 있으며, 유튜브 및 인프런에서 수강할 수
          있습니다.
          <span className="underline underline-offset-4 cursor-pointer">
            웹디자인개발기능사 2025
          </span>{" "}
          강의는 2025년 시험 대비를 위한 실기 내용을 다룹니다. 이 강의는 기초
          이론에서 실전까지, 시험에 필요한 웹디자인 및 개발 지식을 체계적으로
          쌓을 수 있도록 돕습니다.
          <span className="underline underline-offset-4 cursor-pointer">
            리액트를 위한 자바스크립트 기초 마스터
          </span>{" "}
          리액트를 본격적으로 배우기 전, 필수 자바스크립트 개념과 기초 문법을
          이해하도록 설계되었습니다. 이 강의를 통해 리액트 개발에 필요한
          기본기를 단단히 다질 수 있습니다
        </p>
        <ul>
          <li></li>
        </ul>

        <div className="flex gap-1 mt-4">
          <span className="border-black300 border text-black300 rounded-sm text-sm px-2">
            웹다자인개발기능사 2025
          </span>
          <span className="border-black300 border text-black300 rounded-sm text-sm px-2">
            리액트를 위한, 자바스크립트 기초 마스터
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
