import { Router } from 'express';
import {
  validationAuthenticateUser,
  validationCreatePost,
} from './lib/validations';
import { checkPermissions } from './middlewares/acl';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { validate } from './middlewares/validator';
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

// POSTS
router.post(
  '/posts',
  ensureAuthenticated(),
  checkPermissions,
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
