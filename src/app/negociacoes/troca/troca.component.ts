import { Component, OnInit } from '@angular/core';
import { Troca } from './troca';
import { TrocaService } from './troca.service';

@Component({
  selector: 'app-troca',
  templateUrl: './troca.component.html',
  styleUrls: ['./troca.component.scss']
})
export class TrocaComponent implements OnInit {

trocas: Troca[];

  constructor(private trocaService: TrocaService) { }

  ngOnInit() {
  this.getTrocas();
  }

  getTrocas(): void {
    this.trocaService.getTrocas()
    .subscribe(trocas => this.trocas = trocas);
  }

}
