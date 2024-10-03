import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/features/public/services/services/auth.service';

export const adminRoleGuard: CanActivateFn = (route, state) => {
  const role = localStorage.getItem('role');
  const router = inject(Router);
  if (role === 'Admin') {
    return true;
  } else {
    router.navigate(['/not-found']);
    return false;
  }
};
