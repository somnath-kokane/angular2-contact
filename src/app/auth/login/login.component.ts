import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../auth.service';

@Component({
  moduleId: module.id,
  selector: 'auth-login',
  template: require('./login.component.html!')
})
export class LoginComponent implements OnInit {
  user: any;

  constructor(
    private router: Router,
    private service: AuthService) {}

  ngOnInit() {
    this.user = {
      email: '',
      password: ''
    };
    if(AuthService.isLoggedIn()){
      this.router.navigate(['']);
      return
    }
  }

  onSubmit(){
    this.service
      .login(this.user)
      .subscribe(() => {
        this.router.navigate([''])
      });
    
    return false;
  }
}