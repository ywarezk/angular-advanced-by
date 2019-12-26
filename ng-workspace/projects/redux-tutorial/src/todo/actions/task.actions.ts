import { Action } from '@ngrx/store';
import { Task } from '../task';

export enum TaskActionTypes {
  SetTasks = '[Task] Set Tasks',
  
  
}

export class SetTasks implements Action {
  readonly type = TaskActionTypes.SetTasks;
  constructor(public tasks: Task[]) {}
}


export type TaskActions = SetTasks;
