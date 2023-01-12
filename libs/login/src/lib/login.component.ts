import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@nx-ng-fme/shared';

@Component({
  selector: 'nx-ng-fme-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  name: string | undefined;
  password: string | undefined;
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (!this.name || this.name.trim() === '') {
      this.error = 'You must enter a name!';
      return;
    }

    if (!this.password || this.password.trim() === '') {
      this.error = 'You must enter a password!';
      return;
    }

    if (this.password !== 'password') {
      this.error = 'The password is password...';
      return;
    }

    this.authService.setUser(this.name);
    this.router.navigateByUrl('/products');
  }
}
