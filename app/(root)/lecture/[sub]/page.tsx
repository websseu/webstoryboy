import { notFound } from 'next/navigation';
import { getPostsForCategory } from '@/lib/actions/post.actions';
import PageTitle from '@/components/page/page-title';
import data from '@/lib/data';
import React from 'react';
import Card from '@/components/card/card';
import Pagination from '@/components/page/pagination';

export default async function TutorialSubPage({
  params,
  searchParams,
}: {
  params: Promise<{ sub: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const category = 'lecture';
  const subCategory = resolvedParams.sub;
  const currentPage = resolvedSearchParams.page
    ? parseInt(resolvedSearchParams.page)
    : 1;

  const pagesTitle = data.pageTitle.find((page) => page.category === category);
  if (!pagesTitle) notFound();

  const { posts, totalPages, totalPosts } = await getPostsForCategory({
    category,
    subCategory,
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
