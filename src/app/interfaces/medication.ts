import { IReminder } from "./reminder";

export interface IMedication {
    [x: string]: string | number;

    name: string;
    type: string;
    image: string;
    desciption: string;
    reminder: [IReminder];
}