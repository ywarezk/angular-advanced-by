import { Action } from '@ngrx/store';
import {HelloActionTypes, HelloActions} from '../actions/hello.actions';


export const helloFeatureKey = 'hello';

export interface State {
  message : string;
}

export const initialState: State = {
  message : 'initial message',
  // users: {
  //   stam: [1,2,3]
  // }
};

export function reducer(state = initialState, action: HelloActions): State {
  switch (action.type) {
    case HelloActionTypes.SetMessage:
      // state.message = action.message
      return {...state, message: action.message}
    default:
      return state;
  }
}
