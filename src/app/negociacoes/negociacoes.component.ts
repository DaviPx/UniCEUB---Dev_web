import { Component, OnInit } from '@angular/core';

import { Troca } from '../negociacoes/troca';
import { TrocaService } from '../negociacoes/troca.service';

import { Venda } from '../negociacoes/venda';
import { VendaService } from '../negociacoes/venda.service';

@Component({
  selector: 'app-negociacoes',
  templateUrl: './negociacoes.component.html',
  styleUrls: ['./negociacoes.component.scss']
})
export class NegociacoesComponent implements OnInit {

  trocas: Troca[];
  vendas: Venda[];
  status = 'troca';

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

}
