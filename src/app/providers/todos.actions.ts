import { createAction, props } from '@ngrx/store';
import { TodoModel } from './todos.states';

const addToDoAction = createAction('[TODO] ADD_TODO', props<TodoModel>());
const updateToDoAction = createAction('[TODO] UPDATE_TODO', props<TodoModel>());
const deleteToDoAction = createAction('[TODO] DELETE_TODO', props<TodoModel>());

export const actions = { addToDoAction, updateToDoAction, deleteToDoAction };
