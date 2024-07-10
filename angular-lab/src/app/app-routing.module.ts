import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UserComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'customers', loadChildren: () => import('./customer.module').then(m => m.CustomerModule) },
    { path: '**', redirectTo: '' }
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
