import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';

import { GET_USER_PARAM, USER_ROUTE } from '@constants/user.const';
import { AuthenticatedGuard } from '@guards/authenticated.guard';

import { UserService } from './user.service';
import {
  GetUserByIdParamsDTO,
  getUserByUsernameQueryDTO,
  GetUserByIdPesponseDTO,
  getUserByUsernameResponseDTO,
} from './user.dto';

@Controller(USER_ROUTE)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getUserByUsername(
    @Query() query: getUserByUsernameQueryDTO,
  ): Promise<getUserByUsernameResponseDTO> {
    const res = await this.userService.getUserByUsername(query);
    return res;
  }
  // temp
  @UseGuards(AuthenticatedGuard)
  @Get('/protected')
  getHello(@Request() req: any): any {
    return req.user;
  }

  @Get(GET_USER_PARAM)
  @HttpCode(HttpStatus.OK)
  async getUserById(
    @Param() param: GetUserByIdParamsDTO,
  ): Promise<GetUserByIdPesponseDTO> {
    const res = this.userService.getUserById(param);
    return res;
  }
}
