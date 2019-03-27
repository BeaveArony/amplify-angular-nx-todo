import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateFormComponent } from './create-form/create-form.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { ErrorAlertComponent } from './error-alert/error-alert.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    CreateFormComponent,
    TodoListComponent,
    TodoItemComponent,
    FilterBarComponent,
    TodoPageComponent,
    ErrorAlertComponent
  ],
  exports: [TodoPageComponent]
})
export class TodoUiModule {}
