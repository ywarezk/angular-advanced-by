import { Action } from '@ngrx/store';

export enum HelloActionTypes {
  SetMessage = '[Hello] Set Message',
  
  
}

export class SetMessage implements Action {
  readonly type = HelloActionTypes.SetMessage;

  constructor(public message : string) {}
}


export type HelloActions = SetMessage;
