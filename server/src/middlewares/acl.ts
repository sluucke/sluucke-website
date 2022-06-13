import Acl from 'acl';
import { NextFunction, Request, Response } from 'express';
import { PrismaUserRepository } from '../repositories/user/prisma/prisma-user-repository';
import { prisma } from '../services/prisma';

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

const prismaUserRepository = new PrismaUserRepository();

prismaUserRepository.findMany().then((users) => {
  users.forEach((user) => {
    acl.addUserRoles(user.id, user.role, (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
});

const getResource = (url: string) =>
  `${url.split('/').splice(0, 3).join('/')}/`;

const isAllowed = async (role: string, resource: string, action: string) => {
  return acl.isAllowed(role, resource, action);
};

export const checkPermissions = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { user } = request;
  const { method, url } = request;

  const resource = getResource(url); // /api/users/:id
  console.log(resource);
  const action = method.toLowerCase(); // get, post, patch, put, delete
  const allowed = await isAllowed(String(user.id), resource, action);
  if (!allowed) {
    return response.status(403).json({
      error: 'You are not allowed to perform this action.',
    });
  }
  return next();
};
