import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostsForCategory } from '@/lib/actions/post.actions';
import data from '@/lib/data';
import PageTitle from '@/components/page/page-title';
import Pagination from '@/components/page/pagination';
import Card from '@/components/card/card';

export const metadata: Metadata = {
  title: '레퍼런스',
};

export default async function ReferencePage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const pagesTitle = data.pageTitle.find(
    (page) => page.category === 'reference'
  );
  if (!pagesTitle) notFound();

  const resolvedParams = await searchParams;
  const currentPage = resolvedParams.page ? parseInt(resolvedParams.page) : 1;

  const { posts, totalPages, totalPosts } = await getPostsForCategory({
    category: 'reference',
    limit: 12,
    page: currentPage,
  });

  return (
    <>
      <PageTitle
        title={pagesTitle.title}
        description={pagesTitle.desc}
        totalPosts={totalPosts}
        category={pagesTitle.category}
        subjects={pagesTitle.subjects}
      />

      <div className='card__container mb-2'>
        <Card posts={posts} />
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        baseUrl='/lecture'
      />
    </>
  );
}
