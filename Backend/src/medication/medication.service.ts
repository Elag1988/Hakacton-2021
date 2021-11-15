import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MedicationDTO } from './dto/create_medication.dto';
import { IMedication } from './interfaces/medication.interface';

@Injectable()
export class MedicationService {
    constructor(@InjectModel('medication') private readonly medicationModel: Model<IMedication>){}

    async getAllMedication(): Promise<IMedication[]>{
        const medication = await this.medicationModel.find();
        return medication; 
    }
    async getMedication(medicationId: string): Promise<IMedication>{
        const medication = await this.medicationModel.findById(medicationId);
        return medication; 
    }    
    async createMedication(createMedicationDTO:MedicationDTO): Promise<IMedication>{
        const medication = await new this.medicationModel(createMedicationDTO);
        await medication.save();
        return medication; 
    }
    async updateMedication(medicationId: string, createMedicationDTO:MedicationDTO): Promise<IMedication>{
        const medication = await this.medicationModel.findByIdAndUpdate(medicationId, createMedicationDTO );
        return medication;
    }  
    async deteletMedication(medicationId: string): Promise<IMedication>{
        const medication = await this.medicationModel.findByIdAndDelete(medicationId);
        return medication;
    }  
}
