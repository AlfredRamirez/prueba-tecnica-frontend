import { TestBed } from '@angular/core/testing';

import { ColorTazaService } from './color-taza.service';

describe('ColorTazaService', () => {
  let service: ColorTazaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorTazaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
