import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions } from '../../providers/todos.actions';
import { TodoModel } from '../../providers/todos.states';
import { todoSelector } from '../../providers/todos.reducers';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.scss',
})
export class TodoInputComponent implements OnInit {
  todoInput: TodoModel = {
    id: 0,
    title: '',
    description: '',
    dueDate: '',
    status: 'open',
  };
  todos?: TodoModel[];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(todoSelector).subscribe((state) => (this.todos = state));
  }

  addTodo(): void {
    if (this.todoInput.title.trim().length > 0) {
      this.store.dispatch(
        actions.addToDoAction({
          id: this.todos!.length,
          title: this.todoInput.title.trim(),
          description: this.todoInput.description.trim(),
          dueDate: this.todoInput.dueDate.trim(),
          status: this.todoInput.status,
        })
      );
      this.resetForm();
    }
  }

  private resetForm(): void {
    this.todoInput = {
      id: 0,
      title: '',
      description: '',
      dueDate: '',
      status: 'open',
    };
  }
}
