import { Component, OnInit } from '@angular/core';

import { Contact, ContactService } from '../shared/contact.service'

@Component({
  moduleId: module.id,
  selector: 'contact-list',
  template: require('./contact-list.component.html!')
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  constructor(private contactService: ContactService) {}

  ngOnInit() {
   this.contactService.getContacts()
     .subscribe((contacts) => this.contacts = contacts);
  }
}