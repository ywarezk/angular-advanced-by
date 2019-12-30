import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterReactiveComponent } from './register-reactive/register-reactive.component';
import { PasswordRepeatDirective } from './password-repeat.directive';
import { AddressComponent } from './address/address.component';
import {ShaamFormsModule} from 'shaam-forms';
import { HttpClientModule } from '@angular/common/http';
import { AddressNewComponent } from './address-new/address-new.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginTemplateComponent,
    LoginReactiveComponent,
    RegisterReactiveComponent,
    PasswordRepeatDirective,
    AddressComponent,
    AddressNewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ShaamFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
