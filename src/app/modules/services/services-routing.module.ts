import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from 'src/app/components/services/services.component';
import { ServiceComponent } from 'src/app/components/service/service.component';
import { ServicesGuard } from 'src/app/shared/guards/services.guard';
import { EditServiceComponent } from './components/edit-service/edit-service.component';
import { EditTagsServiceComponent } from './components/edit-tags-service/edit-tags-service.component';
import { InfoServiceComponent } from './components/info-service/info-service.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent
  },
  {
    path: ':id',
    component: ServiceComponent,
    // resolve: { resolvedData: ProductResolver }
  },
  {
    path: ':id/edit',
    component: EditServiceComponent,
    // canDeactivate: [ProductEditGuard],
    // resolve: { resolvedData: ProductResolver },
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'info', component: InfoServiceComponent },
      { path: 'tags', component: EditTagsServiceComponent }
    ]
  }
  // { path: 'services', children: [
  //     { path: '', component: ServicesComponent },
  //     {
  //       path: ':id',
  //       canActivate: [ServicesGuard],
  //       component: ServiceComponent
  //       // resolve: {resolvedData: serviceResolver}
  //     },
  //     {
  //       path: ':id/edit',
  //       component: EditServiceComponent,
  //       // resolve: {resolvedData: serviceResolver},
  //       children: [
  //         { path: '', redirectTo: 'info', pathMatch: 'full' },
  //         { path: 'info', component: InfoServiceComponent },
  //         { path: 'tags', component: EditTagsServiceComponent }
  //       ]
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
