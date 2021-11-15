/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginUserDTO } from './dto/login_user.dto';
import { UserDTO } from './dto/user.dto';
import * as bcrypt from "bcrypt";
import { CreateUserDTO } from './dto/create_user.dto';
import { IUser } from './interfaces/user.interfaces';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel:Model<IUser>) {}
        
        async findOneUser(options?: object): Promise<UserDTO>{

            const user = await this.userModel.findOne(options);
            return this.userInterfacetoUserDTO(user);

        }
    
        async findByLogin(loginUserDTO: LoginUserDTO): Promise<UserDTO> {

            const {username, password} = loginUserDTO;
            const user = await this.userModel.findOne( { where: {username} } );

            if(!user) {
                throw new HttpException("User not found", HttpStatus.UNAUTHORIZED);
            }
            const comparePassword = await bcrypt.compare(password, user.password);

            if(!comparePassword) {
                throw new HttpException("Invalid Credentials", HttpStatus.UNAUTHORIZED);
            }


            return this.userInterfacetoUserDTO(user);
        }

        async findByPayload( {username}: any ): Promise <UserDTO>{

            const user = this.findOneUser({where: {username}});
            return user;

        }

        async createUser(createUserDTO: CreateUserDTO): Promise <UserDTO> {

            const {username, password, name, surname, typeOfId, document, dateOfBirth, email} = createUserDTO

            const foundUser = await this.userModel.findOne({where: { username }})

            if(foundUser) {
                throw new HttpException("User Already Exists", HttpStatus.BAD_REQUEST);
            }

            const user = await this.userModel.create({username, password, name, surname, typeOfId, document, dateOfBirth, email});

            await user.save();

            return this.userInterfacetoUserDTO(user);
        }

        userInterfacetoUserDTO(userinterface:IUser): UserDTO {

            const {username, password, name, surname, typeOfId, document, dateOfBirth, email} = userinterface;
            const userDTO:UserDTO = {username, password, name, surname, typeOfId, document, dateOfBirth, email};
            return userDTO;


        }    

}