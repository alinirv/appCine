export class Categoria{
  id: number;
  nome: String;
  ultima_atualizacao: Date;

  constructor(){
    this.id = 0;
    this.nome = "";
    this.ultima_atualizacao = new Date();
  }

}
