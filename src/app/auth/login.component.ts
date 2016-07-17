import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Login } from './login.model';
import { AuthService } from './auth.service';

@Component({
  //moduleId: module.id,
  selector: 'my-login',
  template: require('./login.component.html!'),
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  login:Login;

  constructor(private _service: AuthService) {}

  ngOnInit() {
    this.login = new Login();
  }

  onSubmit(){
    this._service.login(this.login);
  }
}
  