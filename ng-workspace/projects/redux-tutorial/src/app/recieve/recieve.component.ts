import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';
import {Store, select} from '@ngrx/store';
import {State} from '../reducers';


@Component({
  selector: 'app-recieve',
  template: `
    <h1>
      the message is: {{ message$ | async }}
    </h1>
  `,
  styleUrls: ['./recieve.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecieveComponent implements OnInit {

  data$ : Observable<any>

  message$ : Observable<string> = this._store$.pipe(
    select('hello', 'message')
  )

  constructor(private _messageService : MessageService, private _store$ : Store<State>) { }

  ngOnInit() {
    this.data$ = this._messageService.data$;
  }

}
