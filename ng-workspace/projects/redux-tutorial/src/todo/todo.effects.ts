import { Injectable } from '@angular/core';
import { Actions, Effect, OnInitEffects, ofType } from '@ngrx/effects';
import { mergeMap, filter, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import {Router, NavigationEnd} from '@angular/router';
import { SetTasks } from './actions/task.actions';


@Injectable()
export class TodoEffects implements OnInitEffects {

  @Effect()
  initTasks$ : Observable<Action> = this.actions$.pipe(
    ofType('INIT_TODOS'),
    mergeMap((action) => this._http.get('https://nztodo.herokuapp.com/api/task/?format=json')),
    map((tasks : any) => new SetTasks(tasks) )
  )

  // @Effect()
  // initTabs$ : Observable<Action> = this._router.events.pipe(
  //   filter((event) => event instanceof NavigationEnd),
  //   filter((event : NavigationEnd) => event.url === '/tabs'),
  //   mergeMap((event : NavigationEnd) => this._http.get('...')),
  //   map((tabsData) => new SetTabsData(tabsData))
  // )


  ngrxOnInitEffects() {
    return {
      type: 'INIT_TODOS'
    }
  }

  constructor(private actions$: Actions, private _http : HttpClient /*, private _router : Router*/) {}

}
