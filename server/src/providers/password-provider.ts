import crypto from 'crypto';

interface PasswordRepository {
  hash: (password: string) => string;
  valid: (password: string, passwordToCheck: string) => boolean;
}

export class PasswordProvider implements PasswordRepository {
  constructor() {}
  hash(password: string) {
    const salt = crypto.randomBytes(16).toString('hex');

    const hashedPassword = crypto
      .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
      .toString('hex');

    return `${salt}:${hashedPassword}`;
  }
  valid(password: string, hash: string) {
    const [salt, key] = hash.split(':');
    const hashedPassword = crypto
      .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
      .toString('hex');

    return key == hashedPassword;
  }
}
