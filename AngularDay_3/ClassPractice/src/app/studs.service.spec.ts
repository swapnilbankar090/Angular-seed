import { TestBed } from '@angular/core/testing';

import { StudsService } from './studs.service';

describe('StudsService', () => {
  let service: StudsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
