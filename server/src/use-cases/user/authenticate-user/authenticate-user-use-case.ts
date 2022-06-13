import { Users } from '@prisma/client';
import { Request } from 'express';
import { UserInterface } from '../../../@types/user';
import { PasswordProvider } from '../../../providers/password-provider';
import { TokenProvider } from '../../../providers/token-provider';
import { UserRepository } from '../../../repositories/user/user-repository';

interface AuthenticateUserUseCaseDTO {
  email: string;
  password: string;
  request: Request;
}

export class AuthenticateUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private tokenProvider: TokenProvider,
    private passwordProvider: PasswordProvider
  ) {}
  async execute({ email, password, request }: AuthenticateUserUseCaseDTO) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('Invalid credentials');
    }
    const checkPassword = this.passwordProvider.valid(password, user.password);
    if (!checkPassword) {
      throw new Error('Invalid credentials');
    }

    const token = this.tokenProvider.generate({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return token;
  }
}
