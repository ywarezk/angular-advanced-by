import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `
    <p>
      child1 works!
    </p>
    <app-grand1></app-grand1>
    {{ sayHello() }}
  `,
  styleUrls: ['./child1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sayHello = () => {
    console.log('cd Child1Component');
  }
}
