import { TestBed } from '@angular/core/testing';

import { MsgFormValidationService } from './msg-form-validation.service';

describe('MsgFormValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MsgFormValidationService = TestBed.get(MsgFormValidationService);
    expect(service).toBeTruthy();
  });
});
