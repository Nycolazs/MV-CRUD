import { TestBed } from '@angular/core/testing';

import { ProfissionalService } from './profissionais.service';

describe('ProfissionalService', () => {
  let service: ProfissionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfissionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
