import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StamService } from './stam.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ChildComponent } from './child/child.component';
import { StamModule } from '../stam/stam.module';
import { StamService2 } from './stam2.service';
import { AuthModule } from '../auth/auth.module';
import { UserServiceConfig } from '../auth/url.token';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StamModule,
    AuthModule
  ],
  providers: [
    // StamService,
    { provide: 'hello', useValue: 'world', multi: true },
    { provide : StamService, useExisting: StamService2},
    { provide : StamService2, useExisting: StamService2},
    
    { provide : 'foo', deps: [HttpClient] ,useFactory: (http) => {
      return new StamService2(http, 'my custom string');
    }},
    {
      provide: UserServiceConfig, useValue: {
        url: 'https://academeez-login-ex.herokuapp.com/api/users/login'
      }
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
