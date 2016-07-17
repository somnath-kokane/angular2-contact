import { Component, OnInit } from '@angular/core';

import { Contact } from './contact.model';
import { ContactService } from './contact.service';

@Component({
  //moduleId: module.id,
  selector: 'my-contact',
  template: require('./contact.component.html!'),
  providers: [ContactService]
})
export class ContactComponent implements OnInit {
  contact:Contact
  constructor(private _service:ContactService) {}

  ngOnInit() {
    this.contact = new Contact();
    this.contact.name = 'Contact 1';
  }
}
  