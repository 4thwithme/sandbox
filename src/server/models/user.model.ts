import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { FindOptions } from 'sequelize/types';

import {
  USER_DB_NAME,
  USER_PASSWORD,
  USER_ROLE,
  USER_USERNAME,
} from '@constants/user.const';
import { IUserOptional, IUserRequired } from '@interfaces/user.interface';
import { RoleEnum } from '@enums//user.unums';

@Table({ tableName: USER_DB_NAME })
export class UserModel extends Model<UserModel, IUserRequired> {
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  [USER_USERNAME]!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  [USER_PASSWORD]!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  [USER_ROLE]!: RoleEnum;

  static async getById({
    id,
    options,
  }: {
    id: IUserOptional['id'];
    options?: Omit<FindOptions<UserModel>, 'where'>;
  }): Promise<UserModel | null> {
    return await this.findByPk(id, options);
  }

  static async getByUsername({
    username,
  }: {
    username: IUserRequired['username'];
  }): Promise<UserModel | null> {
    return await this.findOne({ where: { [USER_USERNAME]: username } });
  }

  static async createOne(params: IUserRequired): Promise<UserModel | null> {
    return await this.create(params);
  }
}
