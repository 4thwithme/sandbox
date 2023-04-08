import { Injectable, ForbiddenException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UserService } from '@modules/user/user.service';
import {
  WRONG_USERNAME_ERR_TEXT,
  WRONG_USER_PASS_ERR_TEXT,
} from '@constants/errors.const';

import {
  AuthUserDTO,
  AuthUserResponseDTO,
  getSessionUserDTO,
  loginRequestDTO,
  logoutRequestDTO,
} from './auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(body: AuthUserDTO): Promise<AuthUserResponseDTO> {
    const user = await this.userService.getUserByUsername(body);

    console.log('!!user', !!user);

    if (!user) throw new ForbiddenException(WRONG_USERNAME_ERR_TEXT);

    const { password, ...result } = user;
    const isPassValid = await bcrypt.compare(body.password, password);
    console.log('body.password', body.password, password);

    if (!isPassValid) throw new ForbiddenException(WRONG_USER_PASS_ERR_TEXT);

    return result;
  }

  getSessionUser(params: loginRequestDTO): getSessionUserDTO {
    return params.user;
  }

  closeSession(params: logoutRequestDTO): void {
    params.session.destroy((err: Error) => {
      if (err) {
        console.error(err);
      }
    });
  }
}
