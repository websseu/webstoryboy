import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPostById } from '@/lib/actions/post.actions';
import PostForm from '../post-form';

export const metadata: Metadata = {
  title: '글 수정하기',
};

type UpdatePostProps = {
  params: Promise<{
    id: string;
  }>;
};

const UpdatePost = async (props: UpdatePostProps) => {
  const params = await props.params;

  const { id } = params;

  const post = await getPostById(id);
  if (!post) notFound();

  return (
    <main className='max-w-6xl mx-auto p-4'>
      <h2 className='text-xl text-center font-nexon mb-1'>글 수정하기</h2>
      <div className='flex mb-10 font-nanum text-muted-foreground text-xs justify-center hover:underline hover:underline-offset-4'>
        <Link href={`/admin/posts/${post._id}`}>{post._id}</Link>
      </div>

      <PostForm type='Update' post={post} postId={post._id} />
    </main>
  );
};

export default UpdatePost;
