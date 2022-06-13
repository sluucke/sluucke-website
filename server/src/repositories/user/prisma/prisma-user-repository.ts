import { Posts, Users } from '@prisma/client';
import { prisma } from '../../../services/prisma';
import { UserRepository, UserRepositoryDTO } from '../user-repository';

export class PrismaUserRepository implements UserRepository {
  async create(data: UserRepositoryDTO): Promise<string | Users> {
    try {
      const user = await prisma.users.create({
        data: {
          ...data,
        },
      });
      return user;
    } catch (error: any) {
      return error;
    }
  }
  async findByEmail(
    email: string
  ): Promise<(Users & { posts: Posts[] }) | null> {
    try {
      const user = await prisma.users.findFirst({
        where: {
          email,
        },
        include: {
          posts: true,
        },
      });
      return user;
    } catch (error: any) {
      return error;
    }
  }
  async findMany(options?: any): Promise<Users[]> {
    try {
      const users = await prisma.users.findMany({
        ...options,
      });
      return users;
    } catch (error: any) {
      return error;
    }
  }
}
