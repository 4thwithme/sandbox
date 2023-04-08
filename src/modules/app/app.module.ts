import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { configValidationSchema } from '@validators/app-config.validator';

import { RenderViewsModule } from '@modules/render/render.module';
import { UserModule } from '@modules/user/user.module';
import { AuthModule } from '@modules/auth/auth.module';

import { mdbConfig, mdbUrl } from '@configs/mdb-url.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: configValidationSchema,
    }),
    MongooseModule.forRoot(mdbUrl, mdbConfig),
    RenderViewsModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
