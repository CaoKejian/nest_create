import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(): Object{
    return {
      name: 'ckj',
      age: 21
    }
  }
}
