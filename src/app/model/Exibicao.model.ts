import { Filme } from "./Filme.model";
import { Sala } from "./Sala.model";

export class Exibicao{
  id: number;
  filme: Filme;
  sala: Sala;
  dataExibicao: Date;
  horaExibicao: number;

  constructor(){
    this.id = 0;
    this.filme = new Filme();
    this.sala = new Sala();
    this.dataExibicao = new Date();
    this.horaExibicao = 0;
  }

  getFilme(){
    return this.filme;
  }

  getSala(){
    return this.sala;
  }

  getDataExibicao(){
    return this.dataExibicao;
  }

  getHoraExibicao(){
    return this.getHoraExibicao;
  }

}
