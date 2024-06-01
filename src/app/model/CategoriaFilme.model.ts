import { Categoria } from './Categoria.model';
export class CategoriaFilme{
  filmeID: number;
  categoriaID: number;
  ultima_atualizacao: Date;
  categoria: Categoria;

  constructor(){
    this.filmeID = 0;
    this.categoriaID = 0;
    this.ultima_atualizacao = new Date();
    this.categoria = new Categoria();
  }
}
