import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-style-example',
  template: `
    <div class="app-style-example">
      <h1>
        style-example works!
      </h1>
      <app-child></app-child>
    </div>
    
  `,
  styleUrls: ['./style-example.component.scss'],
  // styles: [
  //   `
  //   .hello {
  //     color: red
  //   }
  //   `
  // ],
  encapsulation: ViewEncapsulation.None
})
export class StyleExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
