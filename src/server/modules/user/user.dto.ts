import {
  USER_ID,
  USER_PASSWORD,
  USER_ROLE,
  USER_USERNAME,
} from '@constants/user.const';
import { RoleEnum } from '@enums/user.unums';
import { IUser, IUserWithPass } from '@interfaces/user.interface';

export interface CreateUserBodyDTO {
  readonly [USER_USERNAME]: string;
  readonly [USER_PASSWORD]: string;
  readonly [USER_ROLE]: RoleEnum;
}

export interface getUserByUsernameQueryDTO {
  readonly [USER_USERNAME]: string;
}

export type getUserByUsernameResponseDTO = IUserWithPass | null;

export interface GetUserByIdParamsDTO {
  readonly [USER_ID]: number;
}

export type GetUserByIdPesponseDTO = IUser | null;
