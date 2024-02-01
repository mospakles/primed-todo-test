import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoModel } from '../../providers/todos.states';
import { todoSelector } from '../../providers/todos.reducers';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {
  todos: TodoModel[] = [];

  constructor(private store: Store) {

  }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.store.select(todoSelector).subscribe((state) => this.todos = state);
  }

}
