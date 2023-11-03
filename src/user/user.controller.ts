
import { Body, Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserType } from 'src/interface/user.interface';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/validate/user.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  @HttpCode(200)
  @Header('Cache-Control', 'none')
  @ApiResponse({ status: 200, description: '返回所有用户列表'})
  // @Redirect('https://nestjs.com', 301)
  async findAll(): Promise<UserType[]> {
    return this.userService.findAll()
  }

  @Post('/')
  @UsePipes(new ValidationPipe())
  async create(@Body() createUserDto: CreateUserDto) {
    this.userService.create(createUserDto)
  }
}
