import { TestBed, inject } from '@angular/core/testing';

import { GroupFormService } from './group-form.service';

describe('GroupFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupFormService]
    });
  });

  it('should be created', inject([GroupFormService], (service: GroupFormService) => {
    expect(service).toBeTruthy();
  }));
});
