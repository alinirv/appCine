import { Component, Inject, OnInit, inject } from '@angular/core';
import { Filme } from '../../model/Filme.model';
import { MovieService } from '../../service/movie.service';
import { SharedMoviesService } from '../../service/shared-movies.service';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [ MatCardModule, MatToolbarModule, MatGridListModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})

export class MovieComponent  implements OnInit {
  listaFilme: Filme[] = [];

  constructor(private movieSharedService: SharedMoviesService) {}

  ngOnInit(): void {
    this.movieSharedService.filmes$.subscribe((filmes: Filme[]) => {
      this.listaFilme = filmes;
    });
    this.movieSharedService.loadFilmes();
  }

}
