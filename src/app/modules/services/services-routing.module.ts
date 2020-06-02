import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from 'src/app/components/services/services.component';
import { ServiceComponent } from 'src/app/components/service/service.component';
import { ServicesGuard } from 'src/app/shared/guards/services.guard';

const routes: Routes = [
  {
    path: 'services', component: ServicesComponent,
    // children: [

    //   { path: '', component: ServicesComponent },
    //   {
    //     path: 'services/:id',
    //     canActivate: [ServicesGuard],
    //     component:  ServiceComponent}
    //   ]
  },
  {
    path: 'service/:id',
    canActivate: [ServicesGuard],
    component:  ServiceComponent
  }



  // { path: 'services', component: ServicesComponent },
  // {
  //   path: 'services/:id',
  //   canActivate: [ServicesGuard],
  //   component: ServiceComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
