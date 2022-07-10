import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { ADMIN_LOGIN_ROUTE } from '@constants/render.const';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest();
    const res = ctx.getResponse();
    const isAuthenticated = req.isAuthenticated();
    if (!isAuthenticated) {
      return res.redirect(ADMIN_LOGIN_ROUTE);
    }
    return true;
  }
}
