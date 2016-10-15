
import { Component, OnInit } from '@angular/core';

import {AuthService} from '../auth.service';

@Component({
  moduleId: module.id,
  selector: 'logout',
  template: ''
})
export class LogoutComponent implements OnInit {
  constructor(
    private auth: AuthService) {}

  ngOnInit() {
    this.auth.logout();
  }


}