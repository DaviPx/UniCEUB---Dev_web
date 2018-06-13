import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormDataTrocaService } from '../form-data-troca-wizard/form-data-troca.service';
import { Jogo } from '../../../jogos/jogo';
import { JogoService } from '../../../jogos/jogo.service';
import { SelJogos } from '../form-data-troca-wizard/formDataTroca';

@Component({
  selector: 'app-trocawizard-1step',
  templateUrl: './trocawizard-1step.component.html',
  styleUrls: ['./trocawizard-1step.component.scss']
})
export class Trocawizard1stepComponent implements OnInit {

  title: 'Selecione os seus jogos';
  seljogos: SelJogos;
  jogos: Jogo[];
  form: any;

  constructor(private router: Router, private formDataTrocaService: FormDataTrocaService, private jogoService: JogoService) { }

  ngOnInit() {
    this.getJogos();
    this.seljogos = this.formDataTrocaService.getSelJogos();
  }

  getJogos(): void {
    this.jogoService.getJogos()
    .subscribe(jogos => this.jogos = jogos);
  }

  save(form: any): boolean {
    if (!form.valid) {
        return false;
    }

    this.formDataTrocaService.setSelJogos(this.seljogos);
    return true;
  }

  goToNext(form: any) {
      if (this.save(form)) {
          this.formDataTrocaService.changeStep(2);
      }
  }
}
