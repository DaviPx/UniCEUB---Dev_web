import { Component, OnInit } from '@angular/core';

import { Venda } from './venda';
import { VendaService } from './venda.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss']
})
export class VendaComponent implements OnInit {

  vendas: Venda[];

  constructor(private vendaService: VendaService) { }

  ngOnInit() {
    this.getVendas();
  }

  getVendas(): void {
    this.vendaService.getVendas()
    .subscribe(vendas => this.vendas = vendas);
  }

}
