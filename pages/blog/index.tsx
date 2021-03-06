import { GetServerSideProps } from 'next'
import React from 'react'
import Header from '@/components/Header'
import { Text } from '@/components/reusables/Text'
import { Title } from '@/components/reusables/Title'
import BlogPost from '@/components/Sections/Blog/Post/BlogPost'
import { BlogContainer } from '@/styles/pages/blog'
import { Post } from '@/interfaces/Post'
import { Container } from '@/components/reusables/Container'
import PostsService from '@/services/PostsService'
import Footer from '@/components/Footer'

interface BlogProps {
  posts: Post[]
}

export default function Blog({ posts }: BlogProps) {
  return (
    <>
      <Header title="Blog | David William" />
      <Container as="main">
        <Text>Welcome!</Text>
        <Title>My blog posts</Title>
        <BlogContainer>
          {posts.map((post, index) => (
            <BlogPost key={String(index + 1)} {...post} />
          ))}
        </BlogContainer>
      </Container>
      <Footer />
    </>
  )
}

export const getStaticProps: GetServerSideProps<BlogProps> = async () => {
  return {
    props: {
      posts: (await PostsService.getAllPosts()).sort((a, b) => {
        return a.date > b.date ? -1 : 1
      }),
    },
  }
}
