import jwt from 'jsonwebtoken';

interface TokenProviderDTO {
  generate: (data: any) => string;
  verify: (hash: string) => any;
}

export class TokenProvider implements TokenProviderDTO {
  constructor(private APP_SECRET: string = process.env.APP_SECRET!) {}
  generate(data: any) {
    const token = jwt.sign(data, this.APP_SECRET, {
      expiresIn: '1d',
    });

    return token;
  }
  verify(hash: string) {
    const decoded = jwt.verify(hash, this.APP_SECRET);

    return decoded;
  }
}
