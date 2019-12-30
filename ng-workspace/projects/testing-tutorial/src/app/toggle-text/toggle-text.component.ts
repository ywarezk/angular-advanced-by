import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-text',
  template: `
    <p *ngIf="isVisible">
      toggle-text works!
    </p>
    <button  (click)="toggleText()">
      ToggletText
    </button>
  `,
  styleUrls: ['./toggle-text.component.css']
})
export class ToggleTextComponent implements OnInit {
  isVisible = true;

  constructor() { }

  ngOnInit() {
  }

  toggleText = () => {
    this.isVisible = !this.isVisible;
  }

}
