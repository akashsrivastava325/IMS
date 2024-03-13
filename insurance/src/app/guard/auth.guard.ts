import { inject } from '@angular/core';
import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../shared/auth.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | UrlTree => {
  const authService = inject(AuthService);

  if (authService.isLoggedIn()) {
    return true; // Allow access if authenticated
  } else {
    return inject(Router).createUrlTree(['login']); // Return UrlTree for redirection
  }
};
