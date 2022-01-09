// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AuthService {}

import { Injectable, Body } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AuthService {
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const LOGIN_URL =
      'https://mfmljprc7d.execute-api.us-east-1.amazonaws.com/prod/auth/login';
    try {
      const res = await axios.post(LOGIN_URL, { email, password });
      //   const token = res.data;
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
