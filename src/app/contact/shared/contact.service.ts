import { Injectable } from '@angular/core';

export class Contact {
  constructor(
    public id: number, 
    public name: string) {
    // code...
  }
}

const CONTACTS: Contact[] = [
  new Contact(1, 'Somnath Kokane'),
  new Contact(2, 'Dhruv Kokane'),
  new Contact(3, 'Sonali Kokane')
];

@Injectable()
export class ContactService {
  
  constructor() {}
  
  getContacts(){
    return new Promise<Contact[]>(resolve => {
      setTimeout(() => {resolve(CONTACTS)}, 10);
    });
  }
  
  getContact(id: number|string){
    return this.getContacts()
      .then(contacts => contacts.find(contact => contact.id === +id))
  }

  getNextId(){
    return 1 + CONTACTS.length;
  }

  saveContact(contact: Contact){
    let ix = CONTACTS.indexOf(contact);
    if(!!~ix === false){
      CONTACTS.push(contact);
    }
  }

  deleteContact(contact: Contact){
    let ix = CONTACTS.indexOf(contact);
    if(!!~ix){
      CONTACTS.splice(ix, 1);
    }
  }
}