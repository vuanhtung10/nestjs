import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // route /
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() /// route "" / => api resfull api
  @Render('home')
  handleHomePage() {
    const message = this.appService.getHello();
    return {
      message: message,
    };
  }
  getHello() {
    // return 'this.appService.getHello()';
  }
}
