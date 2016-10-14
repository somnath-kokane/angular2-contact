import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class AuthService {
  
  constructor(
    private http: Http) {}

  login(user:any): Observable<any> {
    let body = JSON.stringify(user);
    console.log('body', body)
    let url = '/v1/login';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post(url, body, options)
      .map(this.handleResponse)
      .map((data) => {
        sessionStorage.setItem('isLogin', data.isLogin);
        return data;
      })
      .catch(this.handleError);
  }

  private handleResponse(res: Response){
    let json = res.json();
    let status = json.status || {};
    let data = json.data;
    if(!!status.success === false){
      return Observable.throw(status.message);
    }
    return data;
  }

  private handleError(error: any){
    console.log('err', error.stack);
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}