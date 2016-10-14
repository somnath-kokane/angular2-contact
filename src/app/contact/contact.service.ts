import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {RestService} from '../shared/rest.service'

let contacts:any[] = [];

export class Contact {
  id: number;
  name: string;
}


@Injectable()
export class ContactService {
  contacts:any[] = [];
  constructor(
    private rest: RestService) {}
  
  getContacts(): Observable<Contact[]> {
    let url = '/v1/contact';
    return this.rest.get(url);
  }

  
  getContact(id: number|string): Observable<Contact>{
    return this.getContacts()
      .map(contacts => contacts.find(contact => contact.id === +id))
  }

  getNextId(){
    return 1 + (this.contacts || []).length;
  }

  saveContact(contact: Contact): Observable<any> {
    let body = JSON.stringify(contact);
    let url = '/v1/contact';

    return this.rest.post(url, body)
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
  }

  deleteContact(contact: Contact){
    let ix = this.contacts.indexOf(contact);
    if(!!~ix){
      this.contacts.splice(ix, 1);
    }
  }
}