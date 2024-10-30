import CardItem from "@/components/CardItem";
import Skip from "@/components/Skip";
import Link from "next/link";
import { GiMoebiusStar, GiGecko } from "react-icons/gi";

export default function Home() {
  return (
    <>
      <Skip />

      <header id="header">
        <div className="flex-1">
          <button className="header__left">
            <GiMoebiusStar size="20" />
          </button>
        </div>
        <div>
          <Link href={"/"} className="header__logo">
            webstoryboy
          </Link>
        </div>
        <div className="flex-1 flex justify-end">
          <button className="header__right">
            <GiGecko size="20" />
          </button>
        </div>

        <nav id="nav" className="header__menu">
          <ul className="flex gap-1">
            <li>
              <Link href="/" className="header__menu-link">
                <span>소개</span>
              </Link>
            </li>
            <li>
              <Link href="/" className="header__menu-link">
                <span>튜토리얼</span>
              </Link>
            </li>
            <li>
              <Link href="/" className="header__menu-link">
                <span>인스퍼레이션</span>
              </Link>
            </li>
            <li>
              <Link href="/" className="header__menu-link">
                <span>피드백</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* header */}

      <main>
        <section id="tutorial" className="mx-auto max-w-7xl px-4 mt-40">
          <div>
            <h2 className="text-4xl font-nexon mb-3">Scroll Effect</h2>
            <p className="text-black300 leading-7">
              500개 이상의 무료 데모, 프로토타입, 애니메이션, 템플릿, 레이아웃,
              UI 스타일 및 실험적인 디자인 컨셉으로 구성된 엄선된 컬렉션입니다.
              <br />
              MIT에서 자유롭게 다운로드하여 사용하세요. 이를 염두에 두고, 오늘은
              손, 웹캠, 웹 브라우저만 사용하여 3D 장면의 요소를 제어하는
              ​​방법을 보여드리겠습니다. <br /> 여기서 핵심 초점은 2D 화면을
              전체 깊이 제어가 가능한 3D 공간으로 변환하는 것입니다. 저는 여기에
              계속 초점을 맞출 것입니다!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-16">
            <CardItem image="post01" />
            <CardItem image="post02" />
            <CardItem image="post03" />
            <CardItem image="post04" />
            <CardItem image="post05" />
            <CardItem image="post06" />
          </div>
        </section>
      </main>
      {/* main */}

      <footer id="footer" className="mx-auto max-w-7xl p-4 mt-10 ">
        <div className="border-t border-black py-10">
          <h6 className="font-gmarket text-xl font-medium">websloper</h6>
          <p className="text-xs mt-1 text-black300">
            &copy; 2025 Webstoryboy. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
