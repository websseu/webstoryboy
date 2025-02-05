'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { createPost, updatePost } from '@/lib/actions/post.actions';
import { IPost } from '@/lib/db/models/post.model';
import { PostInputSchema, PostUpdateSchema } from '@/lib/validator';
import { Checkbox } from '@/components/ui/checkbox';
import { IPostInput } from '@/lib/types';
import { MdDesignServices } from 'react-icons/md';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useState } from 'react';

// slug already exists

const postDefaultValues: IPostInput =
  process.env.NODE_ENV === 'development'
    ? {
        title: '',
        slug: '',
        category: '',
        subCategory: '',
        components: '',
        images: '',
        youtubeId: '',
        tags: [],
        description: '',
        isPublished: true,
        author: '',
        numReviews: 0,
        numViews: 0,
        numLikes: 0,
        reviews: [],
      }
    : {
        title: '',
        slug: '',
        category: '',
        subCategory: '',
        components: '',
        images: '',
        youtubeId: '',
        tags: [],
        description: '',
        isPublished: true,
        author: '',
        numReviews: 0,
        numViews: 0,
        numLikes: 0,
        reviews: [],
      };

// 폼 초기값 설정
const PostForm = ({
  type,
  post,
  postId,
}: {
  type: 'Create' | 'Update';
  post?: IPost;
  postId?: string;
}) => {
  const router = useRouter();
  const { toast } = useToast();

  // 폼 제출 함수
  const form = useForm<IPostInput>({
    resolver:
      type === 'Update'
        ? zodResolver(PostUpdateSchema)
        : zodResolver(PostInputSchema),
    defaultValues: post && type === 'Update' ? post : postDefaultValues,
  });

  async function onSubmit(values: IPostInput) {
    // 글 작성하기
    if (type === 'Create') {
      const res = await createPost(values);
      if (!res.success) {
        toast({
          variant: 'destructive',
          description: res.message,
        });
      } else {
        toast({
          title: '글 발행 성공 😘',
          variant: 'destructive',
          description: res.message,
        });
        router.push(`/admin/posts`);
      }
    }
    // 글 업데이트
    if (type === 'Update') {
      if (!postId) {
        router.push(`/admin/posts`);
        return;
      }
      const res = await updatePost({ ...values, _id: postId });
      if (!res.success) {
        toast({
          variant: 'destructive',
          description: res.message,
        });
      } else {
        router.push(`/admin/posts`);
      }
    }
  }

  interface TagInputProps {
    tags: string[];
    onChange: (tags: string[]) => void;
  }

  // TagInput 컴포넌트
  const TagInput: React.FC<TagInputProps> = ({ tags, onChange }) => {
    const [input, setInput] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      setInput(e.target.value);

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        addTag();
      }
    };

    const addTag = () => {
      const newTag = input.trim();
      if (newTag && !tags.includes(newTag) && newTag.length > 1) {
        onChange([...tags, newTag]);
        setInput('');
      } else {
        setInput('');
      }
    };

    const removeTag = (tagToRemove: string) => {
      onChange(tags.filter((tag) => tag !== tagToRemove));
    };

    return (
      <div>
        <div className='flex flex-wrap gap-2 mb-2'>
          {tags.map((tag) => (
            <span
              key={tag}
              className='bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm'
            >
              {tag}
              <button
                type='button'
                onClick={() => removeTag(tag)}
                className='ml-1 text-blue-600 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full p-1'
                aria-label={`${tag} 태그 삭제`}
              >
                &times;
              </button>
            </span>
          ))}
        </div>
        <Input
          type='text'
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder='태그를 입력하고 Enter를 누르세요'
        />
      </div>
    );
  };

  return (
    <Form {...form}>
      <form
        method='post'
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8 font-nanum'
      >
        <div className='flex flex-col gap-5 md:flex-row'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-bold'>타이틀 *</FormLabel>
                <FormControl>
                  <Input placeholder='제목을 적어주세요!' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='slug'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-bold'>페이지 주소 *</FormLabel>

                <FormControl>
                  <div className='relative'>
                    <Input placeholder='슬러그를 적어주세요!' {...field} />
                  </div>
                </FormControl>

                <FormDescription className='flex items-center gap-1'>
                  <MdDesignServices /> 슬러그(slug)는 글 페이지의 영문
                  주소입니다. 중복 안됩니다. 주의하세요!
                </FormDescription>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='flex flex-col gap-5 md:flex-row'>
          <FormField
            control={form.control}
            name='category'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-bold'>카테고리 *</FormLabel>
                <FormControl>
                  <Input placeholder='카테고리를 선텍하세요!' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='subCategory'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-bold'>서브 카테고리 *</FormLabel>
                <FormControl>
                  <Input placeholder='서브 카테고리를 선택하세요!' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='flex flex-col gap-5 md:flex-row'>
          <FormField
            control={form.control}
            name='images'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-bold'>이미지 *</FormLabel>
                <FormControl>
                  <Input placeholder='이미지 주소를 적어주세요!' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* 태그 */}
        <div className='flex flex-col gap-5 md:flex-row'>
          <FormField
            control={form.control}
            name='tags'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>태그</FormLabel>
                <FormControl>
                  <TagInput
                    tags={field.value || []}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='flex flex-col gap-5 md:flex-row'>
          <FormField
            control={form.control}
            name='components'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-bold'>컴퍼넌트 *</FormLabel>
                <FormControl>
                  <Input
                    placeholder='글 내용 컴퍼넌트를 적어주세요!'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='youtubeId'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-bold'>유튜브 ID</FormLabel>
                <FormControl>
                  <Input placeholder='유튜브 ID를 적어주세요!' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='author'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-bold'>저자 *</FormLabel>
                <FormControl>
                  <Input placeholder='글쓴이를 적어주세요!' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div>
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-bold'>설명 *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='설명이 필요하다면 적어주세요!'
                    className='resize-none'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name='isPublished'
            render={({ field }) => (
              <FormItem className='flex gap-2 justify-center items-center'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className='h-5 w-5 mt-[4px]'
                  />
                </FormControl>
                <FormLabel>체크하면 글은 공개됩니다.</FormLabel>
              </FormItem>
            )}
          />
        </div>
        <div>
          <Button
            type='submit'
            size='lg'
            disabled={form.formState.isSubmitting}
            className='button col-span-2 w-full font-bold'
          >
            {form.formState.isSubmitting ? '전송중...' : `${type} Post `}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PostForm;
