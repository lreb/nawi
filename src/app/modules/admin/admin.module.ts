import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';

/**
 * Decorator for a module
 */
@NgModule({
  declarations: [AdminComponent, UsersComponent],  // childs componnents
  imports: [
    CommonModule, // configure as child module
    AdminRoutingModule // set module routing configuration
  ]
})
export class AdminModule { } // export module
