import { prisma } from '../../../services/prisma';
import { UserRepository, UserRepositoryDTO } from '../user-repository';

export class PrismaUserRepository implements UserRepository {
  async create(data: UserRepositoryDTO) {
    try {
      await prisma.users.create({
        data: {
          ...data,
        },
      });
      return 'Created with success';
    } catch (error: any) {
      return error;
    }
  }
}
