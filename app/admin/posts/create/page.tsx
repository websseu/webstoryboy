import { Metadata } from 'next';
import PostForm from '../post-form';

export const metadata: Metadata = {
  title: '글 작성하기',
};

export default function CreatePostPage() {
  return (
    <section className='max-w-6xl mx-auto'>
      <h2 className='text-xl text-center font-nexon mb-8'>글 작성하기</h2>
      <PostForm type='Create' />
    </section>
  );
}
