import { Routes } from '@angular/router';

  import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';

export const routes: Routes = [
  { path: 'protected', component: ProtectedComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
