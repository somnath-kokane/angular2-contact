import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { Contact, ContactService } from '../contact.service';

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
    private service: ContactService) {}
  
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.service.getContact(id)
      .subscribe(contact => this.contact = contact);
  }

  onDelete(){
    this.service.deleteContact(this.contact);
    this.router.navigate(['/contact']);
  }
}