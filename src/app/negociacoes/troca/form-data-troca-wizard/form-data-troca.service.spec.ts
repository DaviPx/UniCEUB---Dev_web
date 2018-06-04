import { TestBed, inject } from '@angular/core/testing';

import { FormDataTrocaService } from './form-data-troca.service';

describe('FormDataTrocaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormDataTrocaService]
    });
  });

  it('should be created', inject([FormDataTrocaService], (service: FormDataTrocaService) => {
    expect(service).toBeTruthy();
  }));
});
