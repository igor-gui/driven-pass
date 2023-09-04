import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {


    @IsString()
    @IsNotEmpty({
        message: "All fields are required!"
    })
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty({
        message: "All fields are required!"
    })
    password: string;
}
