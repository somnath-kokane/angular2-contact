import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {RestService} from '../shared/rest.service';

@Injectable()
export class AuthService {
  
  constructor(
    private rest: RestService) {}

  login(user: any): Observable<any> {
    let body = JSON.stringify(user);
    let url = '/v1/login';

    return this.rest.post(url, body)
      .map((data) => {
        sessionStorage.setItem('isLogin', data.isLogin);
        return data;
      });
  }

}