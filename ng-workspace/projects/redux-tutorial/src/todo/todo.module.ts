import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './todo.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTodo.todoFeatureKey, fromTodo.reducers, { metaReducers: fromTodo.metaReducers }),
    EffectsModule.forFeature([TodoEffects])
  ]
})
export class TodoModule { }
