import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: 'hello', useValue: 'from stam module'}
  ]
})
export class StamModule {

  static forRoot(config : any) {

    return {

    }
  }

}
