import { Action } from '@ngrx/store';

export enum UserActionTypes {
  SetFirstName = '[User] Set First Name',
}

export class SetFirstName implements Action {
  readonly type = UserActionTypes.SetFirstName;

  constructor(public newName : string) {}
}


export type UserActions = SetFirstName;
