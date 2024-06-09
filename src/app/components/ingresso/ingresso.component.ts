import { Component } from '@angular/core';
import { Ingresso } from '../../model/Ingresso.model';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-ingresso',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './ingresso.component.html',
  styleUrl: './ingresso.component.css'
})
export class IngressoComponent {
  ingresso: Ingresso;
  constructor(){
    this.ingresso = new Ingresso;
    this.ingresso.preco = 28
    this.ingresso.exibicao = new Date('2024-07-09')
  }

  getExibicao(){
    return this.ingresso.exibicao;
  }

  getPreco(){
    return this.ingresso.preco;
  }
}
