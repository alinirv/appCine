import { Linguagem } from './Linguagem.model';
export class Filme{
  id: number;
  titulo: String;
  descricao: String;
  ano_release: number;
  avaliacao: number;
  linguagem: Linguagem;
  image: string;

  constructor(){
    this.id = 0;
    this.titulo = "";
    this.descricao = "";
    this.ano_release = 0;
    this.avaliacao = 0;
    this.linguagem = new Linguagem();
    this.image='';
  }


}
