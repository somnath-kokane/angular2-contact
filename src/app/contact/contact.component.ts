import { Component, OnInit } from '@angular/core';

import { Contact } from './contact.model';
import { ContactService } from './contact.service';
import { ContactFormComponent } from './contact-form.component';

@Component({
  //moduleId: module.id,
  selector: 'my-contact',
  template: require('./contact.component.html!'),
  providers: [ContactService],
  directives: [ContactFormComponent]
})
export class ContactComponent implements OnInit {
  contact:Contact;
  constructor(private _service:ContactService) {}

  ngOnInit() {
    this.contact = new Contact();
  }
  onSave(contact:Contact){
    console.log('contact.name', contact.name);
  }
}
  