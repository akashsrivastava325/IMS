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
export class UserGuard implements CanActivate {
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

    if (role === 'user') {
      this.router.navigate(['/user-landing']);
      return true;
    } else {
      if (role === 'admin') this.router.navigate(['/unauthorized']);
      else this.router.navigate(['/login']);
      return false;
    }
  }
}
