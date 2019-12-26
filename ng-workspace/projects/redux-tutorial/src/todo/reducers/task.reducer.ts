import { Action } from '@ngrx/store';
import { Task } from '../task';


export const taskFeatureKey = 'task';

export interface State {
  tasks: Task[]
}

export const initialState: State = {
  tasks: []
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
