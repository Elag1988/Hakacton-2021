/* eslint-disable prettier/prettier */
import { Schema } from "mongoose";

export const UsersSchema = new Schema ({
    username: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    surname: {type: String, required: true},
    typeOfId: {type: String, required: true},
    document: {type: String, required: true, unique: true},
    dateOfBirth: {type: String, required: true},
    email: {type: String, required: true, unique: true}
    
})