import { Jogo } from '../../../jogos/jogo';

export class FormData {
  jogo: Jogo;
  preco_venda: number = 0;
  interesse: number = 0;
  comprador_encontrado = false;

  clear() {
    this.jogo = new Jogo();
    this.preco_venda = 0;
    this.interesse = 0;
    this.comprador_encontrado = false;
  }
}

export class SelJogo {
  jogo: Jogo;
}

export class DataVenda {
  preco_venda: number = 0;
  interesse: number = 0;
  comprador_encontrado = false;
}
