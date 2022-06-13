import { Request, Response } from 'express';
import { PasswordProvider } from '../../../providers/password-provider';
import { TokenProvider } from '../../../providers/token-provider';
import { PrismaUserRepository } from '../../../repositories/user/prisma/prisma-user-repository';
import { AuthenticateUserUseCase } from './authenticate-user-use-case';

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    const userRepository = new PrismaUserRepository();
    const tokenProvider = new TokenProvider();
    const passwordProvider = new PasswordProvider();
    const authenticateUserUseCase = new AuthenticateUserUseCase(
      userRepository,
      tokenProvider,
      passwordProvider
    );

    try {
      const token = await authenticateUserUseCase.execute({
        email,
        password,
        request,
      });

      return response.json(token);
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
