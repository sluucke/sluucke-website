import Acl from 'acl';
import { NextFunction, Request, Response } from 'express';
import { UserRepository } from '../repositories/user/user-repository';

const acl = new Acl(new Acl.memoryBackend());

/**     Access Control List Logic
 *
 *          View    Add   Edit    Delete
 * Admin      1      1      1       1
 * Author     1      1      1       0
 * Guest      1      0      0       0
 *
 *
 */

// Role Types
export const USER_ROLE = 'guest';
export const AUTHOR_ROLE = 'author';
export const ADMIN_ROLE = 'admin';

acl.allow([
  {
    roles: [USER_ROLE],
    allows: [
      { resources: '/users/', permissions: ['get', 'post'] },
      { resources: '/users/', permissions: ['get', 'delete'] },
      { resources: '/posts/', permissions: ['get'] },
    ],
  },
  {
    roles: [AUTHOR_ROLE],
    allows: [
      { resources: '/users/', permissions: '*' },
      { resources: '/posts/', permissions: ['get', 'post', 'patch', 'put'] },
    ],
  },
  {
    roles: [ADMIN_ROLE],
    allows: [
      { resources: '/users/', permissions: '*' },
      { resources: '/posts/', permissions: '*' },
    ],
  },
]);

const getResource = (url: string) =>
  `${url.split('/').splice(0, 3).join('/')}/`;

const isAllowed = async (userId: number, resource: string, action: string) => {
  return acl.isAllowed(userId, resource, action);
};

export class AclMiddleware {
  public static isAllowed = isAllowed;

  constructor(private userRepository: UserRepository) {}

  public async init() {
    await this.userRepository.findMany().then((users) => {
      users.forEach((user) => {
        acl.addUserRoles(user.id, user.role, (err) => {
          if (err) {
            console.log(err);
          }
        });
      });
    });
  }
  public checkPermissions = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    await this.init();
    const { user } = request;
    const { method, url } = request;

    const resource = getResource(url); // /api/posts
    const action = method.toLowerCase(); // get, post, patch, put, delete
    const allowed = await isAllowed(user.id, resource, action);
    if (!allowed) {
      response.status(403).json({
        error: 'You are not allowed to perform this action.',
      });
    }
    next();
  };
}
