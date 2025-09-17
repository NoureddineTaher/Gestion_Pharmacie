import { TestBed } from '@angular/core/testing';

import { PharmaciGardeServiceService } from './pharmaci-garde-service.service';

describe('PharmaciGardeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PharmaciGardeServiceService = TestBed.get(PharmaciGardeServiceService);
    expect(service).toBeTruthy();
  });
});
