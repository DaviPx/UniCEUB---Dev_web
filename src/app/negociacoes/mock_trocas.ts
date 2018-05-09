import { Troca } from './troca';

export const TROCAS: Troca[] = [
  {
    id: 1,
    jogo_negociador: {
      id: 1,
      nome:'Final Fantasy XII',
      votacao: 5,
      photo:'capaJogo22.jpg',
      plataforma: 'PS4',
      preco_varejo: 200,
      preco_medio: 90
    },
    jogo_interessado: {
      id:2,
      nome:'Kingdom Hearts',
      votacao: 4,
      photo:'capaJogo12.jpg',
      plataforma: 'PS4',
      preco_varejo:300,
      preco_medio:150
    },
    interesse: 5,
    status_troca: false
  },
  {
    id: 2,
    jogo_negociador: {
      id:2,
      nome:'Kingdom Hearts',
      votacao: 4,
      photo:'capaJogo12.jpg',
      plataforma: 'PS4',
      preco_varejo:300,
      preco_medio:150
    },
    jogo_interessado: {
      id: 1,
      nome:'Final Fantasy XII',
      votacao: 5,
      photo:'capaJogo22.jpg',
      plataforma: 'PS4',
      preco_varejo: 200,
      preco_medio: 90
    },
    interesse: 5,
    status_troca: true
  }
];
