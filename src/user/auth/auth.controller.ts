import { Body, Controller, Param, ParseEnumPipe, Post } from '@nestjs/common';
import { UserType } from '@prisma/client';
import { GenerateProductKeyDto, SigninDto, SignupDto } from '../dtos/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}

    @Post('/signup/:userType')
    signup(@Body() body: SignupDto, @Param('userType', new ParseEnumPipe(UserType)) userType: UserType){

        if(userType !== UserType.BUYER) {

        }
        return this.authService.signup(body) 
    }

    @Post('/signin')
    signin(@Body() body: SigninDto){
        return this.authService.signin(body)
    }

    @Post("/key")
    generateProductKey(@Body() {userType, email}: GenerateProductKeyDto) {
        return this.authService.generateProductKey(email, userType)
    }
}

// 섹션8 59부터  