// app.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IngressoComponent } from './components/ingresso/ingresso.component';
import { SalaComponent } from './components/sala/sala.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, MovieComponent, MatToolbarModule, IngressoComponent, 
    SalaComponent, MatTabsModule, RouterModule, MatIconModule, HomeComponent]
})

export class AppComponent implements OnInit {
  title = 'CineStar';
  isPopState = false;
  
  constructor(private router: Router, private locStrat: LocationStrategy) { }
  
  ngOnInit(): void {
	this.locStrat.onPopState(() => {
	  this.isPopState = true;
	});
	
	this.router.events.subscribe(event => {
	  // Scroll to top if accessing a page, not via browser history stack
	  if (event instanceof NavigationEnd && !this.isPopState) {
		window.scrollTo(0, 0);
		this.isPopState = false;
	  }
	  
	  // Ensures that isPopState is reset
	  if (event instanceof NavigationEnd) {
		this.isPopState = false;
	  }
	});
  }
}
