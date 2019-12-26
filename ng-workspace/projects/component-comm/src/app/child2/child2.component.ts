import { Component, OnInit, ContentChild } from '@angular/core';
import { MessageService } from '../message.service';
import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'app-child2',
  template: `
    <p>
      child2 works! {{msgService.message}}
    </p>

    <p>
      child2 works! {{msgService.anotherMessage$ | async}}
    </p>

    <ng-content>

    </ng-content>

    

  `,
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  @ContentChild(Child1Component, {static: true})
  instnceOfChild2InNgContent : Child1Component;

  constructor(public msgService : MessageService) { }

  ngOnInit() {
  }

}
