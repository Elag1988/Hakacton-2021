import { ReminderDTO } from "./reminder.dto";

export class MedicationDTO{
    readonly name: string;
    readonly  type: string;
    readonly  image: string;
    readonly desciption: string;
    readonly reminder: [ReminderDTO];
}