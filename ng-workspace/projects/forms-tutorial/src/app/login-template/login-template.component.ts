import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-template',
  template: `
    <form #myForm="ngForm" (ngSubmit)="handleLogin(myForm)">
      <input type="text" name="email" ngModel required email />
    </form>
  `,
  styleUrls: ['./login-template.component.css']
})
export class LoginTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleLogin = (f : NgForm) => {
    // f.controls.email.value
  }

  

}
