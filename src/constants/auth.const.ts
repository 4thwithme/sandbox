import { config } from '@configs/app-creator.config';
import { ConfigKeys } from '@enums/app-config-keys.enum';

const GLOBAL_PREFIX = config.get(ConfigKeys.GLOBAL_PREFIX);

export const AUTH_ROUTE = `${GLOBAL_PREFIX}/auth`;
export const AUTH_LOGIN_ROUTE = 'login';
export const AUTH_LOGOUT_ROUTE = 'logout';
