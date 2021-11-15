/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MedicationModule } from './medication/medication.module';
import { BirthControlModule } from './birth-control/birth-control.module';
import { NotificationModule } from './notification/notification.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:1234@cluster0.qf0yy.mongodb.net/tumedicina?retryWrites=true&w=majority',{
    useNewUrlParser: true
    }),
    UserModule,
    MedicationModule,
    BirthControlModule,
    NotificationModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
