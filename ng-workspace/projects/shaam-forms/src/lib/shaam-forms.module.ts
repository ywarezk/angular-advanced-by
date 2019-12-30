import { NgModule } from '@angular/core';
import { ChooseCityComponent } from './choose-city/choose-city.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ChooseCityComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [ChooseCityComponent]
})
export class ShaamFormsModule { }
