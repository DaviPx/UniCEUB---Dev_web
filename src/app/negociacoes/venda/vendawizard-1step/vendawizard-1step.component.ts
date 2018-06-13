import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormDataVendaService } from '../form-data-venda-wizard/form-data-venda.service';
import { Jogo } from '../../../jogos/jogo';
import { JogoService } from '../../../jogos/jogo.service';
import { SelJogo } from '../form-data-venda-wizard/formDataVenda';

@Component({
  selector: 'app-vendawizard-1step',
  templateUrl: './vendawizard-1step.component.html',
  styleUrls: ['./vendawizard-1step.component.scss']
})
export class Vendawizard1stepComponent implements OnInit {

  title: 'Selecione os seus jogos';
  seljogo: SelJogo;
  jogos: Jogo[];
  form: any;

  constructor(private router: Router, private formDataVendaService: FormDataVendaService, private jogoService: JogoService) { }

  ngOnInit() {
    this.getJogos();
    this.seljogo = this.formDataVendaService.getSelJogo();
  }

  getJogos(): void {
    this.jogoService.getJogos()
    .subscribe(jogos => this.jogos = jogos);
  }

  save(form: any): boolean {
    if (!form.valid) {
        return false;
    }

    this.formDataVendaService.setSelJogo(this.seljogo);
    return true;
  }

  goToNext(form: any) {
      if (this.save(form)) {
          this.formDataVendaService.changeStep(2)
      }
  }
}
