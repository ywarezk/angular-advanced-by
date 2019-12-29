import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works! {{hello}}
    </p>
  `,
  styleUrls: ['./child.component.css'],
  providers: [
    { provide: 'hello', useValue: 'foo bar'}
  ]
})
export class ChildComponent implements OnInit {

  constructor(@Inject('hello') public hello) { }

  ngOnInit() {
  }

}
