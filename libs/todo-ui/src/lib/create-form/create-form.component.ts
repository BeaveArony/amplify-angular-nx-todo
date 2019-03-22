import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateFormComponent {
  @Output() created = new EventEmitter<string>();
  form = new FormGroup({ todoName: new FormControl('') });

  createTodo() {
    const todoName = this.form.value.todoName.trim();
    if (todoName) {
      this.created.emit(todoName);
      this.form.setValue({ todoName: '' });
    }
  }
}
