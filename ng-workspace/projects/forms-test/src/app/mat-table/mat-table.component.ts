import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgModel, ControlContainer } from '@angular/forms';

@Component({
  selector: 'mat-table',
  template: `
    <table >
      <th>
        <tr>
          <td>id</td>
          <td>title</td>
        </tr>
      </th>
      <tr *ngFor="let group of parent.control.controls" [formGroup]="group">
        <td>
          <input type="text" formControlName="id"  />
        </td>
        <td>
          <input type="text" formControlName="title"  />
        </td>
      </tr>
    </table>
  `,
  styleUrls: ['./mat-table.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MatTableComponent), multi: true}
  ]
})
export class MatTableComponent implements OnInit, ControlValueAccessor {
  private _onChange : any;
  private _onTouched : any;

  constructor(public parent : ControlContainer) {
    console.log(parent);
  }

  ngOnInit() {
  }

  writeValue(value) {

  }

  registerOnChange(fn) {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

}
