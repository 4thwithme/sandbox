import { createProfiguration } from '@golevelup/profiguration';

import { ConfigKeys } from '@enums/app-config-keys.enum';
import { DBConfigKeys } from '@enums/db-config-keys.enum';
import { IServerConfig } from '@interfaces/app-config.interface';
import {
  DEFAULT_SERVER_PORT,
  DEFAULT_GLOBAL_PREFIX,
  DEFAULT_DB_USERNAME,
  DEFAULT_DB_PASSWORD,
  DEFAULT_DB_CLUSTER,
  DEFAULT_DB_DATABASE,
  DEFAULT_SWAGGER_ROUTE,
  DEFAULT_SESSION_SECRET,
  DEFAULT_SESSION_RESAVE,
  DEFAULT_SESSION_SAVE_UNINIT,
  DEFAULT_COOKIE_MAX_AGE,
  DEFAULT_USER_PASS_SALT,
} from '@constants/default-app-config.const';
import { Environment } from '@enums/environment.enum';

export const config = createProfiguration<IServerConfig>(
  {
    [ConfigKeys.SERVER_PORT]: {
      format: Number,
      default: DEFAULT_SERVER_PORT,
      env: ConfigKeys.SERVER_PORT,
    },
    [ConfigKeys.GLOBAL_PREFIX]: {
      format: String,
      default: DEFAULT_GLOBAL_PREFIX,
      env: ConfigKeys.GLOBAL_PREFIX,
    },
    [ConfigKeys.NODE_ENV]: {
      format: String,
      default: Environment.development,
      env: ConfigKeys.NODE_ENV,
    },
    [ConfigKeys.SWAGGER_ROUTE]: {
      format: String,
      default: DEFAULT_SWAGGER_ROUTE,
      env: ConfigKeys.SWAGGER_ROUTE,
    },

    //session
    [ConfigKeys.SESSION_SECRET]: {
      format: String,
      default: DEFAULT_SESSION_SECRET,
      env: ConfigKeys.SESSION_SECRET,
    },
    [ConfigKeys.SESSION_SAVE_UNINIT]: {
      format: Boolean,
      default: DEFAULT_SESSION_SAVE_UNINIT,
      env: ConfigKeys.SESSION_SAVE_UNINIT,
    },
    [ConfigKeys.SESSION_RESAVE]: {
      format: Boolean,
      default: DEFAULT_SESSION_RESAVE,
      env: ConfigKeys.SESSION_RESAVE,
    },

    // cookie
    [ConfigKeys.COOKIE_MAX_AGE]: {
      format: Number,
      default: DEFAULT_COOKIE_MAX_AGE,
      env: ConfigKeys.COOKIE_MAX_AGE,
    },

    // DB
    [DBConfigKeys.DB_USERNAME]: {
      default: DEFAULT_DB_USERNAME,
      format: String,
      env: DBConfigKeys.DB_USERNAME,
    },
    [DBConfigKeys.DB_PASSWORD]: {
      default: DEFAULT_DB_PASSWORD,
      format: String,
      env: DBConfigKeys.DB_PASSWORD,
    },
    [DBConfigKeys.DB_DATABASE]: {
      default: DEFAULT_DB_DATABASE,
      format: String,
      env: DBConfigKeys.DB_DATABASE,
    },
    [DBConfigKeys.DB_CLUSTER]: {
      default: DEFAULT_DB_CLUSTER,
      format: String,
      env: DBConfigKeys.DB_CLUSTER,
    },

    // SALT
    [ConfigKeys.USER_PASS_SALT]: {
      format: String,
      default: DEFAULT_USER_PASS_SALT,
      env: ConfigKeys.USER_PASS_SALT,
    },
  },
  {
    strict: true,
    verbose: true,
    configureEnv: () => ({
      files: '.env',
    }),
  },
);
