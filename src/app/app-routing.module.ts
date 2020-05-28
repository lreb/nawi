import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';

/**
 * Routes configuration
 */
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contactus', component: ContactusComponent }
];
/**
 * Decorator for a moduel
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)], // set routes configuration
  exports: [RouterModule] // export routes aputside this module (used in module who imports this module)
})
export class AppRoutingModule { }
