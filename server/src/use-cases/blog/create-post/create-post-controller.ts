import { Request, Response } from "express";
import { PrismaBlogRepository } from "../../../repositories/blog/prisma/prisma-blog-repository";
import { CreatePostUseCase } from "./create-post-use-case";

interface CreatePostUseCaseRequest extends Request {
  body: {
    slug: string;
    title: string;
    content: string;
    short_description: string;
    time_to_read: string;
    authorId: number;
    image: string;
  };
}

export class CreatePostController {
  async handle(request: CreatePostUseCaseRequest, response: Response) {
    const { slug, title, content, short_description, image, time_to_read } =
      request.body;
    const blogRepository = new PrismaBlogRepository();
    const createPostUseCase = new CreatePostUseCase(blogRepository);
    const authorId = request.user.id;
    try {
      const post = await createPostUseCase.execute({
        slug,
        title,
        content,
        image,
        short_description,
        time_to_read,
        authorId,
      });
      return response.status(201).json(post);
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
