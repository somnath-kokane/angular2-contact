import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { Contact, ContactService } from '../shared/contact.service';

@Component({
  //moduleId: module.id,
  selector: 'contact-form',
  template: require('./contact-form.component.html!')
})
export class ContactFormComponent implements OnInit {
  contact: Contact;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if(id == 'new'){
      this.contact = new Contact(this.contactService.getNextId(), '');
    } else {
      this.contactService.getContact(id)
        .then(contact => this.contact = contact);
    }
    
  }

  onSubmit(){
    this.contactService.saveContact(this.contact);
    this.router.navigate(['/contact'])
    return false;
  }
}