import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

/*getJogoById(id: number): Observable<Jogo> {
  		const url = `${this.jogosUrl}/?id =${id}`;
  		return this.http.get<Jogo>(url).pipe(
    		tap(_ => this.log(`fetched jogo id=${id}`)),
    		catchError(this.handleError<Jogo>(`getJogo id=${id}`))
  );
}*/

}
