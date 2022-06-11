import { Users } from '@prisma/client';

export interface UserRepositoryDTO {
  name: string;
  email: string;
  password: string;
}

export interface UserRepository {
  create: (data: UserRepositoryDTO) => Promise<string | Users>;
}
