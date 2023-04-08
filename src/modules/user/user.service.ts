import { hash } from 'bcrypt';
import { BadRequestException, Injectable } from '@nestjs/common';

import { userPassSalt } from '@secrets/bcrypt';
import { UserModel } from '@models/user/user.model';
import { USER_PASSWORD } from '@constants/user.const';
import { USER_WAS_NOT_CREATED_ERROR_TEXT } from '@constants/errors.const';

import {
  CreateUserReqDTO,
  GetUserByIdReqDTO,
  CreateUserResponseDTO,
  GetUserByIdPesponseDTO,
  GetUserByUsernameReqDTO,
  GetUserByUsernameResponseDTO,
} from '@modules/user/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userModel: UserModel) {}

  async createUser(params: CreateUserReqDTO): Promise<CreateUserResponseDTO> {
    try {
      const hashedPassword = await hash(
        params.password.toLowerCase(),
        userPassSalt,
      );

      await this.userModel.createOne({
        ...params,
        [USER_PASSWORD]: hashedPassword,
      });
    } catch (error) {
      throw new BadRequestException(USER_WAS_NOT_CREATED_ERROR_TEXT);
    }
  }

  async getUserByUsername(
    params: GetUserByUsernameReqDTO,
  ): Promise<GetUserByUsernameResponseDTO> {
    return await this.userModel.getByUsername(params);
  }

  async getUserById(
    params: GetUserByIdReqDTO,
  ): Promise<GetUserByIdPesponseDTO> {
    return await this.userModel.getById(params);
  }
}
