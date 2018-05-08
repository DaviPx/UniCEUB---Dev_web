import { Component, OnInit } from '@angular/core';
import { JOGOS } from './mock_lista_jogos';
import { Jogo } from './jogo';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.scss']
})
export class JogosComponent implements OnInit {

  jogos = JOGOS;

  constructor() { }

  ngOnInit() {
  }

}
