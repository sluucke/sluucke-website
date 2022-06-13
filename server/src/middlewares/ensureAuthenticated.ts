import { NextFunction, Request, Response } from 'express';
import { UserInterface } from '../@types/user';
import { TokenProvider } from '../providers/token-provider';

export function ensureAuthenticated() {
  return async (request: Request, response: Response, next: NextFunction) => {
    const authToken = request.headers.authorization;

    if (!authToken) {
      return response.status(401).json({
        type: 'error',
        message: 'You are not logged in',
      });
    }
    const [, token] = authToken.split(' ');
    try {
      const user = new TokenProvider().verify(token) as UserInterface;

      request.user = user;
      return next();
    } catch (error) {
      return response.status(401).json({
        type: 'error',
        message: 'You are not logged in',
      });
    }
  };
}
