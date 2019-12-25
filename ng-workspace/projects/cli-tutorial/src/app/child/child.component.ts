import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h1>
      child works!
    </h1>
  `,
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
