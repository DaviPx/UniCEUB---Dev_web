import { TestBed, inject } from '@angular/core/testing';

import { TrocaService } from './troca.service';

describe('TrocaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrocaService]
    });
  });

  it('should be created', inject([TrocaService], (service: TrocaService) => {
    expect(service).toBeTruthy();
  }));
});
