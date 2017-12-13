import { TestBed, inject } from '@angular/core/testing';

import { GetMenuItemsService } from './get-menu-items.service';

describe('GetMenuItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMenuItemsService]
    });
  });

  it('should be created', inject([GetMenuItemsService], (service: GetMenuItemsService) => {
    expect(service).toBeTruthy();
  }));
});
