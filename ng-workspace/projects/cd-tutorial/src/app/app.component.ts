import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


declare var window : any;

window.stamObj = {message: 'hello'}

@Component({
  selector: 'app-root',
  template: `
    <app-child1></app-child1>
    <app-child2></app-child2>

    {{ sayHello() }}
  `,
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = window.stamObj

  ngOnInit() {
    


    // setTimeout(() => {
    //   window.stamObj.message = 'world';
    // }, 1000);

  }


  sayHello = () => {
    console.log('cd AppComponent');
  }
}

// setTimeout(() => {
//   console.log('timer');
//   window.stamObj.message = 'world';
// }, 1000);
