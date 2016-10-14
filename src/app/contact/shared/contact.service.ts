import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

export class Contact {
  id: number;
  name: string;
}

@Injectable()
export class ContactService {
  contacts: Contact[];
  constructor(
    private http: Http) {}
  
  getContacts(): Observable<Contact[]> {
    if(this.contacts){
      return Observable.of(this.contacts)
    }
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
    this.contacts = data;
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
      .map(contacts => contacts.find(contact => contact.id === +id)[0])
  }

  getNextId(){
    return 1 + (this.contacts || []).length;
  }

  saveContact(contact: Contact){
    let ix = this.contacts.indexOf(contact);
    if(!!~ix === false){
      this.contacts.push(contact);
    }
  }

  deleteContact(contact: Contact){
    let ix = this.contacts.indexOf(contact);
    if(!!~ix){
      this.contacts.splice(ix, 1);
    }
  }
}