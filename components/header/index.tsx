import Link from 'next/link';
import { GiMoebiusStar, Gi3dGlasses } from 'react-icons/gi';
import { MdStars } from 'react-icons/md';

export default function Header() {
  return (
    <header className='border-b-2 border-black line'>
      <div className='flex items-center justify-between mx-4'>
        {/* 왼쪽 아이콘 */}
        <div className='w-[180px]'>
          <Link href='/' className='circle'>
            <GiMoebiusStar size='20' />
          </Link>
        </div>

        {/* 가운데 로고 */}
        <div className='md:my-2 my-1 bg-background md:px-4 px-2'>
          <Link
            href={'/'}
            className='flex items-center md:text-8xl sm:text-7xl text-6xl poppins uppercase font-black'
          >
            <span className='mr-[-0.5vw] inline-block'>st</span>
            <MdStars className='animate-color' />
            <span className='ml-[-0.5vw] inline-block'>ry</span>
          </Link>
        </div>

        {/* 오른쪽 유저 버튼 */}
        <div className='w-[180px] flex justify-end'>
          <Link href='/' className='circle'>
            <Gi3dGlasses size='20' />
          </Link>
        </div>
      </div>
    </header>
  );
}
