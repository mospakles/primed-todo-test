import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoModel } from '../../providers/todos.states';
import { todoSelector } from '../../providers/todos.reducers';
import { actions } from '../../providers/todos.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  todos: TodoModel[] = [];
  selectedFilter: string = 'all';
  selectedSort: string = 'default';

  constructor(private store: Store) {
    this.store.select(todoSelector).subscribe((state) => (this.todos = state));
  }

  ngOnInit(): void {
    this.loadTodos();
  }

  getTasks(status: string): TodoModel[] {
    if (this.selectedFilter === 'all' || this.selectedFilter === status) {
      return this.todos?.filter((task) => task.status === status) || [];
    }
    return [];
  }

  onDrop(event: any): void {
    const { item, container, previousContainer, currentIndex, previousIndex } =
      event;
    if (container === previousContainer && currentIndex === previousIndex) {
      return;
    }

    const updatedTask: TodoModel = {
      ...item.data,
      status: container.element.nativeElement.getAttribute('cdkDropListData'),
    };

    this.store.dispatch(actions.updateToDoAction(updatedTask));
  }

  loadTodos() {
    this.store.dispatch(actions.loadTodosAction());
  }

  setFilter(filter: string): void {
    this.selectedFilter = filter;
    this.applyFilter();
  }

  applyFilter(): void {
    if (this.selectedFilter !== 'all') {
      this.todos = this.todos.filter(
        (task) => task.status === this.selectedFilter
      );
    }
    console.log('Selected filter:', this.selectedFilter);
  }
  setSort(sort: string): void {
    this.selectedSort = sort;
    this.applySort();
  }

  applySort(): void {
    console.log('Selected sort:', this.selectedSort);
  }
}
