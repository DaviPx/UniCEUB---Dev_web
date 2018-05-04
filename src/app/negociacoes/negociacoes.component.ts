import { Component, OnInit } from '@angular/core';
import { Negociacao } from './negociacao';
import { NEGOCIACOES } from './mock_negociacoes';

@Component({
  selector: 'app-negociacoes',
  templateUrl: './negociacoes.component.html',
  styleUrls: ['./negociacoes.component.scss']
})
export class NegociacoesComponent implements OnInit {
negociacoes=NEGOCIACOES;
  constructor() { }

  ngOnInit() {
  }

}
