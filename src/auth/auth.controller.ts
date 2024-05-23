import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ok } from 'assert';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post()
    signIn(@Body() signInDto: Record<string, any>){
        return this.authService.signIn(signInDto.username, signInDto.password);
    }
}
