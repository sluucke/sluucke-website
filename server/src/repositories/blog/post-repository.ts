import { Posts } from '@prisma/client';

export interface PostRepositoryDTO {
  slug: string;
  title: string;
  content: string;
  short_description: string;
  time_to_read: string;
  authorId: number;
}

export interface PostRepository {
  create: (data: PostRepositoryDTO) => Promise<Posts>;
  fetchAllPosts: () => Promise<Posts[]>;
}
