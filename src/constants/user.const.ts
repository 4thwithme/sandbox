import { config } from '@configs/app-creator.config';
import { ConfigKeys } from '@enums/app-config-keys.enum';

const GLOBAL_PREFIX = config.get(ConfigKeys.GLOBAL_PREFIX);

export const USER_ROUTE = `${GLOBAL_PREFIX}/user`;

export const USER_DB_NAME = 'users';
export const GET_USER_PARAM = ':id';

export const USER_ID = '_id';
export const USER_USERNAME = 'username';
export const USER_PASSWORD = 'password';
export const USER_ROLE = 'role';
export const USER_CREATED_AT = 'createdAt';
export const USER_UPDATED_AT = 'updatedAt';
