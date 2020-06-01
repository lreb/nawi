import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';
import { AdminModule } from './modules/admin/admin.module';
import { FormsModule } from '@angular/forms';
import { ContactusFormComponent } from './components/contactus-form/contactus-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ConvertToSpacesPipe } from './shared/pipes/convert-to-spaces.pipe';
import { RateComponent } from './shared/components/rate/rate.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServiceComponent } from './components/service/service.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';

@NgModule({ // decorator
  declarations: [ // childs componnents, pipes
    AppComponent,
    ContactusComponent,
    ServicesComponent,
    HomeComponent,
    ContactusFormComponent,
    ConvertToSpacesPipe,
    RateComponent,
    NotFoundComponent,
    ServiceComponent // declare pipe
  ],
  imports: [ // dependencies, modules, 3th party software
    BrowserModule, // imports directives (ngFor, ngIf, etc)
    AppRoutingModule, // routing calls configuration
    AdminModule, // aditional module
    FormsModule, // imports diretcives (ngModule)
    HttpClientModule, // rest calls
    FontAwesomeModule, AuthenticationModule // imporst
  ],
  providers: [], // no recommend, instead use declaration Injectable -> providedIn
  bootstrap: [AppComponent] // main component to load
})
export class AppModule { } // name of component
