import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should create a user', async () => {
    const userData = { name: 'John', age: 30 }; // 用户数据
    const createdUser = { ...userData, id: '1' }; // 假设创建用户后返回的数据

    // 模拟 UserService.create 方法并设置返回值
    const createSpy: any = jest.spyOn(service, 'create');
    createSpy.mockReturnValue(createdUser);

    // 模拟 POST 请求
    const result = await controller.create(userData);

    expect(result).toEqual(createdUser); // 验证控制器返回的数据是否与预期一致
  });

});
