import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class IsAdminGuard implements CanActivate {
  constructor (private auth: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    if (this.auth.getRole() === 'admin') {
      return true;
    }
    return false;
  }
}
