import { Component } from '@angular/core';
import { AuthService } from '@nx-ng-fme/shared';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'nx-ng-fme-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user$ = this.authService.user$;
  isLoggedIn$ = this.user$.pipe(map((user) => Boolean(user)));

  constructor(private authService: AuthService, private router: Router) {}

  logOut(){
    this.authService.setUser("");
    this.isLoggedIn$ = this.user$.pipe(map((user) => false));
    this.router.navigateByUrl('/home');
  }
}
