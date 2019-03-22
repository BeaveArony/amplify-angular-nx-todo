import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ListTodos_listTodos_items } from '@my/appsync';
import { TodoFilterType } from '../model';

@Component({
  selector: 'my-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TodoListComponent {
  @Output() toggled = new EventEmitter<ListTodos_listTodos_items>();
  @Output() deleted = new EventEmitter<ListTodos_listTodos_items>();

  private _filter: TodoFilterType;
  private _todos: ListTodos_listTodos_items[];

  @Input()
  public get filter(): TodoFilterType {
    return this._filter;
  }
  public set filter(value: TodoFilterType) {
    this._filter = value;
    this.visibleTodos = this.getVisibleTodos(this.todos, value);
  }

  @Input()
  public get todos(): ListTodos_listTodos_items[] {
    return this._todos;
  }
  public set todos(value: ListTodos_listTodos_items[]) {
    this._todos = value;
    this.visibleTodos = this.getVisibleTodos(value, this.filter);
  }

  visibleTodos: ListTodos_listTodos_items[];

  private getVisibleTodos(
    todos: ListTodos_listTodos_items[],
    filter: TodoFilterType
  ) {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  }
}
