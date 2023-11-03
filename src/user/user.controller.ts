
import { Body, Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UserValidate } from 'src/interface/user.interface';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  @HttpCode(200)
  @Header('Cache-Control', 'none')
  @ApiResponse({ status: 200, description: '返回所有用户列表'})
  // @Redirect('https://nestjs.com', 301)
  async findAll(): Promise<UserValidate[]> {
    return this.userService.findAll()
  }

  @Post('/')
  async create(@Body() user: UserValidate) {
    console.log('======', Body)
    this.userService.create(user)
  }
}
