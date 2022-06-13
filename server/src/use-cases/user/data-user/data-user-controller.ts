import { Request, Response } from 'express';
import { TokenProvider } from '../../../providers/token-provider';
import { PrismaUserRepository } from '../../../repositories/user/prisma/prisma-user-repository';
import { DataUserUseCase } from './data-user-use-case';

export class DataUserController {
  async handle(request: Request, response: Response) {
    const userRepository = new PrismaUserRepository();
    const tokenProvider = new TokenProvider();
    const dataUserUseCase = new DataUserUseCase(userRepository, tokenProvider);

    const token = request.headers.authorization;
    if (!token || !token.startsWith('Bearer'))
      return response
        .status(401)
        .json({ error: 'Token not provided or invalid format' });
    try {
      const user = await dataUserUseCase.execute(token.split(' ')[1]);

      if (!user)
        return response
          .status(400)
          .json({ type: 'Error', message: 'User not found' });
      return response.json({
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        posts: user.posts,
      });
    } catch (err: any) {
      throw Error(err);
    }
  }
}
