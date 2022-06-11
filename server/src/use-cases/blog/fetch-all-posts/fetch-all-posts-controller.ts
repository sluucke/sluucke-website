import { Request, Response } from 'express';
import { PrismaBlogRepository } from '../../../repositories/blog/prisma/prisma-blog-repository';
import { FetchAllPostsUseCase } from './fetch-all-posts-use-case';

export class FetchAllPostsController {
  async handle(request: Request, response: Response) {
    const blogRepository = new PrismaBlogRepository();
    const fetchAllPostsUseCase = new FetchAllPostsUseCase(blogRepository);
    const posts = await fetchAllPostsUseCase.execute();
    return response.status(200).json(posts);
  }
}
