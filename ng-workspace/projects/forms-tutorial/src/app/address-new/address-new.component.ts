import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-address-new',
  template: `
    <form [formGroup]="addressForm" (ngSubmit)="handleSubmit()">
      <input type="text" placeholder="Address..." formControlName="address" />
      <lib-choose-city formControlName="city"></lib-choose-city>
      <button>submit</button>
    </form>
  `,
  styleUrls: ['./address-new.component.css']
})
export class AddressNewComponent implements OnInit {

  addressForm = new FormGroup({
    address : new FormControl(),
    city: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

  handleSubmit = () => {
    console.log(this.addressForm.value);
  }

}
