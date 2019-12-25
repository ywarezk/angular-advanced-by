import { Component, OnInit, ContentChild } from '@angular/core';
import { MessageService } from '../message.service';

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
  @ContentChild(Child2Component, {static: true})
  instnceOfChild2InNgContent : Child2Component;

  constructor(public msgService : MessageService) { }

  ngOnInit() {
  }

}
