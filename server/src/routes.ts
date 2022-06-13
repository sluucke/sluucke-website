import { Router } from 'express';
import {
  validationAuthenticateUser,
  validationCreatePost,
} from './lib/validations';
import { AclMiddleware } from './middlewares/acl';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { validate } from './middlewares/validator';
import { PrismaUserRepository } from './repositories/user/prisma/prisma-user-repository';
import {
  CreatePostController,
  FetchAllPostsController,
} from './use-cases/blog';
import {
  AuthenticateUserController,
  CreateUserController,
  DataUserController,
} from './use-cases/user';

const router = Router();

const prismaUserRepository = new PrismaUserRepository();
const acl = new AclMiddleware(prismaUserRepository);

// POSTS
router.post(
  '/posts',
  ensureAuthenticated(),
  acl.checkPermissions,
  validate(validationCreatePost),
  new CreatePostController().handle
);
router.get('/posts', new FetchAllPostsController().handle);

// USER
router.get(
  '/users/@me',
  ensureAuthenticated(),
  new DataUserController().handle
);
router.post('/users/create', new CreateUserController().handle);

// AUTH
router.post(
  '/auth/login',
  validate(validationAuthenticateUser),
  new AuthenticateUserController().handle
);

export { router };
