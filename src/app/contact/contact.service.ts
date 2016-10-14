import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

let contacts:any[] = [];

export class Contact {
  id: number;
  name: string;
}


@Injectable()
export class ContactService {
  contacts:any[] = [];
  constructor(
    private http: Http) {

  }
  
  getContacts(): Observable<Contact[]> {
    let url = '/v1/contact';
    return this.http
      .get(url)
      .map(this.handleResponse)
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
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
  
  getContact(id: number|string){
    return this.getContacts()
      .map((contacts) => contacts.find(contact => contact.id === +id)[0])
  }

  getNextId(){
    return 1 + (this.contacts || []).length;
  }

  saveContact(contact: Contact): Observable<any> {
    let body = JSON.stringify(contact);
    let url = '/v1/contact';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post(url, body, options)
      .map(this.handleResponse)
      .map((data) => {
        console.log("data", data);
        contact.id = contact.id || data.id;
        console.log('contacts', this.contacts);
        let hasContact = this.contacts.some(c => c.id === contact.id);
        if(!hasContact){
          this.contacts.push(contact);
        }
        
        return contact;
      })
      .catch(this.handleError);
  }

  deleteContact(contact: Contact){
    let ix = this.contacts.indexOf(contact);
    if(!!~ix){
      this.contacts.splice(ix, 1);
    }
  }
}