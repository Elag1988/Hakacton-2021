import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BirthControlDTO } from './dto/create_birthcontrol.dto';
import { IBirthControl } from './interfaces/birthControl.interface';

@Injectable()
export class BirthControlService {
    constructor(@InjectModel('birthControl') private readonly birthControlModel: Model<IBirthControl>){}

    async getAllBControl(): Promise<IBirthControl[]>{
        const bcontrol = await this.birthControlModel.find();
        return bcontrol; 
    }
    async getBControl(birthControlId: string): Promise<IBirthControl>{
        const bcontrol = await this.birthControlModel.findById(birthControlId);
        return bcontrol; 
    }    
    async createBControl(createBirthControlDTO:BirthControlDTO): Promise<IBirthControl>{
        const bcontrol = await new this.birthControlModel(createBirthControlDTO);
        await bcontrol.save();
        return bcontrol; 
    }
    async updateBControln(birthControlId: string, createBirthControlDTO:BirthControlDTO): Promise<IBirthControl>{
        const bcontrol = await this.birthControlModel.findByIdAndUpdate(birthControlId, createBirthControlDTO );
        return bcontrol;
    }  
    async deteletBControl(birthControlId: string): Promise<IBirthControl>{
        const bcontrol = await this.birthControlModel.findByIdAndDelete(birthControlId);
        return bcontrol;
    }  
}
