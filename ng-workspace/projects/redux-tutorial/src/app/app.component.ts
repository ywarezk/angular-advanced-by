import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-send></app-send>
    <app-recieve></app-recieve>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-tutorial';
}
