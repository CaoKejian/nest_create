import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserType } from 'src/interface/user.interface';
import { UserModule } from './user.module';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserModule>) { }

  create(user: UserType) {
    return this.userModel.create(user)
  }

  findAll(): Promise<UserType[]> {
    this.userModel.create({
      name: 21,
      age: 22,
    })
    return this.userModel.find()
  }
}
