import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SendComponent } from './send/send.component';
import { RecieveComponent } from './recieve/recieve.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { TodoModule } from '../todo/todo.module';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { HttpClientModule } from '@angular/common/http';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
import { entityConfig } from './entity-metadata';


@NgModule({
  declarations: [
    AppComponent,
    SendComponent,
    RecieveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    TodoModule,
    EffectsModule.forRoot([AppEffects]),
    HttpClientModule,
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [
    {provide: DefaultDataServiceConfig , useValue: {
      root: 'https://nztodo.herokuapp.com/api/'
    }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
