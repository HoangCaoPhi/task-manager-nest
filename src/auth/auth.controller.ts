import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterRequest } from './dto/register.request';
import { LoginRequest } from './dto/login.request';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register') 
  register(@Body() registerRequest: RegisterRequest) {
    return this.authService.register(registerRequest);
  }

  @Post('login') 
  login(@Body() loginRequest: LoginRequest) {
    return this.authService.login(loginRequest);
  }
}