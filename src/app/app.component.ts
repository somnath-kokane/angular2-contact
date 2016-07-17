import { Component, OnInit } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  //moduleId: module.id,
  selector: 'my-app',
  template: require('./app.component.html!'),
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent implements OnInit {
  title = 'Angular 2';
  constructor() {}

  ngOnInit() {
    
  }
}
  