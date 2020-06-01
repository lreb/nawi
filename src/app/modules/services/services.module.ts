import { NgModule } from '@angular/core';

import { ServicesRoutingModule } from './services-routing.module';
import { SharedModule } from '../../shared/modules/shared/shared.module';
// import { RateComponent } from 'src/app/shared/components/rate/rate.component';
import { ServiceComponent } from 'src/app/components/service/service.component';
import { ServicesComponent } from 'src/app/components/services/services.component';


@NgModule({
  declarations: [
    ServicesComponent,
    ServiceComponent
  ],
  imports: [
    SharedModule,
    ServicesRoutingModule
  ],
  exports: [
  ]
})
export class ServicesModule { }
