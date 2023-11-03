import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserValidate } from 'src/interface/user.interface';
import { UserModule } from './user.module';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserModule>) {}

  create(user: UserValidate) {
    console.log('create')
  }

  findAll(): Promise<UserValidate[]> {
    return this.userModel.find()
  }
}
