import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataTroca, FormData } from '../form-data-troca-wizard/formDataTroca';
import { Troca } from '../troca';
import { TrocaService } from '../troca.service';
import { TrocaComponent } from '../troca.component';
import { FormDataTrocaService } from '../form-data-troca-wizard/form-data-troca.service';

@Component({
  selector: 'app-trocawizard-2step',
  templateUrl: './trocawizard-2step.component.html',
  styleUrls: ['./trocawizard-2step.component.scss']
})
export class Trocawizard2stepComponent implements OnInit {

  datatroca: DataTroca;
  wholeForm: FormData;
  trocas: Troca[];

  constructor(private router: Router, private formDataTrocaService: FormDataTrocaService, private trocaService: TrocaService) { }

  ngOnInit() {
    this.datatroca = this.formDataTrocaService.getDataTroca();
    this.getTrocas();
  }

  getTrocas(): void {
    this.trocaService.getTrocas()
    .subscribe(trocas => this.trocas = trocas);
  }

  save(form: any): boolean {
    if (!form.valid) {
        return false;
    }
        
    this.formDataTrocaService.setDataTroca(this.datatroca);
    return true;
  }

  enviarTroca(form: any) {
    if (this.save(form)) {
        this.wholeForm = this.formDataTrocaService.getFormData();
        
        const troca = new Troca();
        troca.jogo_interessado = this.wholeForm.jogo_interessado;
        troca.jogo_negociador = this.wholeForm.jogo_negociador;
        troca.interesse = this.wholeForm.interesse;
        troca.status_troca = false;

       this.trocaService.addTroca(troca)
        .subscribe(troca => {
          this.trocas.push(troca);
        });
      
        console.log(this.trocas);

        this.router.navigate(['/negociacoes']);
    }
  }

}
