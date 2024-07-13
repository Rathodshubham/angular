import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ChildComponent } from '../child/child.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'child', component: ChildComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), AdminComponent, ChildComponent],
 
})
export class AdminModule {}
