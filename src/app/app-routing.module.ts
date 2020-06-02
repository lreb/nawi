import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './components/contactus/contactus.component';
// import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';
// import { ServiceComponent } from './components/service/service.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { ServicesGuard } from './shared/guards/services.guard';

/**
 * Routes configuration
 */
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  // { path: 'services', loadChildren: './modules/services/services.module#ServicesModule' },
  {
    path: 'services',
    loadChildren: () =>
      import('./modules/services/services.module').then(m => m.ServicesModule)
  },
  { path: 'contactus', component: ContactusComponent },
  { path: '**', component: NotFoundComponent }
];
/**
 * Decorator for a moduel
 */
@NgModule({
  imports: [RouterModule.forRoot(routes
    // , {enableTracing: true} enalbe this for debug routing
    )
  ], // set routes configuration
  exports: [RouterModule] // export routes aputside this module (used in module who imports this module)
})
export class AppRoutingModule { }
