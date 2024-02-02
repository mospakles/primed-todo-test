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
  on(actions.addToDoAction, (state, todo) => [...state, todo]),
  on(actions.updateToDoAction, (state, updatedTodo) => {
    const index = state.findIndex((todo) => todo.id === updatedTodo.id);
    if (index !== -1) {
      const newState = [...state];
      newState[index] = { ...newState[index], ...updatedTodo };
      return newState;
    }
    return state;
  }),
  on(actions.deleteToDoAction, (state, { id }) =>
    state.filter((todo) => todo.id !== id)
  )
);

export const todoSelector = createFeatureSelector<TodoModel[]>('todos');
