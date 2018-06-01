import { TestBed, inject } from '@angular/core/testing';

import { FormDataVendaService } from './form-data-venda.service';

describe('FormDataVendaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormDataVendaService]
    });
  });

  it('should be created', inject([FormDataVendaService], (service: FormDataVendaService) => {
    expect(service).toBeTruthy();
  }));
});
