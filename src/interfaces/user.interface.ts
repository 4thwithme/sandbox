import { ObjectId } from 'mongodb';
import {
  USER_PASSWORD,
  USER_USERNAME,
  USER_ROLE,
  USER_CREATED_AT,
  USER_UPDATED_AT,
  USER_ID,
} from '@constants/user.const';
import { RoleEnum } from '@enums//user.unums';

export interface IUser {
  readonly [USER_ID]: ObjectId;
  readonly [USER_USERNAME]: string;
  readonly [USER_PASSWORD]: string;
  readonly [USER_ROLE]: RoleEnum;
  readonly [USER_CREATED_AT]: Date;
  readonly [USER_UPDATED_AT]: Date;
}

export type IUserWithoutPass = Omit<IUser, 'password'>;
