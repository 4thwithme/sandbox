import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { configValidationSchema } from '../../validators/app-config.validator';
import { dbConfig } from '../../configs/db-connect.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: configValidationSchema,
    }),
    SequelizeModule.forRoot({
      ...dbConfig,
      models: [],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
