import { useEffect, useState } from 'react'
import { Post } from '../../../interfaces/Post'
// import PostsService from '../../../services/PostsService'
import BlogPost from './Post/BlogPost'
import { BlogContainer, Container, Text, Title } from './styles'

interface BlogProps {
  posts: Post[]
}

const Blog = ({ posts }: BlogProps) => {
  const [postsToShow, setPostsToShow] = useState<Post[]>(
    posts.sort((a, b) => (a.date > b.date ? -1 : 1)).slice(0, 4)
  )
  return (
    <Container>
      <Text>blog</Text>
      <Title>My personal blog posts</Title>
      <BlogContainer>
        {!postsToShow ||
          (!postsToShow.length && (
            <Text>Hmmmm, I dont have posts for while</Text>
          ))}
        {postsToShow.slice(0, 4).map((item, index) => (
          <BlogPost key={String(index + 1)} {...item} />
        ))}
      </BlogContainer>
    </Container>
  )
}

// export const BLOG_MOCK = [
//   {
//     id: 1,
//     title: "TUTORIAL: How to implement NextJS + Typescript",
//     date: "2020-05-01",
//     short_description:
//       "In this tutorial we ill learn how to implement nextjs + typescript in a simple project.",
//     image: "https://miro.medium.com/max/1400/1*VIZpi4wm4NiBCblnUSkbHQ.png",
//     link: "/blog/posts/1",
//   },
//   {
//     id: 2,
//     title: "TUTORIAL: How to implement NextJS + Typescript",
//     date: "2020-05-01",
//     short_description:
//       "In this tutorial we ill learn how to implement nextjs + typescript in a simple project.",
//     image: "https://miro.medium.com/max/1400/1*VIZpi4wm4NiBCblnUSkbHQ.png",
//     link: "/blog/posts/2",
//   },
//   {
//     id: 3,
//     title: "TUTORIAL: How to implement NextJS + Typescript",
//     date: "2020-05-01",
//     short_description:
//       "In this tutorial we ill learn how to implement nextjs + typescript in a simple project.",
//     image: "https://miro.medium.com/max/1400/1*VIZpi4wm4NiBCblnUSkbHQ.png",
//     link: "/blog/posts/3",
//   },
//   {
//     id: 4,
//     title: "TUTORIAL: How to implement NextJS + Typescript",
//     date: "2020-05-01",
//     short_description:
//       "In this tutorial we ill learn how to implement nextjs + typescript in a simple project.",
//     image: "https://miro.medium.com/max/1400/1*VIZpi4wm4NiBCblnUSkbHQ.png",
//     link: "/blog/posts/4",
//   },
// ];

export default Blog
