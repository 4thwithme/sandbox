import { Environment } from '../enums/environment.enum';

export interface IServerConfig {
  SERVER_PORT: number;
  GLOBAL_PREFIX: string;
  NODE_ENV: Environment;
  DB_DIALECT: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_DATABASE: string;
  DB_AUTO_LOAD_MODELS: boolean;
  SWAGGER_ROUTE: string;
  DB_SYNCHRONIZE_MODELS: boolean;
}
