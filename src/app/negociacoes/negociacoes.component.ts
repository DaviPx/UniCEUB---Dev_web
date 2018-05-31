import { Component, OnInit } from '@angular/core';

import { Troca } from '../negociacoes/troca/troca';
import { TrocaService } from '../negociacoes/troca/troca.service';

import { Venda } from '../negociacoes/venda/venda';
import { VendaService } from '../negociacoes/venda/venda.service';

@Component({
  selector: 'app-negociacoes',
  templateUrl: './negociacoes.component.html',
  styleUrls: ['./negociacoes.component.scss']
})
export class NegociacoesComponent implements OnInit {

  trocas: Troca[];
  vendas: Venda[];
  status = 'venda';

  constructor(
    private trocaService: TrocaService,
    private vendaService: VendaService
  ) { }

  ngOnInit() {
    this.getTrocas();
    this.getVendas();
  }

  getTrocas(): void {
    this.trocaService.getTrocas()
    .subscribe(trocas => this.trocas = trocas);
  }

  getVendas(): void {
    this.vendaService.getVendas()
    .subscribe(vendas => this.vendas = vendas);
  }

  trocaAba(tipo: string): void {
    this.status = tipo;
  }
}
