import { Request } from 'express';
import { UserInterface } from '../user';

declare global {
  namespace Express {
    export interface Request {
      user: UserInterface
    }
  }
}
