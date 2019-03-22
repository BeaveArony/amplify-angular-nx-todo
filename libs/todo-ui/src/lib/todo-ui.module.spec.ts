import { async, TestBed } from '@angular/core/testing';
import { TodoUiModule } from './todo-ui.module';

describe('TodoUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TodoUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TodoUiModule).toBeDefined();
  });
});
