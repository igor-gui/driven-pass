import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {


    constructor(private authService: AuthService) { }
    @Post('sign-in')
    async createSession(@Body() body: SignInDTO) {
        return this.authService.createSession(body)
    }
}
