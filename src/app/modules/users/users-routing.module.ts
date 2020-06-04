import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersEditComponent } from './components/users-edit/users-edit.component';
import { UsersInfoComponent } from './components/users-info/users-info.component';


const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: ':id/edit', component: UsersEditComponent },
  { path: ':id/view', component: UsersInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
