import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import {
  ACCESS_TOKEN,
  ACCESS_TOKEN_EXPIRATION_TIME_MS,
  REFRESH_TOKEN,
  REFRESH_TOKEN_EXPIRATION_TIME_MS,
} from '../../constants';

export const HASH_ROUNDS = 8;

@Injectable()
export class SecurityService {
  constructor() {}

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, HASH_ROUNDS);
  }

  async comparePasswordHash(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  generateAccessToken(data: any): string {
    return jwt.sign(data, ACCESS_TOKEN, {
      expiresIn: ACCESS_TOKEN_EXPIRATION_TIME_MS,
    });
  }

  decodeAccessToken(token: string): any {
    return jwt.verify(token, ACCESS_TOKEN);
  }

  generateRefreshToken(data: any): string {
    return jwt.sign(data, REFRESH_TOKEN, {
      expiresIn: REFRESH_TOKEN_EXPIRATION_TIME_MS,
    });
  }

  decodeRefreshToken(token: string): any {
    return jwt.verify(token, REFRESH_TOKEN);
  }
}
