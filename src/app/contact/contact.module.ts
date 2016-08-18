import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ContactService } from './shared/contact.service';
import { ContactComponent } from  './contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { routing } from './contact.routing';

@NgModule({
  imports:      [ CommonModule, FormsModule, routing ],
  declarations: [ ContactComponent, ContactListComponent ],
  providers:    [ ContactService ]
})
export default class ContactModule { }
