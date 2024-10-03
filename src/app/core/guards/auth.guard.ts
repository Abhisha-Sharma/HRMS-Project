import { inject } from '@angular/core';
import { CanActivateFn, CanDeactivateFn, Router } from '@angular/router';
import { AuthService } from '../../features/public/services/services/auth.service';


// createUrlTree

export const publicGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.isLoggedIn() ? router.createUrlTree(['/', 'admin']) : true;
};

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);
  return authService.isLoggedIn() ? true : router.createUrlTree(['/', 'login']);
};


// export const deGuard: CanDeactivateFn<unknown> = (...state) => {
//   console.log({ state })
//   const router = inject(Router);
//   const authService = inject(AuthService);
//   return !authService.isLoggedIn() ? router.createUrlTree(['/', 'login']) : false;
// };
