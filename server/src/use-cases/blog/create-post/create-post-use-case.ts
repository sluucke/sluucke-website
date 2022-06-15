import {
  PostRepository,
  PostRepositoryDTO,
} from '../../../repositories/blog/post-repository';
import { Posts } from '@prisma/client';

export class CreatePostUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute({
    title,
    content,
    short_description,
    time_to_read,
    authorId,
    image,
    slug
  }: PostRepositoryDTO): Promise<Posts> {
    const post = await this.postRepository.create({
      title,
      content,
      short_description,
      slug,
      image,
      time_to_read,
      authorId,
    });
    return post;
  }
}
