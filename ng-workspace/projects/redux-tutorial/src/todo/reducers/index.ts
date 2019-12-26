import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {State as TaskState, reducer as taskReducer} from './task.reducer';

export const todoFeatureKey = 'todo';

export interface State {
  task : TaskState
}

export const reducers: ActionReducerMap<State> = {
  task : taskReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
