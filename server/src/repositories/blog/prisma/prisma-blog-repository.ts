import { Posts } from '@prisma/client';
import { prisma } from '../../../services/prisma';
import { PostRepository, PostRepositoryDTO } from '../post-repository';

export class PrismaBlogRepository implements PostRepository {
  async create(data: PostRepositoryDTO): Promise<Posts> {
    const { title, content, short_description, time_to_read, authorId, slug } =
      data;
    try {
      const post = await prisma.posts.create({
        data: {
          title: title,
          content: content,
          short_description: short_description,
          time_to_read: time_to_read,
          slug,
          author: {
            connect: {
              id: authorId,
            },
          },
          updatedAt: new Date(),
        },
      });
      return post;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  async fetchAllPosts(): Promise<Posts[]> {
    try {
      const posts = await prisma.posts.findMany();
      return posts;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
