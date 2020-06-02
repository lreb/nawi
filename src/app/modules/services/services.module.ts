import { NgModule } from '@angular/core';
import { ServicesRoutingModule } from './services-routing.module';
import { SharedModule } from '../../shared/modules/shared/shared.module';
import { ServiceComponent } from 'src/app/components/service/service.component';
import { ServicesComponent } from 'src/app/components/services/services.component';
import { EditServiceComponent } from './components/edit-service/edit-service.component';


@NgModule({
  declarations: [
    ServicesComponent,
    ServiceComponent,
    EditServiceComponent
  ],
  imports: [
    SharedModule,
    ServicesRoutingModule
  ],
  exports: [
  ]
})
export class ServicesModule { }
