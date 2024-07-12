import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ProtectedComponent } from './protected/protected.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
