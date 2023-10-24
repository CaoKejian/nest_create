import { Injectable } from '@nestjs/common';
import { User } from 'src/interface/user.interface';

@Injectable()
export class UserService {
  private readonly cats: User[] = [];

  create(user: User) {
    this.cats.push(user);
  }

  findAll(): User[] {
    return this.cats;
  }
}
