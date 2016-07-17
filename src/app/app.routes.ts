
import { provideRouter, RouterConfig} from '@angular/router';

import { contactRoutes } from './contact/contact.routes';
import { authRoutes } from './auth/auth.routes';

export const routes: RouterConfig = [
  ...contactRoutes,
  ...authRoutes
]

export const appRouterProviders = [
  provideRouter(routes)
];