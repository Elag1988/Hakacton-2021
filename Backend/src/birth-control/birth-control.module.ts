import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BirthControlController } from './birth-control.controller';
import { BirthControlService } from './birth-control.service';
import { birthControlSchema } from './schemas/birthControl.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      { name: 'birthControl', schema: birthControlSchema}
    ])
  ],  
  controllers: [BirthControlController],
  providers: [BirthControlService]
})
export class BirthControlModule {}
