import { Component, Inject, OnInit, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Filme } from '../../model/Filme.model';
import { MovieService } from '../../service/movie.service';
import { SharedMoviesService } from '../../service/shared-movies.service';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [ MatCardModule, MatToolbarModule, MatGridListModule,MatIconModule, NgFor, NgIf],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})

export class MovieComponent  implements OnInit {
  listaFilme: Filme[] = [];

  constructor(private movieSharedService: SharedMoviesService) {}

  ngOnInit(): void {
    this.movieSharedService.filmes$.subscribe((filmes: Filme[]) => {
      // Ordena os filmes pela data de lançamento e pega os 4 mais recentes
      this.listaFilme = filmes
        .sort((a, b) => new Date(b.ano_release).getTime() - new Date(a.ano_release).getTime())
        .slice(0, 4);
    });
    this.movieSharedService.loadFilmes();
  }
  getStars(avaliacao: number): string[] {
    const fullStars = Math.min(5, Math.max(1, Math.floor(avaliacao / 2)));
    const emptyStars = 5 - fullStars;
  
    return [...Array(fullStars).fill('full'),...Array(emptyStars).fill('empty')];
  }

  trackById(index: number, star: string) {
    return index;
  }
}

