import { Component, OnInit } from '@angular/core';

import { JOGOS } from '../jogos/mock_jogos';
import { Jogo } from '../jogos/jogo';
import { JogoService } from '../jogos/jogo.service';

@Component({
  selector: 'app-jogo-info',
  templateUrl: './jogo-info.component.html',
  styleUrls: ['./jogo-info.component.scss']
})
export class JogoInfoComponent implements OnInit {

  jogos: Jogo[];

  constructor(private jogoService: JogoService) { }

  ngOnInit() {
    this.getJogos();
  }

  getJogos(): void {
    this.jogos = this.jogoService.getJogos();
  }

}