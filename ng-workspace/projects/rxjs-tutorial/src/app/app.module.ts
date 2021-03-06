import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { HttpClientModule } from '@angular/common/http';
import { TestingStaticComponent } from './testing-static/testing-static.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    TestingStaticComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
