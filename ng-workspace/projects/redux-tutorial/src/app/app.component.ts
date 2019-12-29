import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {EntityCollectionServiceFactory, EntityCollectionService} from '@ngrx/data';
import { Task } from '../todo/task';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <app-send></app-send>
    <app-recieve></app-recieve>
    <div *ngIf="loaded$ | async">Loading...</div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'redux-tutorial';
  private _taskService : EntityCollectionService<Task>
  loaded$ : Observable<boolean>;

  firstName$ = this._store.pipe(
    select('user', 'firstName')
  )

  ngOnInit() {
    this._taskService.getAll();
    // this._taskService.errors$
    // this._taskService.loaded$
    this.loaded$ = this._taskService.loading$;
  }

  constructor(private _store : Store<any>, private _serviceFactory : EntityCollectionServiceFactory) {
    this._taskService = this._serviceFactory.create('Task');
  }
}

