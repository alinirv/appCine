import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { IngressoComponent } from './ingresso/ingresso.component';
import { SalaComponent } from './components/sala/sala.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MovieComponent, MatToolbarModule,IngressoComponent, SalaComponent]
})
export class AppComponent {
  title = 'cineStar';
}
