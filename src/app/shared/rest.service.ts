import { Injectable } from '@angular/core';

import {
  Http, Response, RequestOptions, Headers, 
  RequestOptionsArgs, Request, RequestMethod } from '@angular/http';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class RestService {

  constructor(
    private http: Http){}
  
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
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  request(url: string|Request, options?: RequestOptionsArgs) : Observable<any>{
    options = options || new RequestOptions();
    options.headers = options.headers || new Headers();
    if(!options.headers.has('Content-Type')){
      options.headers.append('Content-Type', 'application/json');
    }
    return this.http.request(url, options)
      .map(this.handleResponse)
      .catch(this.handleError);
  }

  get(url: string, options?: RequestOptionsArgs) : Observable<any>{
    return this.request(url, options);
  }

  post(url: string, body: any, options?: RequestOptionsArgs) : Observable<any>{
    options = options || new RequestOptions();
    options.body = body;
    options.method = RequestMethod.Post;

    return this.request(url, options);
  }

  put(url: string, body: any, options?: RequestOptionsArgs) : Observable<any>{
    options = options || new RequestOptions();
    options.body = body;
    options.method = RequestMethod.Put;

    return this.request(url, options);
  }

  delete(url: string, options?: RequestOptionsArgs) : Observable<any>{
    options = options || new RequestOptions();
    options.method = RequestMethod.Delete;

    return this.request(url, options);
  }


}