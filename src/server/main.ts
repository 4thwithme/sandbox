import { NestFactory } from '@nestjs/core';
import session from 'express-session';
import passport from 'passport';
import { ValidationPipe } from '@nestjs/common';

import { config } from '@configs/app-creator.config';
import { ConfigKeys } from '@enums/app-config-keys.enum';
import { AppModule } from '@modules/app/app.module';

const PORT = config.get(ConfigKeys.SERVER_PORT);
const SESSION_SECRET = config.get(ConfigKeys.SESSION_SECRET);
const SESSION_RESAVE = config.get(ConfigKeys.SESSION_RESAVE);
const SESSION_SAVE_UNINIT = config.get(ConfigKeys.SESSION_SAVE_UNINIT);
const COOKIE_MAX_AGE = config.get(ConfigKeys.COOKIE_MAX_AGE);

(async () => {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.use(
    session({
      secret: SESSION_SECRET,
      resave: SESSION_RESAVE,
      saveUninitialized: SESSION_SAVE_UNINIT,
      cookie: {
        maxAge: COOKIE_MAX_AGE,
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(PORT);
})();
