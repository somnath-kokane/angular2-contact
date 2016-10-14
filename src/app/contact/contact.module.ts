import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ContactService } from './contact.service';
import { ContactComponent } from  './contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';

import {ContactDetailComponent} from './contact-detail/contact-detail.component';
import {ContactFormComponent} from './contact-form/contact-form.component';

import { routing } from './contact.routing';

@NgModule({
  imports: [ CommonModule, FormsModule, routing ],
  declarations: [ 
    ContactComponent, 
    ContactListComponent, 
    ContactDetailComponent, 
    ContactFormComponent 
  ],
  providers: [ ContactService ]
})
export default class ContactModule { }
