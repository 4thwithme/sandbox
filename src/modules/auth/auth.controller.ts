import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

import {
  AUTH_LOGIN_ROUTE,
  AUTH_LOGOUT_ROUTE,
  AUTH_ROUTE,
} from '@constants/auth.const';
import { UserService } from '@modules/user/user.service';
import { LocalAuthGuard } from '@guards/local.auth.guard';
import { AdminGuard } from '@guards/admin.guard';

import { AuthService } from './auth.service';
import { CreateUserReqDTO } from '../user/user.dto';
import {
  loginPesponseDTO,
  loginRequestDTO,
  logoutRequestDTO,
  logoutResponseDTO,
  SignUpPesponseDTO,
} from './auth.dto';

@Controller(AUTH_ROUTE)
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async signUp(@Body() body: CreateUserReqDTO): Promise<SignUpPesponseDTO> {
    await this.userService.createUser(body);
    return HttpStatus.CREATED;
  }

  @UseGuards(LocalAuthGuard, AdminGuard)
  @HttpCode(HttpStatus.OK)
  @Post(AUTH_LOGIN_ROUTE)
  login(@Request() req: loginRequestDTO): loginPesponseDTO {
    const res = this.authService.getSessionUser(req);
    return res;
  }

  @Post(AUTH_LOGOUT_ROUTE)
  @HttpCode(HttpStatus.OK)
  logout(@Request() req: logoutRequestDTO): logoutResponseDTO {
    this.authService.closeSession(req);
    return HttpStatus.OK;
  }
}
