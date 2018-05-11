import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Jogo } from './jogo';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class JogoService {

  private jogosUrl = 'api/jogos';

  constructor(
    private http: HttpClient,
  ) { }


  getJogos(): Observable <Jogo[]> {
    return this.http.get<Jogo[]>(this.jogosUrl);
  }

/* PROCURA PELO NOME USANDO HTTP GET */
  searchJogos(term: string): Observable<Jogo[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('nome', term) } : {};

    return this.http.get<Jogo[]>(this.jogosUrl, options);



}
}
