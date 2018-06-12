import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const jogos = [
      {
        id: 1,
        nome: 'Final Fantasy XII',
        votacao: 5,
        photo: 'ff12.jpg',
        plataforma: 'PS4',
        preco_varejo: 200,
        preco_medio: 90
      },
      {
        id: 2,
        nome: 'Kingdom Hearts',
        votacao: 4,
        photo: 'kh2.5.jpg',
        plataforma: 'PS4',
        preco_varejo: 300,
        preco_medio: 150
      },
      {
        id: 3,
        nome: 'God of War',
        votacao: 5,
        photo: 'gow.jpg',
        plataforma: 'PS4',
        preco_varejo: 200,
        preco_medio: 150
      },
      {
        id: 4,
        nome: 'Half-Life 3',
        votacao: 5,
        photo: 'hl3.jpg',
        plataforma: 'PS4',
        preco_varejo: 200,
        preco_medio: 180
      },
      {
        id: 5,
        nome: 'Halo',
        votacao: 4,
        photo: 'halo.jpg',
        plataforma: 'XBOX one',
        preco_varejo: 249,
        preco_medio: 130
      },
      {
        id: 6,
        nome: 'Sunset Overdrive',
        votacao: 3,
        photo: 'sunover.jpg',
        plataforma: 'XBOX one',
        preco_varejo: 249,
        preco_medio: 130
      },
      {
        id: 7,
        nome: 'Crash N.Sane Trilogy',
        votacao: 5,
        photo: 'crash.jpg',
        plataforma: 'PS4',
        preco_varejo: 239,
        preco_medio: 140
      },
      {
        id: 8,
        nome: 'Star Wars Battlefront II',
        votacao: 1,
        photo: 'sw.jpg',
        plataforma: 'PS4',
        preco_varejo: 399,
        preco_medio: 70
      },
      {
        id: 9,
        nome: 'PUBG',
        votacao: 5,
        photo: 'pubg.jpg',
        plataforma: 'XBOX one',
        preco_varejo: 200,
        preco_medio: 150
      },
      {
        id: 10,
        nome: 'Super Mario Odyssey',
        votacao: 5,
        photo: 'mario.jpg',
        plataforma: 'SWITCH',
        preco_varejo: 399,
        preco_medio: 300
      },
      {
        id: 11,
        nome: 'Mario Kart 8',
        votacao: 5,
        photo: 'mariokart2.jpg',
        plataforma: 'SWITCH',
        preco_varejo: 399,
        preco_medio: 250
      },
      {
        id: 12,
        nome: 'Demons Souls',
        votacao: 5,
        photo: 'demonsouls.jpg',
        plataforma: 'PS3',
        preco_varejo: 150,
        preco_medio: 100
      },
      {
        id: 13,
        nome: 'The Last of Us',
        votacao: 5,
        photo: 'tlou.jpg',
        plataforma: 'PS3',
        preco_varejo: 150,
        preco_medio: 100
      },
      {
        id: 14,
        nome: 'God of War 3',
        votacao: 5,
        photo: 'gow3.jpg',
        plataforma: 'PS3',
        preco_varejo: 150,
        preco_medio: 100
      },
      {
        id: 15,
        nome: 'Battlefield 4',
        votacao: 4,
        photo: 'bf4.jpg',
        plataforma: 'XBOX 360',
        preco_varejo: 120,
        preco_medio: 80
      },
       {
        id: 16,
        nome: 'Rayman Origins',
        votacao: 5,
        photo: 'rayman.jpg',
        plataforma: 'XBOX 360',
        preco_varejo: 120,
        preco_medio: 70
      },
      {
        id: 17,
        nome: 'Minecraft',
        votacao: 5,
        photo: 'minecraft.jpg',
        plataforma: 'XBOX 360',
        preco_varejo: 140,
        preco_medio: 80
      },
      {
        id: 18,
        nome: 'Super Smash Bros',
        votacao: 5,
        photo: 'smash2.jpg',
        plataforma: '3DS',
        preco_varejo: 200,
        preco_medio: 150
      },
      {
        id: 19,
        nome: 'Pokemon X',
        votacao: 5,
        photo: 'pokemonx.jpg',
        plataforma: '3DS',
        preco_varejo: 200,
        preco_medio: 150
      },
      {
        id: 20,
        nome: 'Pokemon Y',
        votacao: 5,
        photo: 'pokemony.jpg',
        plataforma: '3DS',
        preco_varejo: 200,
        preco_medio: 150
      },
      {
        id: 21,
        nome: 'Pokemon Diamond',
        votacao: 5,
        photo: 'poked.jpg',
        plataforma: 'nintendo DS',
        preco_varejo: 150,
        preco_medio: 100
      },
      {
        id: 22,
        nome: 'Pokemon Pearl',
        votacao: 5,
        photo: 'pokep.jpg',
        plataforma: 'nintendo DS',
        preco_varejo: 150,
        preco_medio: 100
      },
      {
        id: 23,
        nome: 'Super Mario 64 DS',
        votacao: 5,
        photo: 'mario64.jpg',
        plataforma: 'nintendo DS',
        preco_varejo: 150,
        preco_medio: 100
      },
    ];

    const trocas = [
      {
        id: 1,
        jogo_negociador: {
          id: 1,
          nome: 'Final Fantasy XII',
          votacao: 5,
          photo: 'ff12.jpg',
          plataforma: 'PS4',
          preco_varejo: 200,
          preco_medio: 90
        },
        jogo_interessado: {
          id: 2,
          nome: 'Kingdom Hearts',
          votacao: 4,
          photo: 'kh2.5.jpg',
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
          photo: 'kh2.5.jpg',
          plataforma: 'PS4',
          preco_varejo: 300,
          preco_medio: 150
        },
        jogo_interessado: {
          id: 1,
          nome: 'Final Fantasy XII',
          votacao: 5,
          photo: 'ff12.jpg',
          plataforma: 'PS4',
          preco_varejo: 200,
          preco_medio: 90
        },
        interesse: 3,
        status_troca: true
      },
      {
        id: 3,
        jogo_negociador: {
          id: 4,
          nome: 'Half-Life 3',
          votacao: 5,
          photo: 'hl3.jpg',
          plataforma: 'PS4',
          preco_varejo: 200,
          preco_medio: 180
        },

        jogo_interessado: {
          id: 3,
          nome: 'God of War',
          votacao: 5,
          photo: 'gow.jpg',
          plataforma: 'PS4',
          preco_varejo: 200,
          preco_medio: 150
        },
        interesse: 2,
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
          photo: 'ff12.jpg',
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
          photo: 'kh2.5.jpg',
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
