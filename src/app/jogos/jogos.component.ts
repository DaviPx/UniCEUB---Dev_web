import { Component, OnInit } from '@angular/core';
import { JogoService } from './jogo.service';
import { Jogo } from './jogo';


@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.scss']
})
export class JogosComponent implements OnInit {

  jogos: Jogo[];

  constructor(private jogoService: JogoService) { }

  ngOnInit() {
    this.getJogos();
  }

  getJogos(): void {
    this.jogoService.getJogos()
    .subscribe(jogos => this.jogos = jogos);
  }

  search(textoPesquisado: string) {
    this.jogoService.searchJogos(textoPesquisado)
    .subscribe(jogos => this.jogos = jogos);
    }
  }




