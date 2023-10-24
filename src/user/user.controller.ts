
import { Controller, Get, Header, HttpCode, Query, Redirect, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @HttpCode(404)
  @Header('Cache-Control', 'none')
  @Redirect('https://nestjs.com', 301)
  getHello(@Query('id') key: string): Object {
    console.log('=========', key)
    return this.userService.getUser();
  }
}
