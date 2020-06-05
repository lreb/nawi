import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateComponent } from '../../components/rate/rate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    RateComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule, // modules
  ],
  exports: [
    RateComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
