import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SettingsModule } from '../settings/settings.module';


const routes: Routes = [
  {
    path: 'settings',
    // loadChildren: '../settings/settings.module#SettingsModule'
    loadChildren: () => {
      // not lazy loaded
      // return SettingsModule

      // for lazy loading we want to return Promise<SettingsModule>

      // Promise<{SettingsModule: class SettingsModule...}> => Promise<SettingsModule>
      return import('../settings/settings.module').then((moduleObj) => {
        return moduleObj.SettingsModule;
      })
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
