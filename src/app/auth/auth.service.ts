import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {RestService} from '../shared/rest.service';

@Injectable()
export class AuthService {

  static loggedIn: EventEmitter<any> = new EventEmitter();

  static isLoggedIn(): boolean {
    let jsonString = sessionStorage.getItem('isLoggedIn');
    let json: any;
    try {
      json = JSON.parse(jsonString)
    } catch(e){
      return false
    };
    
    return json 
      ? json.data
      : false
  };

  isLoggedIn: boolean = false;
  
  constructor(
    private rest: RestService) {
    this.isLoggedIn = AuthService.isLoggedIn();
  }

  login(user: any): Observable<any> {
    let body = JSON.stringify(user);
    let url = '/v1/login';

    return this.rest.post(url, body)
      .map((data) => {
        let isLoggedIn:any;
        isLoggedIn = data.isLogin;
        sessionStorage.setItem('isLoggedIn', JSON.stringify({data:isLoggedIn}));
        this.isLoggedIn = true;
        AuthService.loggedIn.emit(isLoggedIn);
        return data;
      });
  }

  logout(): void {
    sessionStorage.setItem('isLoggedIn', JSON.stringify({data: false}));
    AuthService.loggedIn.emit(false);
  }

}