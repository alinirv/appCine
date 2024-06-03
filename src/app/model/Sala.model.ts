import { Filme } from "./Filme.model";

export class Sala{
  id: number;
  lotacaoMaxima: number;
  nome: string;
  filme: Filme

  constructor(){
    this.id = 0;
    this.lotacaoMaxima = 0;
    this.nome='';
    this.filme = new Filme();
  }

  exibirFilme(filme:Filme){
    console.log("Exibindo o filme: " + filme);
  }

  getLotacaoMaxima(){
    return this.lotacaoMaxima;
  }

}
