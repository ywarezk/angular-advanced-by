import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {State as HelloState, reducer as helloReducer} from './hello.reducer';
import {reducer as userReducer, State as UserState} from './user.reducer';

export interface State {
  hello : HelloState;
  user : UserState;
}

export const reducers: ActionReducerMap<State> = {
  hello: helloReducer,
  user : userReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
