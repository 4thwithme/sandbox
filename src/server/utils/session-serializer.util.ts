import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, cb: (err: Error | null, user: any) => void): void {
    cb(null, user);
  }

  deserializeUser(
    data: any,
    done: (err: Error | null, data: string) => void,
  ): void {
    done(null, data);
  }
}
