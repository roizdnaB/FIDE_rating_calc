import { TestBed } from '@angular/core/testing';

import { FIDERatingInitService } from './fiderating-init.service';

describe('FIDERatingInitServiceService', () => {
  let service: FIDERatingInitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FIDERatingInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
