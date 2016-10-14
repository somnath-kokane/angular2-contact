import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { Contact, ContactService } from '../contact.service';

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
    private service: ContactService
    ) {
    
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if(id == 'new'){
      this.contact = new Contact();
    } else {
      this.service.getContact(id)
        .subscribe((contact) => this.contact = contact);
    }
    
  }

  onSubmit(){
    this.service
      .saveContact(this.contact)
      .subscribe((contact) => {
        this.router.navigate(['/contact'])
      });
    return false;
  }
}