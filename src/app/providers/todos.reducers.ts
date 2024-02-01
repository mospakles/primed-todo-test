import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { actions } from './todos.actions';
import { TodoModel, todos } from './todos.states';

export const todoReducer = createReducer(
  todos,
  on(actions.addToDoAction, (state, todo) => {
    return [todo, ...state];
  }),
  on(actions.updateToDoAction, (state, todo) => {
      let tempTodoIndex = state.findIndex((t) => t.id === todo.id);
      var tempStates = [...state];
    if (tempTodoIndex !== -1) {
      state[tempTodoIndex] = todo;
    }
    return [...state];
  }),
  on(actions.deleteToDoAction, (state, todo) => {
    let todos = state.filter((t) => t.id != todo.id);
    return [...todos];
  })
);

export const todoSelector = createSelector(
  createFeatureSelector('todos'),
  (todos: TodoModel[]) => todos
);
