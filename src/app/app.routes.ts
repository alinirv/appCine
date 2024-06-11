import { Routes } from '@angular/router';
import { AppComponent } from './app.component'; 
import { MovieComponent } from './components/movie/movie.component'; 
import { SalaComponent } from './components/sala/sala.component'; 
import { IngressoComponent } from './components/ingresso/ingresso.component'; 
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'movies', component: MovieComponent },
    { path: 'salas', component: SalaComponent },
    { path: 'ingressos', component: IngressoComponent }
];
