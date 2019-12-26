import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-grand1',
  template: `
    <p>
      grand1 works!
    </p>
    {{ sayHello() }}
  `,
  styleUrls: ['./grand1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Grand1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sayHello = () => {
    console.log('cd Grand1Component');
  }

}
