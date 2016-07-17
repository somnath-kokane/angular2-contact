import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  appRouterProviders
  ])
  .then(success => console.log(`Bootstrap success`))
  .catch(error => console.log(error));

  