import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-login-reactive',
  template: `
    <form [formGroup]="loginFormGroup" (ngSubmit)="handleLogin()">
      <input type="text" name="email" formControlName="email" email  />
    </form>
  `,
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {

  // emailFormControl = new FormControl('')

  loginFormGroup = new FormGroup({
    email : new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

  handleLogin = () => {

  }

}
