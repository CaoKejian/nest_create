
import { Controller, Get, HttpCode, Query, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @HttpCode(404)
  getHello(@Query('id') key: string): Object {
    console.log('=========', key)
    return this.userService.getUser();
  }
}
