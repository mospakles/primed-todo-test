import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions } from '../../providers/todos.actions';
import { TodoModel } from '../../providers/todos.states';
import { todoSelector } from '../../providers/todos.reducers';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.scss'
})
export class TodoInputComponent implements OnInit {
  todoInput?: string;
  todos?: TodoModel[];
  constructor(private store: Store) { }
  ngOnInit(): void {
    this.store.select(todoSelector).subscribe(state => this.todos = state);
  }

  addTodo() {
    if(this.todoInput!.trim().length > 0)
    this.store.dispatch(actions.addToDoAction(
      {
        id: this.todos!.length,
        completed: false,
        title: this.todoInput!.trim(),
      }
    ))
    this.todoInput = " ";
  }
  
 }
