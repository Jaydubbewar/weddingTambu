import { TestBed } from '@angular/core/testing';

import { WeddtambuService } from './weddtambu.service';

describe('WeddtambuService', () => {
  let service: WeddtambuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeddtambuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
