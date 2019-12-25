import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-login',
  template: `
    <form>
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
    </form>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output()
  userLoggedIn : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
