import { Component, OnInit } from '@angular/core';

import './rxjs-operators';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: require('./app.component.html!')
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    
  }
}