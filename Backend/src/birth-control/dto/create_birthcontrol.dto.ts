import { BirthControlReminderDTO } from "./birthControlReminder.dto";

export class BirthControlDTO{
    readonly name: string;
    readonly  type: string;
    readonly  image: string;
    readonly desciption: string;
    readonly reminder: [BirthControlReminderDTO];
}