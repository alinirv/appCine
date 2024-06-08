import { Component } from '@angular/core';
import { Ingresso } from '../model/Ingresso.model';

@Component({
  selector: 'app-ingresso',
  standalone: true,
  imports: [],
  templateUrl: './ingresso.component.html',
  styleUrl: './ingresso.component.css'
})
export class IngressoComponent {
  ingresso: Ingresso;

  constructor(){
    this.ingresso = new Ingresso;
  }

}
