import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import ContactModule from './contact/contact.module';
import AuthModule from './auth/auth.module';

import {RestService} from './shared/rest.service';

import { routing } from './app.routing';

import { AppComponent }   from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
    declarations: [AppComponent, DashboardComponent],
    imports: [
      BrowserModule,
      ContactModule,
      AuthModule,
      routing,
      HttpModule,
      FormsModule
    ],
    bootstrap: [AppComponent],
    providers: [RestService]
})
export class AppModule {}