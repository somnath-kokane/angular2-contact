import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {AuthComponent} from './auth.component';
import {LogoutComponent} from './logout/logout.component';

const routes: Routes = [
  { 
    path: '', 
    component: AuthComponent,
    children: [
      {path: 'login', component: LoginComponent}
    ]
  }
];

export const routing = RouterModule.forChild(routes);