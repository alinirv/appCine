import { Component, Inject, OnInit, inject } from '@angular/core';
import { Exibicao } from '../../model/Exibicao.model';
import { Filme } from '../../model/Filme.model';
import { Sala } from '../../model/Sala.model';
import { MovieService } from '../../service/movie.service';
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
  private movieService = inject(MovieService);

  listaFilme: Filme[] = [];
  movies: any = [];

  ngOnInit(): void {
    this.loadFilmeCartaz()

  }

  loadMovies(){
    this.movieService.getMovies().subscribe({
      next: (res:any)=>{
        this.movies=res.results;
      },
      error: (error)=>console.log('Erro ao realizar um fetch ds filmes', error)
    })
  }

  loadFilmeCartaz(){
    this.movieService.getMovies().subscribe((movies: any) => {
      this.listaFilme = movies.results.map((movie: any) => {
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
    });
  }


}
