import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  public index() {
    return { title: 'Next with Nest' };
  }

  @Get('/adminka')
  @Render('adminka')
  public adminka() {
    return { title: 'Adminka' };
  }
}
