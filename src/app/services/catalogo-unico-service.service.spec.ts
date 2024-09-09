import { TestBed } from '@angular/core/testing';

import { CatalogoUnicoServiceService } from './catalogo-unico-service.service';

describe('CatalogoUnicoServiceService', () => {
  let service: CatalogoUnicoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogoUnicoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
