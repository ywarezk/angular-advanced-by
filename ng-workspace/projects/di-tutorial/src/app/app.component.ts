import { Component, Inject } from '@angular/core';
import { StamService } from './stam.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ helloFromDi }}</h1>
    <app-child></app-child>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'di-tutorial';

  constructor(private _stamService : StamService, @Inject('hello') public helloFromDi) {

  }
}
