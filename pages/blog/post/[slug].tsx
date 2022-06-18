import { GetStaticProps } from 'next'
import React from 'react'
import Header from '../../../components/Header'
import { Post } from '../../../interfaces/Post'
import PostsService from '../../../services/PostsService'
import {
  PostContainer,
  PostInfo,
  PostImage,
  PostTitle,
  PostDescription,
  PostAuthor,
  PostDate,
} from './styles'
import { MarkdownStyles as ReactMarkdown } from '../../../components/reusables/Markdown/MarkdownStyles'
import { MarkdownComponents } from '../../../components/reusables/Markdown/MarkdownSyntaxHighlight'

interface PostProps {
  post: Post
}
export default function BlogPost({ post }: PostProps) {
  return (
    <>
      <Header />
      <PostContainer>
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
