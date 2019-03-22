import { async, TestBed } from '@angular/core/testing';
import { AppsyncModule } from './appsync.module';

describe('AppsyncModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppsyncModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AppsyncModule).toBeDefined();
  });
});
