import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if(this.authService.user$.value?.name){
      return true;
    }
    else{
      this.router.navigateByUrl('/login');
      return false;
    }
  }

}
