import { Ator } from './Ator.model';
import { Filme } from './Filme.model';

export class FilmeAtor{
  filmeId: Number;
  atorId: Number;
  ator: Ator;
  filme: Filme;

  constructor(){
    this.filmeId = 0;
    this.atorId = 0;
    this.ator = new Ator();
    this.filme = new Filme();
  }
}
