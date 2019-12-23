import { TestBed } from '@angular/core/testing';

import { VisitorformService } from './visitorform.service';

describe('VisitorformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisitorformService = TestBed.get(VisitorformService);
    expect(service).toBeTruthy();
  });
});
