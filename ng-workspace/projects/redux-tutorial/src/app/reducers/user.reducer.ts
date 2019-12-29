import { Action } from '@ngrx/store';
import {UserActionTypes} from '../actions/user.actions';


export const userFeatureKey = 'user';

export interface State {
  // user : User
  firstName : string;
}

export const initialState: State = {
  firstName: 'EliSheva'
};

export function reducer(state = initialState, action: any): State {
  switch (action.type) {
    case UserActionTypes.SetFirstName:
      return {...state, firstName : action.newName}
    default:
      return state;
  }
}
