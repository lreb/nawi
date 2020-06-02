import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from 'src/app/components/services/services.component';
import { ServiceComponent } from 'src/app/components/service/service.component';
import { ServicesGuard } from 'src/app/shared/guards/services.guard';
import { EditServiceComponent } from './components/edit-service/edit-service.component';

const routes: Routes = [
  { path: 'services', component: ServicesComponent },
  { path: 'service/:id', canActivate: [ServicesGuard], component: ServiceComponent },
  { path: 'service/:id/edit', component: EditServiceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
