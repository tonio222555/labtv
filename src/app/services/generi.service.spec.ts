import { TestBed } from '@angular/core/testing';

import { GeneriService } from './generi.service';

describe('GeneriService', () => {
  let service: GeneriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
