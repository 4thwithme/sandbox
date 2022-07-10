import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

import { IUser } from '@interfaces/user.interface';
import { UserService } from '@modules/user/user.service';
import { USER_ID } from '@constants/user.const';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly usersService: UserService) {
    super();
  }

  serializeUser(user: IUser, done: CallableFunction): void {
    done(null, user.id);
  }

  async deserializeUser(userId: string, done: CallableFunction): Promise<void> {
    const user = await this.usersService.getUserById({
      [USER_ID]: Number(userId),
    });
    done(null, user);
  }
}
