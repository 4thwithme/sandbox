import { Environment } from '@enums//environment.enum';

export interface IServerConfig {
  SERVER_PORT: number;
  GLOBAL_PREFIX: string;
  NODE_ENV: Environment;
  SWAGGER_ROUTE: string;

  DB_CLUSTER: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_DATABASE: string;

  SESSION_SECRET: string;
  SESSION_RESAVE: boolean;
  SESSION_SAVE_UNINIT: boolean;
  COOKIE_MAX_AGE: number;
  USER_PASS_SALT: string;
}
