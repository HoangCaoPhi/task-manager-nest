import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginRequest {
    @IsNotEmpty()
    username: string;
  
    @IsNotEmpty()
    @MinLength(6)    
    password: string;
}