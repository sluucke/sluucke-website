import { GetStaticProps } from 'next'
import React, { useEffect, useRef } from 'react'
import Header from '@/components/Header'
import { Post } from '@/interfaces/Post'
import PostsService from '@/services/PostsService'
import {
  PostContainer,
  PostInfo,
  PostImage,
  PostTitle,
  PostDescription,
  PostAuthor,
  PostDate,
} from '@/styles/pages/blog/post'
import { MarkdownStyles as ReactMarkdown } from '@/components/reusables/Markdown/MarkdownStyles'
import { MarkdownComponents } from '@/components/reusables/Markdown/MarkdownSyntaxHighlight'
import Footer from '@/components/Footer'

interface PostProps {
  post: Post
}
export default function BlogPost({ post }: PostProps) {
  const postContainer = useRef<HTMLElement>(null)

  useEffect(() => {
    const animate = async () => {
      if (postContainer.current) {
        const scrollReveal = (await import('scrollreveal')).default
        scrollReveal().reveal(postContainer.current, {
          duration: 1000,
          easing: 'ease-in-out',
          delay: 500,
          reset: false,
        })
      }
    }
    animate()
  })
  return (
    <>
      <Header title={`${post.title} | David William`} />
      <PostContainer ref={postContainer}>
        <PostInfo>
          <PostImage src={post.image} />
          <PostTitle>{post.title}</PostTitle>
          <PostDescription>{post.short_description}</PostDescription>
          <PostAuthor>{post.author.name}</PostAuthor>
          <PostDate>
            <>
              {post.date} • {post.time_to_read.text}
            </>
          </PostDate>
        </PostInfo>

        <ReactMarkdown components={MarkdownComponents}>
          {post.content}
        </ReactMarkdown>
      </PostContainer>
      <Footer />
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: (await PostsService.getAllPosts()).map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  const { slug } = params as { slug: string }

  const post = await PostsService.getPost(`${slug}.md`)
  return {
    props: {
      post,
    },
  }
}
