import Image from "next/image";
import Link from "next/link";
import {
  LuHeart,
  LuEye,
  LuFileSpreadsheet,
  LuPresentation,
} from "react-icons/lu";

interface CardItemProps {
  image: string;
}

export default function CardItem({ image }: CardItemProps) {
  return (
    <div className="mb-10">
      <Link href={"/"} className="group">
        <div className="relative block">
          <Image
            src={`/images/${image}.jpg`}
            alt="이미지"
            width={500}
            height={400}
            className="transition-all duration-500 ease-in-out group-hover:brightness-75 group-hover:rounded-xl"
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
        <div className="py-3 ">
          <div className="flex gap-1 mt-1 mb-2">
            <span className="bg-slate-400 rounded-sm text-xs px-2 text-white">
              CSS
            </span>
            <span className="bg-slate-500 rounded-sm text-xs px-2 text-white">
              3D
            </span>
            <span className="bg-slate-500 rounded-sm text-xs px-2 text-white">
              GSAP
            </span>
            <span className="bg-slate-500 rounded-sm text-xs px-2 text-white">
              Three.js
            </span>
            <span className="bg-red-500 rounded-sm text-xs text-white px-1 flex items-center justify-center">
              <LuHeart /> <span className="text-[10px] pl-1">1</span>
            </span>
            <span className="bg-red-500 rounded-sm text-xs text-white px-1 flex items-center justify-center">
              <LuEye /> <span className="text-[10px] pl-1">100</span>
            </span>
          </div>
          <h3 className="text-xl leading-8 text-black200">
            고정된 요소에 대한 재미있는 컨텍스트 인식 애니메이션 탐색
          </h3>
          <div className="mt-0">
            <span className="text-xs text-gray-500">
              6일 전에 <em className="text-gray-800">웹쓰</em>가 작성함
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
