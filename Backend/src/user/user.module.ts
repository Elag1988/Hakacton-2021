/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './schemas/user.schema';
import { UserService } from './user.service';

@Module({
  imports:[
    MongooseModule.forFeature([
      { name: 'users', schema: UsersSchema}
    ])
  ],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
