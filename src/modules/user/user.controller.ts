import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';

import { GET_USER_PARAM, USER_ROUTE } from '@constants/user.const';

import { UserService } from './user.service';
import {
  GetUserByIdReqDTO,
  GetUserByUsernameReqDTO,
  GetUserByIdPesponseDTO,
  GetUserByUsernameResponseDTO,
} from './user.dto';

@Controller(USER_ROUTE)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getUserByUsername(
    @Query() query: GetUserByUsernameReqDTO,
  ): Promise<GetUserByUsernameResponseDTO> {
    const res = await this.userService.getUserByUsername(query);
    return res;
  }

  @Get(GET_USER_PARAM)
  @HttpCode(HttpStatus.OK)
  async getUserById(
    @Param() param: GetUserByIdReqDTO,
  ): Promise<GetUserByIdPesponseDTO> {
    const res = this.userService.getUserById(param);
    return res;
  }
}
