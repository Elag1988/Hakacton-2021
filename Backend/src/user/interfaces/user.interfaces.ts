/* eslint-disable prettier/prettier */
import { Document } from "mongoose";

export interface IUser extends Document {
    readonly username: string;
    readonly name: string;
    readonly password: string
    readonly surname: string;
    readonly typeOfId: string;
    readonly document: string;
    readonly dateOfBirth: string;
    readonly email: string;
}