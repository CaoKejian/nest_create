import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from 'src/api/v1/user/user.module';
import { MongooseModule } from '@nestjs/mongoose'
@Module({
  imports: [MongooseModule.forRoot('mongodb://host.docker.internal:27017/nestTest'), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
