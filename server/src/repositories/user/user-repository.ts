import { Posts, Users } from '@prisma/client';

export interface UserRepositoryDTO {
  name: string;
  email: string;
  password: string;
}

export interface UserRepository {
  create: (data: UserRepositoryDTO) => Promise<string | Users>;
  findByEmail: (email: string) => Promise<Users & { posts: Posts[] } | null>;
  findMany: (options?: any) => Promise<Users[]>;
}
