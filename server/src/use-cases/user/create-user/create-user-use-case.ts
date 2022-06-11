import { PasswordProvider } from '../../../providers/password-provider';
import {
  UserRepository,
  UserRepositoryDTO,
} from '../../../repositories/user/user-repository';

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(data: UserRepositoryDTO) {
    try {
      const hashPassword = new PasswordProvider().hash(data.password);
      return this.userRepository.create({
        ...data,
        password: hashPassword,
      });
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
