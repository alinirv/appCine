import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Filme } from '../model/Filme.model';
import { MovieService } from '../service/movie.service';


@Injectable({
  providedIn: 'root'
})
export class SharedMoviesService {
  private filmesSubject = new BehaviorSubject<Filme[]>([]);
  filmes$ = this.filmesSubject.asObservable();

  constructor(private movieService: MovieService) {}

  loadFilmes() {
    this.movieService.getMovies().subscribe((movies: any) => {
      const filmes = movies.results.map((movie: any) => {
        const filme = new Filme();
        filme.id = movie.id;
        filme.titulo = movie.original_title;
        filme.descricao = movie.overview;
        filme.ano_release = new Date(movie.release_date).getFullYear();
        filme.avaliacao = movie.vote_average;
        filme.linguagem = movie.original_language;
        filme.image = movie.poster_path;
        return filme;
      });
      this.filmesSubject.next(filmes);
    });
  }
}
