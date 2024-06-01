import { Linguagem } from './Linguagem.model';
export class Filme{
  id: number;
  linguagemID: number;
  titulo: String;
  descricao: String;
  ano_release: number;
  duracao: number;
  avaliacao: number;
  linguagem: Linguagem;

  constructor(){
    this.id = 0;
    this.linguagemID = 0;
    this.titulo = "";
    this.descricao = "";
    this.ano_release = 0;
    this.duracao = 0;
    this.avaliacao = 0;
    this.linguagem = new Linguagem();
  }


}
