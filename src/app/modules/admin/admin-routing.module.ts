import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';

/**
 * Set routes configuration for this child module
 */
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: UsersComponent },
      { path: 'users', component: UsersComponent }
    ]
  }
];
/**
 * Decorator
 */
@NgModule({
  imports: [RouterModule.forChild(routes)], // routes configuration
  exports: [RouterModule] // exports this module
})
export class AdminRoutingModule { }
