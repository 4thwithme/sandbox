import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthUserDTO, AuthUserResponseDTO } from './auth.dto';
import { USER_USERNAME } from '@constants/user.const';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: USER_USERNAME });
  }

  async validate(
    username: AuthUserDTO['username'],
    password: AuthUserDTO['password'],
  ): Promise<AuthUserResponseDTO> {
    const user = await this.authService.validateUser({ username, password });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
