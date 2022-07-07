import { hash } from 'bcrypt';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { UserModel } from '@models/user.model';
import { USER_ID, USER_PASSWORD, USER_USERNAME } from '@constants/user.const';
import { USER_WAS_NOT_CREATED_ERROR_TEXT } from '@constants/errors.const';
import { userPassSalt } from '@secrets/brypt';

import {
  CreateUserBodyDTO,
  GetUserByIdParamsDTO,
  GetUserByIdPesponseDTO,
  getUserByUsernameQueryDTO,
  getUserByUsernameResponseDTO,
} from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel) private readonly userSchema: typeof UserModel,
  ) {}

  async createUser(params: CreateUserBodyDTO): Promise<void> {
    try {
      const hashedPassword = await hash(params.password, userPassSalt);

      await this.userSchema.createOne({
        ...params,
        [USER_PASSWORD]: hashedPassword,
      });
    } catch (error) {
      throw new BadRequestException(USER_WAS_NOT_CREATED_ERROR_TEXT);
    }
  }

  async getUserByUsername(
    params: getUserByUsernameQueryDTO,
  ): Promise<getUserByUsernameResponseDTO> {
    const user = await this.userSchema.getByUsername({
      [USER_USERNAME]: params.username,
    });

    if (!user) {
      return null;
    }

    return user.toJSON();
  }

  async getUserById(
    params: GetUserByIdParamsDTO,
  ): Promise<GetUserByIdPesponseDTO> {
    const user = await this.userSchema.getById({
      [USER_ID]: params.id,
      options: { attributes: { exclude: [USER_PASSWORD] } },
    });

    if (!user) {
      return null;
    }

    return user.toJSON();
  }
}
