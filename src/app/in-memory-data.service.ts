import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const jogos = [
      {
        id: 1,
        nome: 'Final Fantasy XII',
        votacao: 5,
        photo: 'capaJogo22.jpg',
        plataforma: 'PS4',
        preco_varejo: 200,
        preco_medio: 90
      },
      {
        id: 2,
        nome: 'Kingdom Hearts',
        votacao: 4,
        photo: 'capaJogo12.jpg',
        plataforma: 'PS4',
        preco_varejo: 300,
        preco_medio: 150
      },
      {
        id: 3,
        nome: 'God of War',
        votacao: 5,
        photo: 'gow.png',
        plataforma: 'PS4',
        preco_varejo: 200,
        preco_medio: 150
      },
      {
        id: 4,
        nome: 'Half-Life 3',
        votacao: 5,
        photo: 'hl3.jpeg',
        plataforma: 'PS4',
        preco_varejo: 200,
        preco_medio: 180
      },
    ];

    const trocas = [
      {
        id: 1,
        jogo_negociador: {
          id: 1,
          nome: 'Final Fantasy XII',
          votacao: 5,
          photo: 'capaJogo22.jpg',
          plataforma: 'PS4',
          preco_varejo: 200,
          preco_medio: 90
        },
        jogo_interessado: {
          id: 2,
          nome: 'Kingdom Hearts',
          votacao: 4,
          photo: 'capaJogo12.jpg',
          plataforma: 'PS4',
          preco_varejo: 300,
          preco_medio: 150
        },
        interesse: 5,
        status_troca: false
      },
      {
        id: 2,
        jogo_negociador: {
          id: 2,
          nome: 'Kingdom Hearts',
          votacao: 4,
          photo: 'capaJogo12.jpg',
          plataforma: 'PS4',
          preco_varejo: 300,
          preco_medio: 150
        },
        jogo_interessado: {
          id: 1,
          nome: 'Final Fantasy XII',
          votacao: 5,
          photo: 'capaJogo22.jpg',
          plataforma: 'PS4',
          preco_varejo: 200,
          preco_medio: 90
        },
        interesse: 5,
        status_troca: true
      }
    ];

    const vendas = [
      {
        id: 1,
        jogo: {
          id: 1,
          nome: 'Final Fantasy XII',
          votacao: 5,
          photo: 'capaJogo22.jpg',
          plataforma: 'PS4',
          preco_varejo: 200,
          preco_medio: 90
        },
        preco_venda: 200,
        interesse: 4,
        comprador_encontrado: false
      },
      {
        id: 2,
        jogo: {
          id: 2,
          nome: 'Kingdom Hearts',
          votacao: 4,
          photo: 'capaJogo12.jpg',
          plataforma: 'PS4',
          preco_varejo: 300,
          preco_medio: 150
        },
        preco_venda: 90,
        interesse: 1,
        comprador_encontrado: true
      }
    ];

    return {jogos, trocas, vendas};
  }
}
