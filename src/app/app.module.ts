import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import ContactModule from './contact/contact.module';
import AuthModule from './auth/auth.module';

import { routing } from './app.routing';

@NgModule({
    declarations: [AppComponent],
    imports: [
      BrowserModule,
      ContactModule,
      AuthModule,
      routing,
      HttpModule,
      FormsModule
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}