import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import BlogPost from './Post/BlogPost';
import { BlogContainer, Container, Text, Title } from './styles';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await api.get('/posts').then((response) => {
        setPosts(response.data);
      });
    };
    fetchData();
    console.log(posts);
  }, []);
  return (
    <Container>
      <Text>blog</Text>
      <Title>My personal blog posts</Title>
      <BlogContainer>
        {BLOG_MOCK.map((item) => (
          <BlogPost key={item.id} {...item} />
        ))}
      </BlogContainer>
    </Container>
  );
};

export const BLOG_MOCK = [
  {
    id: 1,
    title: 'TUTORIAL: How to implement NextJS + Typescript',
    date: '2020-05-01',
    short_description:
      'In this tutorial we ill learn how to implement nextjs + typescript in a simple project.',
    image: 'https://miro.medium.com/max/1400/1*VIZpi4wm4NiBCblnUSkbHQ.png',
    link: '/blog/posts/1',
  },
  {
    id: 2,
    title: 'TUTORIAL: How to implement NextJS + Typescript',
    date: '2020-05-01',
    short_description:
      'In this tutorial we ill learn how to implement nextjs + typescript in a simple project.',
    image: 'https://miro.medium.com/max/1400/1*VIZpi4wm4NiBCblnUSkbHQ.png',
    link: '/blog/posts/2',
  },
  {
    id: 3,
    title: 'TUTORIAL: How to implement NextJS + Typescript',
    date: '2020-05-01',
    short_description:
      'In this tutorial we ill learn how to implement nextjs + typescript in a simple project.',
    image: 'https://miro.medium.com/max/1400/1*VIZpi4wm4NiBCblnUSkbHQ.png',
    link: '/blog/posts/3',
  },
  {
    id: 4,
    title: 'TUTORIAL: How to implement NextJS + Typescript',
    date: '2020-05-01',
    short_description:
      'In this tutorial we ill learn how to implement nextjs + typescript in a simple project.',
    image: 'https://miro.medium.com/max/1400/1*VIZpi4wm4NiBCblnUSkbHQ.png',
    link: '/blog/posts/4',
  },
];

export default Blog;
