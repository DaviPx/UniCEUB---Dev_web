import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Venda } from './venda';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class VendaService {

  private vendasUrl = 'api/vendas';

  constructor(
    private http: HttpClient,
  ) { }

  getVendas(): Observable <Venda[]> {
    return this.http.get<Venda[]>(this.vendasUrl);
  }

}
