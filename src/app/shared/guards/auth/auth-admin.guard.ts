import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate, CanActivateChild {

  constructor(private authenticationService: AuthenticationService, private router: Router) {

  }

  canActivate(): boolean {
    if (this.authenticationService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['admin/auth/login']);
      return false;
    }
  }

  canActivateChild(): boolean {
    if (this.authenticationService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['admin/auth/login']);
      return false;
    }
  }

}
