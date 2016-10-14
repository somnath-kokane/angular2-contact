import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { Contact, ContactService } from '../shared/contact.service';

@Component({
  //moduleId: module.id,
  selector: 'contact-detail',
  template: require('./contact-detail.component.html!')
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private contactService: ContactService) {}
  
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contactService.getContact(id)
      .subscribe(contact => this.contact = contact);
  }

  onDelete(){
    this.contactService.deleteContact(this.contact);
    this.router.navigate(['/contact']);
  }
}