import { DBConfigKeys } from '@enums/db-config-keys.enum';
import { config } from 'src/configs/app-creator.config';

const DB_DIALECT = config.get(DBConfigKeys.DB_DIALECT);
const DB_DATABASE = config.get(DBConfigKeys.DB_DATABASE);
const DB_HOST = config.get(DBConfigKeys.DB_HOST);
const DB_USERNAME = config.get(DBConfigKeys.DB_USERNAME);
const DB_PASSWORD = config.get(DBConfigKeys.DB_PASSWORD);
const DB_PORT = config.get(DBConfigKeys.DB_PORT);
const DB_AUTO_LOAD_MODELS = config.get(DBConfigKeys.DB_AUTO_LOAD_MODELS);
const DB_SYNCHRONIZE_MODELS = config.get(DBConfigKeys.DB_SYNCHRONIZE_MODELS);

export const dbConfig = {
  dialect: DB_DIALECT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  host: DB_HOST,
  port: Number(DB_PORT),
  autoLoadModels: Boolean(DB_AUTO_LOAD_MODELS),
  synchronize: Boolean(DB_SYNCHRONIZE_MODELS),
};
