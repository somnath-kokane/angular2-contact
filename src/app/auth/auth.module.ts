import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';

import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';

import { routing } from './auth.routing';

@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule, 
    routing 
  ],
  declarations: [
    AuthComponent, 
    LoginComponent
  ],
  providers: [ AuthService, AuthGuard ]
})
export default class AuthModule { }