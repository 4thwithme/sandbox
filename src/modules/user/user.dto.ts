import { ObjectId } from 'mongodb';
import {
  USER_ID,
  USER_PASSWORD,
  USER_ROLE,
  USER_USERNAME,
} from '@constants/user.const';
import { RoleEnum } from '@enums/user.unums';
import { IUserWithoutPass, IUser } from '@interfaces/user.interface';

export interface CreateUserReqDTO {
  readonly [USER_USERNAME]: string;
  readonly [USER_PASSWORD]: string;
  readonly [USER_ROLE]: RoleEnum;
}

export interface GetUserByUsernameReqDTO {
  readonly [USER_USERNAME]: string;
}

export type GetUserByUsernameResponseDTO = IUser | null;

export interface GetUserByIdReqDTO {
  readonly [USER_ID]: ObjectId;
}

export type GetUserByIdPesponseDTO = IUserWithoutPass | null;

export type CreateUserResponseDTO = void;
