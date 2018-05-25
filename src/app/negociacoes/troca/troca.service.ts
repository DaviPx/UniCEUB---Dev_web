import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Troca } from './troca';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TrocaService {

  private trocasUrl = 'api/trocas';

  constructor(
    private http: HttpClient,
  ) { }

  getTrocas(): Observable <Troca[]> {
    return this.http.get<Troca[]>(this.trocasUrl);
  }

}