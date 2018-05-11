import { Component, OnInit } from '@angular/core';

import { Jogo } from '../jogos/jogo';
import { JogoService } from '../jogos/jogo.service';

import { Troca } from '../negociacoes/troca';
import { TrocaService } from '../negociacoes/troca.service';

import { Venda } from '../negociacoes/venda';
import { VendaService } from '../negociacoes/venda.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  jogos: Jogo[];
  trocas: Troca[];
  vendas: Venda[];

  constructor(
    private jogoService: JogoService,
    private trocaService: TrocaService,
    private vendaService: VendaService
  ) { }

  ngOnInit() {
    this.getJogos();
    this.getTrocas();
    this.getVendas();
  }

  getJogos(): void {
    this.jogoService.getJogos()
    .subscribe(jogos => this.jogos = jogos);
  }

  getTrocas(): void {
    this.trocaService.getTrocas()
    .subscribe(trocas => this.trocas = trocas);
  }

  getVendas(): void {
    this.vendaService.getVendas()
    .subscribe(vendas => this.vendas = vendas);
  }

}
