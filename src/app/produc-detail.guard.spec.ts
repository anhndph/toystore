import { TestBed } from '@angular/core/testing';

import { ProducDetailGuard } from './produc-detail.guard';

describe('ProducDetailGuard', () => {
  let guard: ProducDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProducDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
