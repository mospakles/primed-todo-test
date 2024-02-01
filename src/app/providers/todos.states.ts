import { Title } from '@angular/platform-browser';

export interface TodoModel {
  id: number;
  title: string;
  completed: boolean;
}

export let todos: TodoModel[] = [

];
