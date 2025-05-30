import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthenticationService} from './services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {
  }

  canActivate():boolean {
    if(!this.authService.isLoggedIn()) {
    this.router.navigate(['/']);
 //   alert(this.authService.isLoggedIn());
      return false;
    }
    return true;
  }
}


