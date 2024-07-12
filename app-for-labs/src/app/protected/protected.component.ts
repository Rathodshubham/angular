import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-protected',
  standalone: true,
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css'],
  imports: [CommonModule]
})
export class ProtectedComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
