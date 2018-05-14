import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Jogo } from '../jogos/jogo';
import { JogoService } from '../jogos/jogo.service';

@Component({
  selector: 'app-jogo-info',
  templateUrl: './jogo-info.component.html',
  styleUrls: ['./jogo-info.component.scss']
})
export class JogoInfoComponent implements OnInit {

  @Input() jogo: Jogo;

  constructor(
    private jogoService: JogoService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getJogo();
  }

  getJogo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.jogoService.getJogo(id)
        .subscribe(jogo => this.jogo = jogo);
  }

}
