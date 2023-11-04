import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
// schema 为数据库上传校验器
@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);