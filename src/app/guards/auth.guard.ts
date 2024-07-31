import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let user = localStorage.getItem('user') || null;
  let router = inject(Router);
  if (!user) {
    return router.navigate(['login']);
  }
  return true;
};
