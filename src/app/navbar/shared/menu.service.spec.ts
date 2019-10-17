import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu.service';

describe('SubTitleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuService = TestBed.get(MenuService);
    expect(service).toBeTruthy();
  });
});
