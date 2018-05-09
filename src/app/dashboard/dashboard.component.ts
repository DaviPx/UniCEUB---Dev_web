import { Component, OnInit } from '@angular/core';

import { JOGOS } from '../jogos/mock_jogos';
import { Jogo } from '../jogos/jogo';
import { JogoService } from '../jogos/jogo.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  jogos: Jogo[];

  constructor(private jogoService: JogoService) { }

  ngOnInit() {
    this.getJogos();
  }

  getJogos(): void {
    this.jogos = this.jogoService.getJogos().slice(0, 3);
  }

}
