/* eslint-disable prettier/prettier */
import { Document } from "mongoose";
import { ReminderDTO } from "../dto/reminder.dto";

export interface IMedication extends Document {
    readonly name: string;
    readonly  type: string;
    readonly  image: string;
    readonly desciption: string;
    readonly reminder: [ReminderDTO];
}