import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {


    @IsString()
    @IsNotEmpty({
        message: "All fields are required!"
    })
    email: string;

    @IsString()
    @IsNotEmpty({
        message: "All fields are required!"
    })
    password: string;
}
