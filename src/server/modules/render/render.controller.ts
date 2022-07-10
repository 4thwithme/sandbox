import { Controller, Get, Render, UseGuards } from '@nestjs/common';

import { AuthenticatedGuard } from '@guards/authenticated.guard';
import {
  ADMIN_LOGIN_COMPONENT,
  ADMIN_LOGIN_ROUTE,
  DASHBOARD_COMPONENT,
  DASHBOARD_ROUTE,
  HOME_COMPONENT,
} from '@constants/render.const';

@Controller()
export class RenderController {
  @Get()
  @Render(HOME_COMPONENT)
  public index() {
    return {};
  }

  @Get(ADMIN_LOGIN_ROUTE)
  @Render(ADMIN_LOGIN_COMPONENT)
  public adminka() {
    return {};
  }

  @UseGuards(AuthenticatedGuard)
  @Get(DASHBOARD_ROUTE)
  @Render(DASHBOARD_COMPONENT)
  public dashboard() {
    return {};
  }
}
