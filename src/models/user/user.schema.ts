import { Document, Schema as Sch } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import {
  USER_CREATED_AT,
  USER_DB_NAME,
  USER_PASSWORD,
  USER_ROLE,
  USER_UPDATED_AT,
  USER_USERNAME,
} from '@constants/user.const';
import { RoleEnum } from '@enums/user.unums';

export type UserDocument = User & Document;

@Schema({
  timestamps: true,
  autoCreate: true,
  autoIndex: true,
  collection: USER_DB_NAME,
})
export class User {
  @Prop({ required: true, type: String, unique: true })
  [USER_USERNAME]!: string;

  @Prop({ required: true, type: String })
  [USER_PASSWORD]!: string;

  @Prop({
    required: true,
    type: String,
    enum: RoleEnum,
    default: RoleEnum.USER,
  })
  [USER_ROLE]!: RoleEnum;

  @Prop({ type: Sch.Types.Date, default: Date.now })
  [USER_CREATED_AT]!: Date;

  @Prop({ type: Sch.Types.Date, default: Date.now })
  [USER_UPDATED_AT]!: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.index({ [USER_USERNAME]: 1 });
