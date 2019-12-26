import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-child2',
  template: `
    <p>
      child2 works!
    </p>
    <app-grand2 [message]="messageObj"></app-grand2>
    {{ sayHello() }}
  `,
  styleUrls: ['./child2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component implements OnInit {

  messageObj : any = {msg: 'hello world'}

  constructor() { }

  ngOnInit() {
    // setTimeout(() => {
    //   console.log('timer in child2');
    //   // this.messageObj = {msg: 'changed'};
    //   this.messageObj.msg = 'changed';
    // }, 1000);
  }

  sayHello = () => {
    console.log('cd Child2Component');
  }

}
