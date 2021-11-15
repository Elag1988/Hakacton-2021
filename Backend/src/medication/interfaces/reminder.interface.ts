import { Document } from "mongoose";

export interface IReminder extends Document {
    readonly startDate: Date; 
    readonly endDate: Date; 
    readonly dosesFrecuency: string;
    readonly dailyFrecuency: [];
}

