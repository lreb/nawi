import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersEditComponent } from './components/users-edit/users-edit.component';
import { UsersInfoComponent } from './components/users-info/users-info.component';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';

@NgModule({
  declarations: [
    UsersListComponent,
    UsersEditComponent,
    UsersInfoComponent],
  imports: [
    // CommonModule,
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
