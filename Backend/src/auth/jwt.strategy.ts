/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "./auth.service";
import { IJwtPayload } from "./interfaces/jwt_payload.interfaces";
import { UserDTO } from "src/user/dto/user.dto";

@Injectable()

export class JwtStrategy extends PassportStrategy(Strategy){
    
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET_KEY
        });
    }

    async validate(payload:IJwtPayload): Promise<UserDTO> {
        
        const user = await this.authService.validateUser(payload);

        if(!user) {
            throw new HttpException("Invalid token", HttpStatus.UNAUTHORIZED);
        }

        return user;
    }
} 