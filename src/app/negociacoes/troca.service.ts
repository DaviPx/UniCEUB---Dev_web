import { Injectable } from '@angular/core';
import { Troca } from './troca';
import { TROCAS } from './mock_trocas';

@Injectable()
export class TrocaService {

  getTrocas(): Troca[] {
    return TROCAS;
  }

  constructor() { }

}
