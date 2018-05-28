import { Jogo } from '../../jogos/jogo';

export class Troca {
  id: number;
  jogo_negociador: Jogo;
  jogo_interessado: Jogo;
  interesse: number;
  status_troca: boolean;
}
