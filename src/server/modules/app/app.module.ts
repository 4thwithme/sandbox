import next from 'next';
import { RenderModule } from 'nest-next';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { dbConfig } from '@configs/db-connect.config';
import { configValidationSchema } from '@validators/app-config.validator';

import { UserModule } from '@modules/user/user.module';
import { AuthModule } from '@modules/auth/auth.module';

import { UserModel } from '@models/user.model';
import { AppController } from './app.controller';
// import { resolve } from 'path';

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
    RenderModule.forRootAsync(
      next({
        dev: process.env.NODE_ENV !== 'production',
        dir: 'src/client',
      }),
      { viewsDir: '' },
    ),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
