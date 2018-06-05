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

/* PEGA SO OS JOGOS, SEM TROCAS OU VENDAS*/
  getJogos(): Observable <Jogo[]> {
    return this.http.get<Jogo[]>(this.jogosUrl);
  }



/* COMPARA VALOR COM PROPRIEDADE DO OBJETO USANDO HTTP GET */

  searchJogos(term: string, type:string): Observable<Jogo[]> { // RECEBE O TEXTO PESQUISADO E QUAL TIPO DE INFORMAÇÃO BUSCAR
    term = term.trim();
    type = type.trim();
    
    const options = term ?
     { params: new HttpParams().set(type, term) } : {};

    return this.http.get<Jogo[]>(this.jogosUrl, options);

  }



/* PEGA JOGOS POR ID NA QUERY */

  getJogo(id: number): Observable<Jogo> {
    const url = `${this.jogosUrl}/${id}`;
    return this.http.get<Jogo>(url);
  }
}
