import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataResolver } from './data.resolver';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent, resolve: { data: DataResolver } },
  { path: 'admin', canActivate: [AuthGuard], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

export const appRoutingProviders = provideRouter(routes);
