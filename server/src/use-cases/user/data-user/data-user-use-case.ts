import { TokenProvider } from '../../../providers/token-provider';
import { UserRepository } from '../../../repositories/user/user-repository';

export class DataUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private tokenProvider: TokenProvider
  ) {}

  async execute(token: string) {
    const decoded = this.tokenProvider.verify(token) as {
      id: number;
      email: string;
    };

    const user = await this.userRepository.findByEmail(decoded.email);

    return user;
  }
}
