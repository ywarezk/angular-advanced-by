import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  template: `
    <ul>
      <li *ngFor="let item of (tasks$ | async)">
      {{item.title}}
      </li>
    </ul>
  `,
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks$ : Observable<any>;

  constructor(private _http : HttpClient) { }

  ngOnInit() {
    this.tasks$ = this._http.get('https://nztodo.herokuapp.com/api/task/?format=json');
  }

}
