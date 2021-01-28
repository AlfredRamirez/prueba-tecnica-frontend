import { TestBed } from '@angular/core/testing';

import { CalidadTazaService } from './calidad-taza.service';

describe('CalidadTazaService', () => {
  let service: CalidadTazaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalidadTazaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
