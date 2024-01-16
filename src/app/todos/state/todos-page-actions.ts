import { createAction, props } from "@ngrx/store";
import {Todo} from '../model';

export const init = createAction('[Todos page] Init');

export const addTodo = createAction(
  '[Todos page] Add Todo',
  props<{ todo: Todo}>()
);

export const removeTodo = createAction(
  '[Todos page] Remove Todo',
  props<{ todo: Todo}>()
);


export const markAsCompleted = createAction(
  '[Todos page] Mark As Completed',
  props<{ todo: Todo}>()
);

export const markAsPending = createAction(
  '[Todos page] Mark As Pending',
  props<{ todo: Todo}>()
);

export const clearCompleted = createAction('[Todos Page] Clear ccompleted');
