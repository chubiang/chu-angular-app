import { TestBed } from '@angular/core/testing';

import { SubTitleService } from './sub-title.service';

describe('SubTitleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubTitleService = TestBed.get(SubTitleService);
    expect(service).toBeTruthy();
  });
});
