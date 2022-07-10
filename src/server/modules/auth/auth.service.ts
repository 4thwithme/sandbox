import { Injectable, ForbiddenException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UserService } from '@modules/user/user.service';
import { USER_USERNAME } from '@constants/user.const';
import {
  WRONG_USERNAME_ERROR_TEXT,
  WRONG_USER_PASSWORD_ERROR_TEXT,
} from '@constants/errors.const';

import {
  AuthUserDTO,
  AuthUserResponseDTO,
  loginPesponseDTO,
  loginRequestDTO,
  logoutRequestDTO,
} from './auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(body: AuthUserDTO): Promise<AuthUserResponseDTO> {
    const user = await this.userService.getUserByUsername({
      [USER_USERNAME]: body.username,
    });

    if (!user) {
      throw new ForbiddenException(WRONG_USERNAME_ERROR_TEXT);
    }

    const { password, ...result } = user;

    const isPassValid = await bcrypt.compare(body.password, password);

    if (!isPassValid) {
      throw new ForbiddenException(WRONG_USER_PASSWORD_ERROR_TEXT);
    }

    return result;
  }

  getSessionUser(params: loginRequestDTO): loginPesponseDTO {
    return params.user;
  }

  closeSession(params: logoutRequestDTO): void {
    params.session.destroy((err) => {
      if (err) {
        console.error(err);
      }
    });
  }
}
