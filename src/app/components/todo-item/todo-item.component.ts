import { Component, Input, OnInit } from '@angular/core';
import { TodoModel } from '../../providers/todos.states';
import { Store } from '@ngrx/store';
import { actions } from './../../providers/todos.actions';
import { DatepickerOptions } from 'ng2-datepicker';
import { getYear } from 'date-fns';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo?: TodoModel;
  editTodo: boolean = false;
  completeTodo: boolean = false;
  todoInput: TodoModel = {
    id: 0,
    title: '',
    description: '',
    dueDate: '',
    status: 'open',
  };

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.todoInput = { ...this.todo! };
  }

  updateToggle(): void {
    this.editTodo = !this.editTodo;
  }

  updateTodo(): void {
    if (this.todoInput.title.trim().length > 0) {
      this.store.dispatch(actions.updateToDoAction({ ...this.todoInput }));
      this.editTodo = false;
    }
  }

  deleteTodo(): void {
    this.store.dispatch(actions.deleteToDoAction(this.todo!));
  }
}
