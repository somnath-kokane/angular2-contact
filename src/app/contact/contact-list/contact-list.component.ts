import { Component, OnInit } from '@angular/core';

import { Contact, ContactService } from '../contact.service'

@Component({
  moduleId: module.id,
  selector: 'contact-list',
  template: require('./contact-list.component.html!')
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  constructor(
    private service: ContactService) {}

  ngOnInit() {
   this.service.getContacts()
     .subscribe((contacts) => this.contacts = contacts);
  }
}