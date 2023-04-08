import { Session } from 'express-session';
import { HttpStatus } from '@nestjs/common';

import { USER_PASSWORD, USER_USERNAME } from '@constants/user.const';
import { IUser, IUserWithoutPass } from '@interfaces/user.interface';

export interface AuthUserDTO {
  readonly [USER_USERNAME]: string;
  readonly [USER_PASSWORD]: string;
}

export type AuthUserResponseDTO = IUserWithoutPass;

export type SignUpPesponseDTO = HttpStatus.CREATED;

export interface loginRequestDTO {
  readonly user: IUser;
}

export type loginPesponseDTO = getSessionUserDTO;
export type getSessionUserDTO = IUser;

export interface logoutRequestDTO {
  readonly session: Session;
}

export type logoutResponseDTO = HttpStatus.OK;
