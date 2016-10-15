import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import './rxjs-operators';

import {AuthService} from './auth/auth.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: require('./app.component.html!')
})
export class AppComponent implements OnInit {
  loggedIn:any;
  isLoggedIn:any;

  constructor(
    private router: Router,
    private auth: AuthService) {}
  
  ngOnInit() {
    this.loggedIn = AuthService.loggedIn
      .subscribe((value:any) => this.isLoggedIn = value)

    if(AuthService.isLoggedIn()){
      this.isLoggedIn = true;
    }
  }

  ngOnDestroy(){
    this.loggedIn.unsubscribe();
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate([''])
  }
}