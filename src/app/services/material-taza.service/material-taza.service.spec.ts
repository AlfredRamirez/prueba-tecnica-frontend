import { TestBed } from '@angular/core/testing';

import { MaterialTazaService } from './material-taza.service';

describe('MaterialTazaService', () => {
  let service: MaterialTazaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialTazaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
