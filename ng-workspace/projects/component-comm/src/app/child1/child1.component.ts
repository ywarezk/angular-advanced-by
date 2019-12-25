import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-child1',
  template: `
    <p>
      child1 works!
      {{message.hello}}
    </p>

    <p (click)="title='hello'">
      
      {{ stamRandom() }}

    </p>
    <button (click)="sendToChild2()">send message to child2</button>
  `,
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit, OnChanges {
  @Input()
  message : {hello : string};

  constructor(private _msgService : MessageService) { }

  stamRandom = () => {
    // this.message = {hello: 'foo'};

    // return Math.random();
  }

  ngOnInit() {

  }

  // will it jump when app changes the message obj ?
  // ===  
  ngOnChanges(changes : SimpleChanges) {
    console.log(changes.message);
  }

  sendToChild2 = () => {
    this._msgService.message = 'foo bar';

    this._msgService.anotherMessage$.next('foo bar through subject');
  }

}
