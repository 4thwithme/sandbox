import { createProfiguration } from '@golevelup/profiguration';

import { IServerConfig } from '../interfaces/app-config.interface';
import { ConfigKeys } from '../enums/app-config-keys.enum';
import { DBConfigKeys } from '../enums/db-config-keys.enum';
import { Environment } from '../enums/environment.enum';
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
} from '../constants/default-app-config.const';

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
  },
  {
    strict: true,
    verbose: true,
    configureEnv: () => ({
      files: '.env',
    }),
  },
);
