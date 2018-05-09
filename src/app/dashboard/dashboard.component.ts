import { Component, OnInit } from '@angular/core';

import { Jogo } from '../jogos/jogo';
import { JogoService } from '../jogos/jogo.service';
import { Troca } from '../negociacoes/troca';
import { TrocaService } from '../negociacoes/troca.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  jogos: Jogo[];
  trocas: Troca[];

  constructor(
    private jogoService: JogoService,
    private trocaService: TrocaService
  ) { }

  ngOnInit() {
    this.getJogos();
    this.getTrocas();
  }

  getJogos(): void {
    this.jogos = this.jogoService.getJogos().slice(0, 3);
  }

  getTrocas(): void {
    this.trocas = this.trocaService.getTrocas().slice(0, 3);
  }

}
