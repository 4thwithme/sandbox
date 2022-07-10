import { NestFactory } from '@nestjs/core';
import session from 'express-session';
import passport from 'passport';

import { config } from '@configs/app-creator.config';
import { ConfigKeys } from '@enums/app-config-keys.enum';
import { AppModule } from '@modules/app/app.module';

const PORT = config.get(ConfigKeys.SERVER_PORT);
const SESSION_SECRET = config.get(ConfigKeys.SESSION_SECRET);
const SESSION_RESAVE = config.get(ConfigKeys.SESSION_RESAVE);
const SESSION_SAVE_UNINIT = config.get(ConfigKeys.SESSION_SAVE_UNINIT);
const COOKIE_SECURE = config.get(ConfigKeys.COOKIE_SECURE);
const COOKIE_HTTP_ONLY = config.get(ConfigKeys.COOKIE_HTTP_ONLY);
const COOKIE_MAX_AGE = config.get(ConfigKeys.COOKIE_MAX_AGE);

(async () => {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: SESSION_SECRET,
      resave: SESSION_RESAVE,
      saveUninitialized: SESSION_SAVE_UNINIT,
      cookie: {
        secure: COOKIE_SECURE,
        maxAge: COOKIE_MAX_AGE,
        httpOnly: COOKIE_HTTP_ONLY,
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(PORT);
})();
