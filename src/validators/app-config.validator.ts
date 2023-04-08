import * as Joi from 'joi';

import { ConfigKeys } from '@enums/app-config-keys.enum';
import { DBConfigKeys } from '@enums/db-config-keys.enum';
import { EnvironmentValues } from '@enums/environment.enum';

export const configValidationSchema = Joi.object({
  // SERVER
  [ConfigKeys.SERVER_PORT]: Joi.number().required(),
  [ConfigKeys.GLOBAL_PREFIX]: Joi.string().required(),
  [ConfigKeys.NODE_ENV]: Joi.string()
    .valid(...EnvironmentValues)
    .required(),
  [ConfigKeys.SWAGGER_ROUTE]: Joi.string(),

  // DB
  [DBConfigKeys.DB_USERNAME]: Joi.string().required(),
  [DBConfigKeys.DB_PASSWORD]: Joi.string().required(),
  [DBConfigKeys.DB_DATABASE]: Joi.string().required(),
  [DBConfigKeys.DB_CLUSTER]: Joi.string().required(),
}).options({ convert: true });
