import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material';
import { ParentComponent } from './parent/parent.component';


@NgModule({
  declarations: [UserComponent, DashboardComponent, ParentComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatTabsModule
    // HttpClientModule
  ]
})
export class SettingsModule { }
