import { Schema } from "mongoose";

export const reminderSchema = new Schema ({
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    dosesFrecuency: {
        type: String,
        enum: ['una vez al día', 'dos veces al día', 'tres veces al día', 'cuatro veces al día'],
        required:true
    },
    dailyFrecuency: {
        type: [],
        required: true,
        //enum: ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo']
    }
})