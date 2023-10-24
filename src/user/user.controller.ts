
import { Body, Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/interface/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  @HttpCode(200)
  @Header('Cache-Control', 'none')
  // @Redirect('https://nestjs.com', 301)
  async findAll(): Promise<User[]> {
    return this.userService.findAll()
  }

  @Post('/')
  async create(@Body() user: User) {
    console.log('======', Body)
    this.userService.create(user)
  }
}
