import { Component, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-root',
  template: `
    <app-child1 [message]="myHelloObj" #child1></app-child1>
    <app-child2>
      <i class="stam" ></i>
      <div>
        <h1>hello from parent</h1>
        <p>
          {{title}}
        </p>  
        <app-child1 [message]="myHelloObj"></app-child1>
      </div>
      <i class="stam1" ></i>
    </app-child2>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('child1', {static: true})
  child1Instance : Child1Component;

  title = 'component-comm';

  myHelloObj = {hello : 'world'};

  ngOnInit() {
    setTimeout(() => {
      console.log('timer in app component');
      // this.myHelloObj.hello = 'foo bar';
      this.myHelloObj = {hello : 'foo bar'}
    }, 2000)

  }
}
