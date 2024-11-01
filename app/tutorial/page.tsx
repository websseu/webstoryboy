import Image from "next/image";
import Link from "next/link";
import {
  LuHeart,
  LuEye,
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
  {
    url: "/",
    imgSrc: "/images/post02.jpg",
    imgAlt: "두 번째 이미지",
    categories: ["React", "Animations", "UI"],
    likes: 5,
    views: 25,
    headline: "리액트를 사용한 반응형 애니메이션 구현",
    clicks: 12,
    author: "디자인 러버",
    daysAgo: 3,
  },
  {
    url: "/",
    imgSrc: "/images/post03.jpg",
    imgAlt: "세 번째 이미지",
    categories: ["JavaScript", "DOM Manipulation"],
    likes: 8,
    views: 30,
    headline: "효율적인 DOM 제어로 애니메이션 최적화",
    clicks: 19,
    author: "코딩 마스터",
    daysAgo: 10,
  },
  {
    url: "/",
    imgSrc: "/images/post04.jpg",
    imgAlt: "네 번째 이미지",
    categories: ["HTML", "CSS", "Web Design"],
    likes: 3,
    views: 18,
    headline: "HTML과 CSS로 만든 반응형 웹 디자인",
    clicks: 8,
    author: "웹 디자이너",
    daysAgo: 5,
  },
  {
    url: "/",
    imgSrc: "/images/post05.jpg",
    imgAlt: "다섯 번째 이미지",
    categories: ["Animation", "UX", "SVG"],
    likes: 6,
    views: 21,
    headline: "SVG와 CSS 애니메이션으로 인터랙티브 UX 구현",
    clicks: 14,
    author: "UX 전문가",
    daysAgo: 7,
  },
  {
    url: "/",
    imgSrc: "/images/post06.jpg",
    imgAlt: "여섯 번째 이미지",
    categories: ["Vue.js", "JavaScript", "Frontend"],
    likes: 4,
    views: 12,
    headline: "Vue.js를 사용한 컴포넌트 기반 개발",
    clicks: 7,
    author: "프론트엔드 개발자",
    daysAgo: 9,
  },
  {
    url: "/",
    imgSrc: "/images/post07.jpg",
    imgAlt: "일곱 번째 이미지",
    categories: ["Python", "Data Science", "Visualization"],
    likes: 10,
    views: 35,
    headline: "Python과 데이터 시각화를 통한 데이터 분석",
    clicks: 20,
    author: "데이터 분석가",
    daysAgo: 4,
  },
];

export default function TutorialPage() {
  return (
    <section id="tutorial" className="mx-auto max-w-7xl px-4 mt-40">
      <div>
        <h2 className="text-4xl font-nexon mb-3">Scroll Effect</h2>
        <p className="text-black300 leading-7">
          500개 이상의 무료 데모, 프로토타입, 애니메이션, 템플릿, 레이아웃, UI
          스타일 및 실험적인 디자인 컨셉으로 구성된 엄선된 컬렉션입니다.
          <br />
          MIT에서 자유롭게 다운로드하여 사용하세요. 이를 염두에 두고, 오늘은 손,
          웹캠, 웹 브라우저만 사용하여 3D 장면의 요소를 제어하는 ​​방법을
          보여드리겠습니다. <br /> 여기서 핵심 초점은 2D 화면을 전체 깊이 제어가
          가능한 3D 공간으로 변환하는 것입니다. 저는 여기에 계속 초점을 맞출
          것입니다!
        </p>
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
