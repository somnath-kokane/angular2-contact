import { Injectable } from '@angular/core';

import { Login } from './login.model';

@Injectable()
export class AuthService {
  
  constructor() {}

  login(login:Login){
    console.log('login.email', login.email);
  }
}
  