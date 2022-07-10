import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { dbConfig } from '@configs/db-connect.config';
import { configValidationSchema } from '@validators/app-config.validator';

import { RenderViewsModule } from '@modules/render/render.module';
import { UserModule } from '@modules/user/user.module';
import { AuthModule } from '@modules/auth/auth.module';

import { UserModel } from '@models/user.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: configValidationSchema,
    }),
    SequelizeModule.forRoot({
      ...dbConfig,
      models: [UserModel],
    }),
    RenderViewsModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
