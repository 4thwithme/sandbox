import {
  USER_PASSWORD,
  USER_USERNAME,
  USER_ROLE,
  USER_CREATED_AT,
  USER_UPDATED_AT,
  USER_ID,
} from '@constants/user.const';
import { RoleEnum } from '@enums//user.unums';

export interface IUserRequired {
  readonly [USER_USERNAME]: string;
  readonly [USER_PASSWORD]: string;
  readonly [USER_ROLE]: RoleEnum;
}

export interface IUserOptional {
  readonly [USER_ID]?: number;
  readonly [USER_CREATED_AT]?: string;
  readonly [USER_UPDATED_AT]?: string;
}

export interface IUser extends Omit<IUserRequired, 'password'>, IUserOptional {}

export interface IUserWithPass extends IUserRequired, IUserOptional {}
