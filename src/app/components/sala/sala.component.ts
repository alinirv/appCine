import { Component, OnInit } from '@angular/core';
import { SharedMoviesService } from '../../service/shared-movies.service';
import { Filme } from '../../model/Filme.model';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MatGridListModule,MatCardModule,MatToolbarModule],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})

export class SalaComponent implements OnInit{
  listaFilme: Filme[] = [];

  constructor(private movieSharedService: SharedMoviesService) {}

  ngOnInit(): void {
    this.movieSharedService.filmes$.subscribe((filmes: Filme[]) => {
      this.listaFilme = filmes;
    });
    this.movieSharedService.loadFilmes();
    console.log(this.listaFilme)
  }


  getFilme(id: number): Filme | undefined {
    return this.listaFilme.find(filme => filme.id === id);
  }
  

}


