import { TestBed } from '@angular/core/testing';

import { FIDERatingChangeSingleService } from './fiderating-change-single.service';

describe('FIDERatingChangeSingleService', () => {
  let service: FIDERatingChangeSingleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FIDERatingChangeSingleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
