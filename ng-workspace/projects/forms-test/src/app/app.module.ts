import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableComponent } from './mat-table/mat-table.component';
import { MyAddressComponent } from './my-address/my-address.component';

@NgModule({
  declarations: [
    AppComponent,
    MatTableComponent,
    MyAddressComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
