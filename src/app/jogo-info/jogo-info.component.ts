import { Component, OnInit } from '@angular/core';

import { Jogo } from '../jogos/jogo';
import { JogoService } from '../jogos/jogo.service';

@Component({
  selector: 'app-jogo-info',
  templateUrl: './jogo-info.component.html',
  styleUrls: ['./jogo-info.component.scss']
})
export class JogoInfoComponent implements OnInit {

  jogos: Jogo[];

  constructor(
    private jogoService: JogoService
  ) { }

  ngOnInit() {
    this.getJogos();
  }

  getJogos(): void {
    this.jogoService.getJogos()
    .subscribe(jogos => this.jogos = jogos);
  }

}
