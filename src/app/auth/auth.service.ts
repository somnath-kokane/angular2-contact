import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {RestService} from '../shared/rest.service';

@Injectable()
export class AuthService {

  static loggedIn: EventEmitter<any> = new EventEmitter();

  static isLoggedIn(): boolean|void {
    let jsonString = sessionStorage.getItem('isLoggedIn');
    let json: any;
    try {
      json = JSON.parse(jsonString)
    } catch(e){
      //
    };
    
    return json 
      ? json.data
      : false
  };
  
  constructor(
    private rest: RestService) {
    
  }

  login(user: any): Observable<any> {
    let body = JSON.stringify(user);
    let url = '/v1/login';

    return this.rest.post(url, body)
      .map((data) => {
        let isLoggedIn:any;
        isLoggedIn = data.isLogin;
        sessionStorage.setItem('isLoggedIn', JSON.stringify({data:isLoggedIn}));
        AuthService.loggedIn.emit(isLoggedIn);
        return data;
      });
  }

  logout(): void {
    sessionStorage.setItem('isLoggedIn', JSON.stringify({data: false}));
    AuthService.loggedIn.emit(false);
  }

}