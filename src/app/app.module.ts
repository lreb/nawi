import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { AdminModule } from './modules/admin/admin.module';
import { FormsModule } from '@angular/forms';
import { ContactusFormComponent } from './components/contactus-form/contactus-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ConvertToSpacesPipe } from './shared/pipes/convert-to-spaces.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';
// removed for lazy loadig
// import { ServicesModule } from './modules/services/services.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageModule } from './modules/messages/message.module';
import { UsersModule } from './modules/users/users.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiHeaderInterceptor } from './shared/services/api-header.interceptor';
import { ApiResponseInterceptor } from './shared/services/api-response.interceptor';
import { SharedModule } from './shared/modules/shared/shared.module';

@NgModule({ // decorator
  declarations: [ // childs componnents, pipes
    AppComponent,
    ContactusComponent,
    // ServicesComponent,
    HomeComponent,
    ContactusFormComponent,
    ConvertToSpacesPipe,
    // RateComponent,
    NotFoundComponent
  ],
  imports: [ // dependencies, modules, 3th party software
    BrowserModule, // imports directives (ngFor, ngIf, etc)
    BrowserAnimationsModule,
    HttpClientModule, // rest calls
    SharedModule,
    // FormsModule, // imports diretcives (ngModule)
    // FontAwesomeModule, // modules
    AuthenticationModule,
    // ServicesModule, // removed for lazy loadig
    AdminModule, // aditional module
    MessageModule,
    UsersModule,
    AppRoutingModule// routing calls configuration
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiHeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiResponseInterceptor, multi: true }
  ], // no recommend, instead use declaration Injectable -> providedIn
  bootstrap: [AppComponent] // main component to load
})
export class AppModule { } // name of component
