import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { USER_PASSWORD, USER_USERNAME } from '@constants/user.const';

import {
  GetUserByIdReqDTO,
  CreateUserResponseDTO,
  GetUserByIdPesponseDTO,
  GetUserByUsernameReqDTO,
  GetUserByUsernameResponseDTO,
  CreateUserReqDTO,
} from '@modules/user/user.dto';

import { User, UserDocument } from './user.schema';

@Injectable()
export class UserModel {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getById({ _id }: GetUserByIdReqDTO): Promise<GetUserByIdPesponseDTO> {
    return await this.userModel
      .findOne({ _id: new ObjectId(_id) }, { [USER_PASSWORD]: 0 })
      .lean();
  }

  async getByUsername({
    username,
  }: GetUserByUsernameReqDTO): Promise<GetUserByUsernameResponseDTO> {
    console.log('qqq', {
      username,
    });
    const qqq = await this.userModel
      .findOne({ [USER_USERNAME]: username })
      .lean()
      .exec();

    console.log('dsfsdfsdf', qqq);
    return qqq;
  }

  async createOne(params: CreateUserReqDTO): Promise<CreateUserResponseDTO> {
    await this.userModel.create(params);
  }
}
