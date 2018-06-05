import { Jogo } from '../../jogos/jogo';

export class Venda {
  id: number;
  jogo: Jogo;
  preco_venda: number;
  interesse: number;
  comprador_encontrado: boolean;
}
