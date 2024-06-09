import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { IngressoComponent } from './ingresso/ingresso.component';
import { SalaComponent } from './components/sala/sala.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MovieComponent, MatToolbarModule,IngressoComponent, 
      SalaComponent,MatTabsModule, RouterModule, MatIconModule]
})
export class AppComponent {
  title = 'cineStar';
}
