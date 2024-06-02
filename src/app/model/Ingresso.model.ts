export class Ingresso{

  id: number;
  exibicao: Date;
  preco: number;

  constructor(){
    this.id = 0;
    this.exibicao = new Date();
    this.preco = 0;
  }

  getExibicao(){
    return this.exibicao;
  }

  getPreco(){
    return this.preco;
  }

}
