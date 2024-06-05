// home.component.ts
import { Component, Inject, OnInit, inject } from '@angular/core';
import { Exibicao } from '../../model/Exibicao.model';
import { Filme } from '../../model/Filme.model';
import { Sala } from '../../model/Sala.model';
import { MovieService } from '../../service/movie.service';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MatCardModule, MatToolbarModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  private movieService = inject(MovieService);

  exibicoes: Exibicao[] = [];
  movies: any = [];

  ngOnInit(): void {
    this.loadExibicao()
  }

  loadMovies(){
    this.movieService.getMovies().subscribe({
      next: (res:any)=>{
        this.movies=res.results;
        console.log(res.results);
      },
      error: (error)=>console.log('Erro ao realizar um fetch ds filmes', error)
    })
  }

  loadExibicao(){

    this.movieService.getMovies().subscribe((movies: any) => {
      this.exibicoes = movies.results.map((movie: any) => {
        const filme = new Filme();
        filme.id = movie.id;
        filme.titulo = movie.title;
        filme.descricao = movie.overview;
        filme.ano_release = new Date(movie.release_date).getFullYear();
        filme.duracao = movie.runtime; // Supondo que a API retorne a duração
        filme.avaliacao = movie.vote_average;
        
        const sala = new Sala();
        sala.id = 1; // Defina um valor de exemplo ou obtenha da API
        sala.nome = "Sala 1"; // Defina um valor de exemplo ou obtenha da API
        
        const exibicao = new Exibicao();
        exibicao.id = movie.id;
        exibicao.filme = filme;
        exibicao.sala = sala;
        exibicao.dataExibicao =new Date( '2024-06-10'); // Defina a data de exibição desejada
        exibicao.horaExibicao = 1400; // Defina a hora de exibição desejada

        return exibicao;
      });
    });
  }
}

