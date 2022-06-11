import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

function connect() {
  prisma
    .$connect()
    .then(() => {
      console.log('Connected to Prisma');
    })
    .catch((err: any) => {
      console.log(err);
    });
}

connect();
