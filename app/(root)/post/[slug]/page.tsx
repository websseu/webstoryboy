import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { getPostBySlug } from '@/lib/actions/post.actions';

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);
  console.log(post);
  if (!post) {
    return { title: '해당 글을 찾을 수 없습니다.' };
  }
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);

  let DynamicComponent;
  try {
    DynamicComponent = dynamic(
      () =>
        import(
          `@/blog/${post.category}/${post.subCategory}/${post.components}.tsx`
        )
    );
  } catch (error) {
    console.error('컴포넌트 로딩 오류:', error);
    DynamicComponent = dynamic(
      () => import(`@/blog/tutorial/uiux-design/${post.components}.tsx`)
    );
  }

  return (
    <section className='post__details'>
      <div className='p-10 rounded-lg bg-[#705df2]'>
        <div>
          <span className='text-white text-3xl mb-3 inline-block'>01</span>
          <h2 className='text-2xl text-white font-light'>{post.title}</h2>
        </div>
        <div>
          <span></span>
        </div>
      </div>
      <DynamicComponent />
      {/* 이전글 다음글 */}
      <div className='flex items-center justify-between mt-10'>
        <Link href={'/'} className='border p-2 inline-block rounded-md px-4'>
          <span>이전글</span>
          <br />
          <span className='text-black300'>
            웹디자인개발기능사 레이아웃 유형(C-1)
          </span>
        </Link>

        <Link href={'/'} className='border p-2 inline-block rounded-md px-4'>
          <span>다음글</span>
          <br />
          웹디자인개발기능사 레이아웃 유형(C-3)
        </Link>
      </div>
      {/* 관련 글 보기 */}
      {/* 댓글 */}
      <div className='grid w-full gap-1.5 mt-10'>
        <h4>댓글 남기기</h4>
        <Textarea placeholder='Type your message here.' />
        <p className='text-sm text-muted-foreground'>
          Your message will be copied to the support team.
        </p>
        <Button>메세지 남기기</Button>
      </div>
    </section>
  );
}
