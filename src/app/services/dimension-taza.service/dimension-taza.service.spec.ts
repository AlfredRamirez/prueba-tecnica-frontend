import { TestBed } from '@angular/core/testing';

import { DimensionTazaService } from './dimension-taza.service';

describe('DimensionTazaService', () => {
  let service: DimensionTazaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DimensionTazaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
