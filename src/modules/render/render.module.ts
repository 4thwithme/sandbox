import next from 'next';
import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';

import { ConfigKeys } from '@enums/app-config-keys.enum';
import { config } from '@configs/app-creator.config';
import { NEXT_DIR_PATH } from '@constants/render.const';
import { Environment } from '@enums/environment.enum';

import { RenderController } from './render.controller';
import { RenderService } from './render.service';

const NODE_ENV = config.get(ConfigKeys.NODE_ENV);

@Module({
  imports: [
    RenderModule.forRootAsync(
      next({ dev: NODE_ENV !== Environment.production, dir: NEXT_DIR_PATH }),
      { viewsDir: '' },
    ),
  ],
  controllers: [RenderController],
  providers: [RenderService],
})
export class RenderViewsModule {}
