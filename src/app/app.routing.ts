import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {path: 'contact', loadChildren: 'app/contact/contact.module'},
  {path: 'auth', loadChildren: 'app/auth/auth.module'}
];

export const routing = RouterModule.forRoot(routes);
