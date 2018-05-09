import { Injectable } from '@angular/core';

import { Jogo } from './jogo';
import { JOGOS } from './mock_jogos';

@Injectable()
export class JogoService {

  getJogos(): Jogo[] {
    return JOGOS;
  }

  constructor() { }

}
