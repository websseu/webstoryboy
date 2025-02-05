'use server';

import { revalidatePath } from 'next/cache';
import { connectToDatabase } from '../db';
import Post, { IPost } from '../db/models/post.model';
import { formatError } from '../utils';
import { PostInputSchema, PostUpdateSchema } from '../validator';
import { IPostInput } from '../types';
import { z } from 'zod';

// 필터 객체의 타입을 정의합니다.
interface PostFilter {
  category: string;
  subCategory?: string;
  isPublished: boolean;
}

// 카테고리에 따른 글 목록 가져오기
export const getPostsForCategory = async ({
  category,
  subCategory,
  page = 1,
  limit = 9,
}: {
  category: string;
  subCategory?: string;
  page: number;
  limit: number;
}) => {
  try {
    await connectToDatabase();

    const filter: PostFilter = {
      category: category,
      isPublished: true,
    };

    if (subCategory) {
      filter.subCategory = subCategory;
    }

    const totalPosts = await Post.countDocuments(filter);
    const skipAmount = (Number(page) - 1) * limit;
    const posts = await Post.find(filter)
      .sort({ createdAt: -1 })
      .skip(skipAmount)
      .limit(limit)
      .lean();

    const formattedPosts = posts.map((post) => ({
      ...post,
      _id: post._id.toString(),
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.createdAt.toISOString(),
    }));

    return {
      posts: formattedPosts,
      totalPages: Math.ceil(totalPosts / limit),
      currentPage: page,
      totalPosts,
    };
  } catch (error) {
    console.error('데이터 가져오기 오류:', error);
    throw new Error('데이터 가져오기 실패');
  }
};

// 해당 ID글 가져오기
export async function getPostById(postId: string) {
  await connectToDatabase();
  const post = await Post.findById(postId);
  return JSON.parse(JSON.stringify(post)) as IPost;
}

// 해당 slug 글 가져오기
export async function getPostBySlug(slug: string) {
  await connectToDatabase();
  const post = await Post.findOne({ slug, isPublished: true });
  if (!post) throw new Error('해당 글을 찾을 수 없습니다.');
  return JSON.parse(JSON.stringify(post)) as IPost;
}

// 모든 글 가져오기
export const getAllPosts = async () => {
  try {
    await connectToDatabase();
    const posts = await Post.find({}).sort({ createdAt: -1 });

    return posts;
  } catch (error) {
    console.error('게시물 가져오기 오류:', error);
    throw new Error('게시물을 불러오지 못했습니다.');
  }
};

// 모든 글 가져오기(페이지네이션)
export async function getAllPostsLimit({
  page = 1,
  limit = 10,
}: {
  page?: number;
  limit?: number;
}) {
  try {
    await connectToDatabase();

    const totalPosts = await Post.countDocuments();
    const skipAmount = (Number(page) - 1) * limit;
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .skip(skipAmount)
      .limit(limit)
      .lean();

    return {
      posts,
      totalPosts,
      totalPages: Math.ceil(totalPosts / limit),
      currentPage: page,
    };
  } catch (error) {
    console.error('데이터 가져오기 오류:', error);
    throw new Error('데이터 가져오기 실패');
  }
}

// 글 지우기
export async function deletePost(id: string) {
  try {
    await connectToDatabase();
    const res = await Post.findByIdAndDelete(id);
    if (!res) throw new Error('글을 찾을 수 없습니다.');
    revalidatePath('/admin/posts');
    return {
      success: true,
      message: '글을 삭제했습니다.',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// 글 만들기
export async function createPost(data: IPostInput) {
  try {
    const post = PostInputSchema.parse(data);
    await connectToDatabase();
    await Post.create(post);
    revalidatePath('/admin/posts');
    return {
      success: true,
      message: '글을 성공적으로 만들었습니다.',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// 글 업데이트 하기
export async function updatePost(data: z.infer<typeof PostUpdateSchema>) {
  try {
    const post = PostUpdateSchema.parse(data);
    await connectToDatabase();
    await Post.findByIdAndUpdate(post._id, post);
    revalidatePath('/admin/posts');
    return {
      success: true,
      message: '글이 성공적으로 업데이트 되었습니다.',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
