import { NestFactory } from '@nestjs/core';

import { AppModule } from './modules/app/app.module';
import { config } from './configs/app-creator.config';
import { ConfigKeys } from './enums/app-config-keys.enum';

const PORT = config.get(ConfigKeys.SERVER_PORT);
const GLOBAL_PREFIX = config.get(ConfigKeys.GLOBAL_PREFIX);

async function runServer() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(GLOBAL_PREFIX);
  await app.listen(PORT);
}
runServer();
