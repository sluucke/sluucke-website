import { Posts } from '@prisma/client';
import { PostRepository } from '../../../repositories/blog/post-repository';

export class FetchAllPostsUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(): Promise<Posts[]> {
    return this.postRepository.fetchAllPosts();
  }
}
