import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

class Address {

}

@Component({
  selector: 'my-address',
  template: `
    <div [formGroup]="">
      <input type="text" required minlength="5" formControlName="" />
      <input type="text" required />
    </div>
    
  `,
  styleUrls: ['./my-address.component.css']
})
export class MyAddressComponent implements OnInit {

  addressGroup = new FormGroup({
    
  })

  constructor() { }

  ngOnInit() {
  }

}
