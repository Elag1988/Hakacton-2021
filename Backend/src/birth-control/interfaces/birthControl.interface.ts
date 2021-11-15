import { Document } from "mongoose";
import { BirthControlReminderDTO } from "../dto/birthControlReminder.dto";

export interface IBirthControl extends Document {
    readonly name: string;
    readonly  type: string;
    readonly  image: string;
    readonly desciption: string;
    readonly reminder: [BirthControlReminderDTO];
}