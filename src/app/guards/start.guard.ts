import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const startGuard: CanActivateFn = (route, state) => {
  const aService = inject(AuthService);
  const router = inject(Router);

  if (!aService.isUserLogged) {
    return true;
  }else{
    router.navigate(["/homepage"]);
    return false;
  }
};
