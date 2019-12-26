import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MessageService } from '../message.service';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { SetMessage } from '../actions/hello.actions';

@Component({
  selector: 'app-send',
  template: `
    <form (ngSubmit)="changeData()">
      <input name="message" [(ngModel)]="newMessage" type="text" />
      <button>Submit</button>
    </form>
  `,
  styleUrls: ['./send.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SendComponent implements OnInit {
  newMessage = '';

  constructor(private _messageService : MessageService, private _store$ : Store<State>) { }

  ngOnInit() {
  }

  changeData = () => {
    // this._messageService.data$.next( { message : this.newMessage} );

    this._store$.dispatch(new SetMessage(this.newMessage));
  }

}
