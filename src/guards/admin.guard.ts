import { RoleEnum } from '@enums/user.unums';
import { ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AdminGuard {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const isAdmin = request.user.role === RoleEnum.ADMIN;
    return isAdmin;
  }
}
