import { Router } from 'express';
import {
  CreatePostController,
  FetchAllPostsController,
} from './use-cases/blog';

const router = Router();

// POST
router.post('/posts', new CreatePostController().handle);
router.get('/posts', new FetchAllPostsController().handle);

export { router };
