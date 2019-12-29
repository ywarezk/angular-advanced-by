import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { validatePasswordsCreator } from '../validators/validate-password';

@Component({
  selector: 'app-register-reactive',
  template: `
    <form [formGroup]="registerForm" (ngSubmit)="handleRegister()">
      <input placeholder="email" type="email" name="email" formControlName="email" />
      
      <div formGroupName="passwords" [passwordRepeat]="['password', 'repeat']">
        <input type="password" placeholder="password" name="password" formControlName="password" />
        <input type="password" name="repeat" formControlName="repeat" placeholder="repeat" />        
        <div *ngIf="registerForm.controls.passwords.errors?.repeatFail">
          passwords do not match
        </div>
      </div>
      <button>Register</button>

    </form>
  `,
  styleUrls: ['./register-reactive.component.css']
})
export class RegisterReactiveComponent implements OnInit {

  registerForm = new FormGroup({
    email : new FormControl(),
    passwords: new FormGroup({
      password: new FormControl(),
      repeat: new FormControl()
    },/* [validatePasswordsCreator('password', 'repeat')]*/)
  })

  constructor() { }

  ngOnInit() {
  }

  handleRegister = () => {
    console.log(this.registerForm.value);
  }

  // do not place validation function attached to component
  // lets be generic
  // validatePasswords = (control : FormGroup) => {
  //   return null;
  // }

}
