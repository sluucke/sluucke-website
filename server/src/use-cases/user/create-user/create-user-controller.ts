import { Request, Response } from 'express';
import { PrismaUserRepository } from '../../../repositories/user/prisma/prisma-user-repository';
import { CreateUserUseCase } from './create-user-use-case';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;
    const userRepository = new PrismaUserRepository();
    const createUserUseCase = new CreateUserUseCase(userRepository);

    try {
      const user = await createUserUseCase.execute({
        name,
        email,
        password,
      });

      return response.json({ message: 'Created user with success', user });
    } catch (err: any) {
      throw Error(err);
    }
  }
}
