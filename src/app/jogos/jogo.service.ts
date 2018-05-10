import { Injectable } from '@angular/core';

import { Jogo } from './jogo';
import { JOGOS } from './mock_jogos';

@Injectable()
export class JogoService {

private jogoUrl= 'api/jogo-info';

  getJogos(): Jogo[] {
    return JOGOS;
  }


	/**getJogoById(id: number): Observable<Jogo> {
  		const url = `${this.jogosUrl}/?id =${id}`;
  		return this.http.get<Jogo>(url).pipe(
    		tap(_ => this.log(`fetched jogo id=${id}`)),
    		catchError(this.handleError<Jogo>(`getJogo id=${id}`))
  );
}**/

  constructor() { }

}
