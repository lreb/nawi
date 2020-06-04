import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersEditComponent } from './components/users-edit/users-edit.component';
import { UsersInfoComponent } from './components/users-info/users-info.component';
import { UserResolver } from './users-resolver.services';


const routes: Routes = [
  { path: '', component: UsersListComponent, resolve: { resolvedUser: UserResolver} },
  { path: ':id/edit', component: UsersEditComponent },
  { path: ':id/view', component: UsersInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
