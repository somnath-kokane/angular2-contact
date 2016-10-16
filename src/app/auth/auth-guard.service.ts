import {Injectable} from '@angular/core';
import {Router,Route, 
  CanActivate, CanLoad,
  ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
    ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url = state.url;
    return this.checkLogin(url);
  }

  canLoad(route: Route): boolean {
    let url: string = `/${route.path}`;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    console.log('checkLogin')
    if(AuthService.isLoggedIn()){
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }

}