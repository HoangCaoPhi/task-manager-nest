import { IsNotEmpty, Min, MinLength } from "class-validator";

export class RegisterRequest {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty() 
    @MinLength(6)
    password: string
}