/* eslint-disable prettier/prettier */
import { Schema } from "mongoose";
import { ReminderDTO } from "../dto/reminder.dto";
import { reminderSchema } from "./reminder.schema";

export const medicationSchema = new Schema ({
    name: {type: String, required: true, unique: true},
    type: { type: String,
        required: true,
        enum: ['oral', 'inyección', 'tópica', 'parche', 'gotas', 'supositorio', 'inhalatoria' ]
    },   
        //este enum garantiza que solo estos tipos de medicaciones puedan ser almacenadas en este campo
    image: {type: String, required: true}, // Este toca editarlo para que almacene el archivo de la imágen 
    description: {type: String, required: true},
    reminder: {
        type: [reminderSchema], 
        required: true
    }
})