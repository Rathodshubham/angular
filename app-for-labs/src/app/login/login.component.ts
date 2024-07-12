import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  private authService = inject(AuthService);
  private router = inject(Router);

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      () => {
        this.router.navigate(['protected']);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}
