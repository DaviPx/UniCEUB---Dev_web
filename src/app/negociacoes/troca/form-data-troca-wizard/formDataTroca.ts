import { Jogo } from '../../../jogos/jogo';

export class FormData {
  jogo_negociador: Jogo;
  jogo_interessado: Jogo;
  interesse: number = 0;
  status_troca = false;

  clear() {
    this.jogo_negociador = new Jogo();
    this.jogo_interessado = new Jogo ();
    this.interesse = 0;
    this.status_troca = false;
  }
}

export class SelJogos {
  jogo_negociador: Jogo;
  jogo_interessado: Jogo;
}

export class DataTroca {
  interesse: number = 0;
  status_troca = false;
}
