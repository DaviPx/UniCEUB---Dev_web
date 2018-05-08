import { Component, OnInit } from '@angular/core';
import { JOGOS } from '../jogos/mock_jogos';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


jogos = JOGOS;


  constructor() { }

  ngOnInit() {
  }

}
