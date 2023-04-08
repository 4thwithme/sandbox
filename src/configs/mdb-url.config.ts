import { DBConfigKeys } from '@enums/db-config-keys.enum';
import { config } from '@configs/app-creator.config';

const DB_DATABASE = config.get(DBConfigKeys.DB_DATABASE);
const DB_USERNAME = config.get(DBConfigKeys.DB_USERNAME);
const DB_PASSWORD = config.get(DBConfigKeys.DB_PASSWORD);
const DB_CLUSTER = config.get(DBConfigKeys.DB_CLUSTER);

export const mdbUrl = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}/?retryWrites=true&w=majority`;

export const mdbConfig = {
  autoCreate: true,
  dbName: DB_DATABASE,
};
