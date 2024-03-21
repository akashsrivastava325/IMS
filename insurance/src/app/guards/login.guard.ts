import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const role = localStorage.getItem('role'); // Use AuthService to retrieve role

    if (role === 'user' || role === 'admin') {
      if (role === 'user') this.router.navigate(['/user-landing']);
      else this.router.navigate(['/admin/landing']);
      return false;
    } else {
      return true;
    }
  }
}
