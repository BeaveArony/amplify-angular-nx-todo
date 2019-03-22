import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { TodoFilterType } from '../model';

@Component({
  selector: 'my-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterBarComponent {
  @Output() filtered = new EventEmitter<TodoFilterType>();

  currentFilter: TodoFilterType = 'SHOW_ALL';
  buttons: { value: TodoFilterType; name: string }[] = [
    { value: 'SHOW_ALL', name: 'All' },
    { value: 'SHOW_ACTIVE', name: 'Active' },
    { value: 'SHOW_COMPLETED', name: 'Completed' }
  ];

  filter(query: TodoFilterType) {
    this.currentFilter = query;
    this.filtered.emit(this.currentFilter);
  }
}
