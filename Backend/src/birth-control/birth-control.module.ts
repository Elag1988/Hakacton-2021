import { Module } from '@nestjs/common';
import { BirthControlController } from './birth-control.controller';
import { BirthControlService } from './birth-control.service';

@Module({
  controllers: [BirthControlController],
  providers: [BirthControlService]
})
export class BirthControlModule {}
