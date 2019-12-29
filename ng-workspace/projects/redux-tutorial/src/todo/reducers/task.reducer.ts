import { Action } from '@ngrx/store';
import { Task } from '../task';
import {TaskActionTypes} from '../actions/task.actions';


export const taskFeatureKey = 'task';

export interface State {
  tasks: Task[]
}

export const initialState: State = {
  tasks: []
};

export function reducer(state = initialState, action: any): State {
  switch (action.type) {
    case TaskActionTypes.SetTasks:
      return {...state, tasks: action.tasks}
    default:
      return state;
  }
}
