import { Injectable } from '@angular/core';
import { Actions, Effect, OnInitEffects, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';



@Injectable()
export class TodoEffects implements OnInitEffects {

  @Effect()
  initTasks$ : Observable<Action> = this.actions$.pipe(
    ofType('INIT_TODOS'),
    mergeMap((action) => this._http.get('https://nztodo.herokuapp.com/api/task/?format=json')),
    map((tasks) =>  )
  )


  ngrxOnInitEffects() {
    return {
      type: 'INIT_TODOS'
    }
  }

  constructor(private actions$: Actions, private _http : HttpClient) {}

}
