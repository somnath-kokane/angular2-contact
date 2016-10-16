import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

import {AuthGuard} from '../auth/auth-guard.service';

const routes: Routes = [
  { 
    path: 'contact', 
    component: ContactComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ContactListComponent },
      {path: 'detail/:id', component: ContactDetailComponent},
      {path: 'form/:id', component: ContactFormComponent}
    ]
  },
  
];

export const routing = RouterModule.forChild(routes);

