import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataVenda, FormData } from '../form-data-venda-wizard/formDataVenda';
import { Venda } from '../venda';
import { VendaService } from '../venda.service';
import { FormDataVendaService } from '../form-data-venda-wizard/form-data-venda.service';

@Component({
  selector: 'app-vendawizard-2step',
  templateUrl: './vendawizard-2step.component.html',
  styleUrls: ['./vendawizard-2step.component.scss']
})
export class Vendawizard2stepComponent implements OnInit {

  datavenda: DataVenda;
  wholeForm: FormData;
  vendas: Venda[];

  constructor(private router: Router, private formDataVendaService: FormDataVendaService, private vendaService: VendaService) { }

  ngOnInit() {
    this.datavenda = this.formDataVendaService.getDataVenda();
    this.getVendas();
  }

  getVendas(): void {
    this.vendaService.getVendas()
    .subscribe(vendas => this.vendas = vendas);
  }

  save(form: any): boolean {
    if (!form.valid) {
        return false;
    }

    this.formDataVendaService.setDataVenda(this.datavenda);
    return true;
  }

  enviarVenda(form: any) {
    if (this.save(form)) {
        this.wholeForm = this.formDataVendaService.getFormData();

        const venda = new Venda();
        venda.jogo = this.wholeForm.jogo;
        venda.interesse = this.wholeForm.interesse;
        venda.preco_venda = Number(this.wholeForm.preco_venda);
        venda.comprador_encontrado = false;

        console.log(venda);

        this.vendaService.addVenda(venda)
        .subscribe(venda => {
          this.vendas.push(venda);
        });

        console.log(this.vendas);

        this.router.navigate(['/negociacoes']);
    }
  }
}
