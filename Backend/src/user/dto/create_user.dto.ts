/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDTO{

    @IsNotEmpty() readonly username: string;
    @IsNotEmpty() readonly name: string;
    @IsNotEmpty() readonly surname: string;
    @IsNotEmpty() readonly password: string;
    @IsNotEmpty() readonly typeOfId: string;
    @IsNotEmpty() readonly document: string;
    @IsNotEmpty() readonly dateOfBirth: string;
    @IsNotEmpty() @IsEmail() readonly email: string;
   
}