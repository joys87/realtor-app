import { IsString, IsNotEmpty, IsEmail, isEmail, MinLength, Matches } from "class-validator";

export class SignupDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @Matches(/^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/, { message: "Phone must be a valid phone number" })
    phone: string;

    @IsEmail()
    email: string;
    @IsString()
    @MinLength(5)
    password: string;
}