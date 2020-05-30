import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServicesGuard } from './shared/guards/services.guard';

/**
 * Routes configuration
 */
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/:id', canActivate: [ServicesGuard], component: ServiceComponent }, // ,
  { path: 'contactus', component: ContactusComponent },
  { path: '**', component: NotFoundComponent }
];
/**
 * Decorator for a moduel
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)], // set routes configuration
  exports: [RouterModule] // export routes aputside this module (used in module who imports this module)
})
export class AppRoutingModule { }
