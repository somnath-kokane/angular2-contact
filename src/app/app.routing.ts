import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';

export const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'contact', loadChildren: 'app/contact/contact.module'},
  {path: 'auth', loadChildren: 'app/auth/auth.module'}
];

export const routing = RouterModule.forRoot(routes);
