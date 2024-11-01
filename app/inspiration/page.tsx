import Image from "next/image";
import { LuArrowUpRightFromCircle } from "react-icons/lu";

const inspirationSites = [
  {
    src: "/site/afterparty.studio.jpg",
    title: "afterparty.studio",
    url: "https://afterparty.studio",
  },
  {
    src: "/site/betcfullsix.com.jpg",
    title: "betcfullsix.com",
    url: "https://betcfullsix.com",
  },
  {
    src: "/site/dothingsnyc.com.jpg",
    title: "dothingsnyc.com",
    url: "https://dothingsnyc.com",
  },
  {
    src: "/site/digitalmosaik.com.jpg",
    title: "digitalmosaik.com",
    url: "https://digitalmosaik.com",
  },
  {
    src: "/site/monkeytalkie.com.jpg",
    title: "monkeytalkie.com",
    url: "https://www.monkeytalkie.com/",
  },
  {
    src: "/site/therealhotels.com.jpg",
    title: "therealhotels.com",
    url: "https://therealhotels.com",
  },
  {
    src: "/site/mach.studio.jpg",
    title: "mach.studio",
    url: "https://mach.studio",
  },
];

export default function InspirationPage() {
  return (
    <section id="tutorial" className="mx-auto max-w-7xl px-4 mt-40">
      <div>
        <h2 className="text-4xl font-nexon mb-3">Inspiration</h2>
        <p className="text-black300 leading-7">
          독창적이고 창의적인 아이디어가 가득한 특별한 웹사이트들을
          엄선했습니다. <br />
          디자인과 창의성의 새로운 지평을 여는 이 컬렉션을 통해 신선한 영감을
          얻어보세요. 당신의 상상력에 불을 붙일 특별한 작품들이 기다리고
          있습니다!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-16">
        {inspirationSites.map((site, index) => (
          <div key={index} className="mb-4">
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative">
                <Image
                  src={site.src}
                  alt={site.title}
                  width={500}
                  height={400}
                  className="rounded-sm transition-all duration-500 ease-in-out group-hover:brightness-75 group-hover:rounded-xl"
                />
                <div className="absolute inset-0 flex gap-1 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-black p-2 rounded-full">
                    <LuArrowUpRightFromCircle className="size-4 text-white" />
                  </span>
                </div>
              </div>
              <p className="text-center mt-2 text-black300 text-sm pl-1 group-hover:text-black transition-all duration-300">
                {site.title}
                <span className="text-[8px] pl-1 relative -top-1">6</span>
              </p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
