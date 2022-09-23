import { UserType } from "@prisma/client";
import { IsString, IsNotEmpty, IsEmail, MinLength, Matches, IsEnum } from "class-validator";

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

export class SigninDto {
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}

export class GenerateProductKeyDto {
    @IsEmail()
    email: string;

    @IsEnum(UserType)
    userType: UserType

}