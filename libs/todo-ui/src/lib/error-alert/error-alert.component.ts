import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorAlertComponent {
  @Input() errorMessage: string | null = null;
  @Output() closed = new EventEmitter();
}
