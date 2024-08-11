import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const checkAuthGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let user = localStorage.getItem('user');
  if (user) {
    return router.navigate(['dashboard']);
  }

  return true;
};
