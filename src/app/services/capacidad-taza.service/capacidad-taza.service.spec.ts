import { TestBed } from '@angular/core/testing';

import { CapacidadTazaService } from './capacidad-taza.service';

describe('CapacidadTazaService', () => {
  let service: CapacidadTazaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapacidadTazaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
