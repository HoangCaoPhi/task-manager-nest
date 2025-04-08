import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterRequest } from './dto/register.request';
import { LoginRequest } from './dto/login.request';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(registerRequest: RegisterRequest) {
    const hashed = await bcrypt.hash(registerRequest.password, 10);
    return this.usersService.create(registerRequest.username, hashed, registerRequest.email);
  }

  async login(loginRequest: LoginRequest) {
    const user = this.usersService.findByUserName(loginRequest.username);
    if (!user || !(await bcrypt.compare(loginRequest.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { username: user.username, sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }
}
