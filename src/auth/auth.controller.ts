import { Body, Controller, Post } from '@nestjs/common';
import axios from 'axios';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post()
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    try {
      const res = await this.authService.login(email, password);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }
}
