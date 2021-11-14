import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicationController } from './medication.controller';
import { MedicationService } from './medication.service';
import { medicationSchema } from './schemas/medication.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      { name: 'medication', schema: medicationSchema}
    ])
  ],
  controllers: [MedicationController],
  providers: [MedicationService]
})
export class MedicationModule {}
