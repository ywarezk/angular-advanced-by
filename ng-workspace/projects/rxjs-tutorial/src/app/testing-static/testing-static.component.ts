import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';

declare var window : any;

@Component({
  selector: 'app-testing-static',
  template: `
    <p>
      testing-static works!
    </p>
    <ng-container *ngIf="switchMe">
      <app-autocomplete></app-autocomplete>
    </ng-container>

    <app-autocomplete></app-autocomplete>
  `,
  styleUrls: ['./testing-static.component.css']
})
export class TestingStaticComponent implements OnInit, AfterViewInit {
  switchMe = true;

  // static true means before cd happens
  @ViewChild(AutocompleteComponent, {static: false})
  autoComplete : AutocompleteComponent;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.switchMe = false;
    }, 1000);

    setTimeout(() => {
      const newTemp = this.autoComplete;

      // depends on the static: true
      console.log(newTemp === window.temp)
    }, 2000);
  }

  ngAfterViewInit() {
    window.temp = this.autoComplete;
  }

}
