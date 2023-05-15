import { Post } from "../../../interfaces/Post";
import BlogPost from "./Post/BlogPost";
import { BlogContainer, Container, Text, Title } from "./styles";

interface BlogProps {
  posts: Post[];
}

const Blog = ({ posts }: BlogProps) => {
  const postsToShow = posts
    .sort((a, b) => (a.date > b.date ? -1 : 1))
    .slice(0, 4);

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
  );
};

export default Blog;
