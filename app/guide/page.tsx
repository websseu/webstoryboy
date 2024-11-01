import React from "react";

export default function GuidePage() {
  return (
    <main className="mx-auto max-w-screen-2xl min-h-screen mt-[47px] px-8">
      <div className="fixed h-full w-[260px] border-r">
        <nav className="p-4">
          <ul className="pt-10">
            <li>
              <h5 className="my-2">시작하기</h5>
              <ul className="left-line pl-5">
                <li className="text-black200 text-sm py-1">설치하기</li>
                <li className="text-black200 text-sm py-1">셋업하기</li>
                <li className="text-black200 text-sm py-1">사용하기</li>
                <li className="text-black200 text-sm py-1">최적화하기</li>
                <li className="text-black200 text-sm py-1">
                  브라우저 최적화하기
                </li>
              </ul>
            </li>
            <li>
              <h5 className="mt-4 my-2">핵심개념</h5>
              <ul className="left-line pl-5">
                <li className="text-black200 text-sm py-1">
                  레이아웃 개념잡기
                </li>
                <li className="text-black200 text-sm py-1">
                  레이아웃 개념잡기
                </li>
                <li className="text-black200 text-sm py-1">
                  레이아웃 개념잡기
                </li>
                <li className="text-black200 text-sm py-1">
                  레이아웃 개념잡기
                </li>
                <li className="text-black200 text-sm py-1">
                  레이아웃 개념잡기
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className="ml-[260px] h-full p-10 pt-14">
        <div className="contents__main relative bg-slate-100">
          <div className="mr-[300px]">
            <h4 className="text-2xl mb-4">소개</h4>
            <p className="text-black300 leading-7">
              안녕하세요! 웹스토리보이입니다. <br />이 강의는 PHP를 사용하여
              개인 블로그를 만들고자 하는 모든 분들을 위한 완벽한 풀스택
              과정입니다. 디자인부터 코딩, 개발까지 모든 과정을 다루며, 여러분이
              꿈꾸던 블로그를 직접 만들어 볼 수 있도록 세심하게 안내해 드립니다.
              초보자부터 숙련자까지 모두 환영하며, 실습을 통해 실제 프로젝트를
              완성하는 경험을 제공할 것입니다. 웹쓰와 함께 나만의 블로그를
              만들어가는 여정을 시작해보세요! 🤗
            </p>
            <h4 className="text-2xl mb-4 mt-16">데이터 저장</h4>
            <p className="text-black300 leading-7 mb-2">
              자바스크립트의 가장 핵심적인 부분은 데이터를 저장하고 이를
              출력하는 방법입니다. 이것이 자바스크립트의 기초이자 핵심입니다.
              사실 모든 프로그래밍 언어의 핵심도 비슷합니다. 자바스크립트는
              데이터를 저장하는 방법이 다양하며, 이 중 하나의 중요한 개념은
              변수입니다.
            </p>
            <p className="text-black300 leading-7 mb-2">
              <strong>
                변수는 데이터를 담아두는 공간으로, 그 값을 나중에 사용하기 위해
                저장합니다.{" "}
              </strong>
              간단히 말해, 자바스크립트에서 변수는 정보를 담아둔 상자라고 볼 수
              있습니다. 이러한 변수 개념은 프로그래밍의 기본이며, 데이터를
              다루는 핵심 도구입니다. 데이터를 저장하고 활용하는 과정을 자세히
              이해하는 것은 프로그래밍을 배우는데 필수적입니다.
            </p>
            <p className="text-black300 leading-7 mb-2">
              자바스크립트에서 변수를 사용하여 데이터를 저장하는 방법을
              이해하면, 이후에 조건문, 반복문, 함수 등을 통해 데이터를 더욱
              효과적으로 다룰 수 있게 됩니다. 이것이 프로그래밍의 기초이며, 더
              나아가서 웹 애플리케이션을 개발하거나 복잡한 프로그램을 작성할
              때에도 핵심적인 역할을 하게 됩니다.
            </p>
          </div>

          <div className="contents__right fixed right-[max(0px,calc(50%-51rem))] top-[96px] w-[260px] h-full bg-gray-300">
            dd
          </div>
        </div>
      </div>
    </main>
  );
}
