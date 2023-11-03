## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## 快捷开发
```bash
#快速生成 module
nest g module <模块名>
#快速生成 service
nest g service <模块名>
```

## 开发流程

### 自动化开发

### 手动化开发

1. 生成module.ts
```js
nest g module <模块名>
```
2. 生成service.ts
```js
nest g service <模块名>
```
3. 创建controller.ts

<details>
  <summary>展开查看</summary>
  <pre>
  <code>

  ```js
  import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
  import { UserService } from './user.service';
  import { UserType } from 'src/interface/user.interface';
  import { ApiResponse, ApiTags } from '@nestjs/swagger';
  import { CreateUserDto } from 'src/validate/user.dto';

  @ApiTags('user')
  @Controller('user')
  export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('/')
    @HttpCode(200)
    @UsePipes(new ValidationPipe())
    @ApiResponse({ status: 200, description: '创建成功'})
    async create(@Body() createUserDto: CreateUserDto) {
      this.userService.create(createUserDto)
    }
  }
  ```
  </code>
  </pre>
</details>

4. 创建controller.spec.ts (可选 [单元测试])

<details>
  <summary>展开查看</summary>
  <pre>
  <code>

  ```js
  import { Test, TestingModule } from '@nestjs/testing';
  import { UserController } from './user.controller';
  import { UserService } from './user.service';

  describe('UserController', () => {
    let controller: UserController;
    let service: UserService;

    describe('root', () => {
      it('should return "Hello World!"', () => {
        expect(UserController.getHello()).toBe('Hello World!');
      });
    });
  });
  ```
  </code>
  </pre>
</details>

5. schemas/**.schema.ts(数据库入库字段及格式)

<details>
  <summary>展开查看</summary>
  <pre>
  <code>

  ```js
  export interface UserType {
        name: string;
        email: string
      }
  ```
  </code>
  </pre>
</details>

6. interface/**.interface.ts(字段类型)

<details>
  <summary>展开查看</summary>
  <pre>
  <code>

  ```js
  import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
    import { HydratedDocument } from 'mongoose';

    export type UserDocument = HydratedDocument<User>;
    @Schema()
    export class User {
      @Prop({ required: true })
      name: string;

      @Prop({ required: true })
      email: string;
    }

    export const UserSchema = SchemaFactory.createForClass(User);
  ```
  </code>
  </pre>
</details>

7. validate/**.dto.ts(校验入参字段)


<details>
  <summary>展开查看</summary>
  <pre>
  <code>

  ```js
    import { IsEmail, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

    // validate 为接受字段校验器
    export class CreateUserDto {
      @IsNotEmpty()
      @IsString()
      name: string;

      @IsEmail()
      @IsString()
      email: string;
    }
  ```
  </code>
  </pre>
</details>
