import { createProfiguration } from '@golevelup/profiguration';

import { ConfigKeys } from '@enums/app-config-keys.enum';
import { DBConfigKeys } from '@enums/db-config-keys.enum';
import { IServerConfig } from '@interfaces/app-config.interface';
import {
  DEFAULT_SERVER_PORT,
  DEFAULT_GLOBAL_PREFIX,
  DEFAULT_DB_DIALECT,
  DEFAULT_DB_HOST,
  DEFAULT_DB_PORT,
  DEFAULT_DB_USERNAME,
  DEFAULT_DB_PASSWORD,
  DEFAULT_DB_DATABASE,
  DEFAULT_DB_AUTO_LOAD_MODELS,
  DEFAULT_SWAGGER_ROUTE,
  DEFAULT_DB_SYNCHRONIZE_MODELS,
  DEFAULT_SESSION_SECRET,
  DEFAULT_SESSION_RESAVE,
  DEFAULT_SESSION_SAVE_UNINIT,
  DEFAULT_COOKIE_SECURE,
  DEFAULT_COOKIE_HTTP_ONLY,
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
    [ConfigKeys.COOKIE_SECURE]: {
      format: Boolean,
      default: DEFAULT_COOKIE_SECURE,
      env: ConfigKeys.COOKIE_SECURE,
    },
    [ConfigKeys.COOKIE_HTTP_ONLY]: {
      format: Boolean,
      default: DEFAULT_COOKIE_HTTP_ONLY,
      env: ConfigKeys.COOKIE_HTTP_ONLY,
    },
    [ConfigKeys.COOKIE_MAX_AGE]: {
      format: Number,
      default: DEFAULT_COOKIE_MAX_AGE,
      env: ConfigKeys.COOKIE_MAX_AGE,
    },

    // DB
    [DBConfigKeys.DB_DIALECT]: {
      default: DEFAULT_DB_DIALECT,
      format: String,
      env: DBConfigKeys.DB_DIALECT,
    },
    [DBConfigKeys.DB_HOST]: {
      default: DEFAULT_DB_HOST,
      format: String,
      env: DBConfigKeys.DB_HOST,
    },
    [DBConfigKeys.DB_PORT]: {
      default: DEFAULT_DB_PORT,
      format: Number,
      env: DBConfigKeys.DB_PORT,
    },
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
    [DBConfigKeys.DB_AUTO_LOAD_MODELS]: {
      default: DEFAULT_DB_AUTO_LOAD_MODELS,
      format: Boolean,
      env: DBConfigKeys.DB_AUTO_LOAD_MODELS,
    },
    [DBConfigKeys.DB_SYNCHRONIZE_MODELS]: {
      default: DEFAULT_DB_SYNCHRONIZE_MODELS,
      format: Boolean,
      env: DBConfigKeys.DB_SYNCHRONIZE_MODELS,
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
