import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Contact } from './contact.model';

@Component({
  //moduleId: module.id,
  selector: 'my-contact-form',
  template: require('./contact-form.component.html!')
})
export class ContactFormComponent implements OnInit {
  @Input() contact:Contact;
  @Output() onSave = new EventEmitter<Contact>();
  constructor() {}

  ngOnInit() {
    
  }

  onSubmit(){
    this.onSave.emit(this.contact);
  }
}
  