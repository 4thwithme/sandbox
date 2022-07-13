import { Controller, Get, Render, UseGuards } from '@nestjs/common';

import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { AdminGuard } from '@guards/admin.guard';
import {
  LOGIN_COMPONENT,
  LOGIN_ROUTE,
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

  @Get(LOGIN_ROUTE)
  @Render(LOGIN_COMPONENT)
  public adminka() {
    return {};
  }

  @UseGuards(AuthenticatedGuard, AdminGuard)
  @Get(DASHBOARD_ROUTE)
  @Render(DASHBOARD_COMPONENT)
  public dashboard() {
    return {};
  }
}
