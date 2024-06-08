import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';


import {MatToolbarModule} from '@angular/material/toolbar';
<<<<<<< HEAD
import { IngressoComponent } from './ingresso/ingresso.component';
=======
import { SalaComponent } from './components/sala/sala.component';
>>>>>>> 6dbc20c6b54eeed67c4174e1291a98497a847f7a

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
<<<<<<< HEAD
    imports: [RouterOutlet, MovieComponent, MatToolbarModule,IngressoComponent]
=======
    imports: [RouterOutlet, MovieComponent, MatToolbarModule, SalaComponent]
>>>>>>> 6dbc20c6b54eeed67c4174e1291a98497a847f7a
})
export class AppComponent {
  title = 'cineStar';
}
