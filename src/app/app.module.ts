import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { todoReducer } from './providers/todos.reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';


import { DragDropModule } from '@angular/cdk/drag-drop'; 
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment.development';
import { DatepickerModule } from 'ng2-datepicker';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoItemComponent,
    TodoListComponent,
    KanbanBoardComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    StoreModule.forRoot(
      {
        todos: todoReducer,
      },
    ),
  ],
  providers: [provideClientHydration(), DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
