import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-address',
  template: `
    <form [formGroup]="addressForm">
      <div formArrayName="addresses">

        <div *ngFor="let group of addressForm.controls.addresses.controls" [formGroup]="group">
          <input type="text" name="city" formControlName="city" />
          <input type="text" name="address" formControlName="address" />
        </div>

      </div>
      <button (click)="addAddress()">more address</button>
    </form>
  `,
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addressForm = this._formBuilder.group({
    addresses: this._formBuilder.array([
      this._formBuilder.group({
        city: '',
        address: ''
      })
    ])
  })


  constructor(private _formBuilder : FormBuilder) { }

  ngOnInit() {
  }

  addAddress = () => {
    (this.addressForm.controls.addresses as FormArray).push(this._formBuilder.group({
      city: '',
      address: ''
    }))
  }

}
