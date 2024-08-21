import { TestBed } from '@angular/core/testing';

import { ShowdetailsService } from './showdetails.service';

describe('ShowdetailsService', () => {
  let service: ShowdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
