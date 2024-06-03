import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient} from '@angular/common/http';

const apiURL = 'https://api.themoviedb.org/3/discover/movie';
const apikey = 'e22d39d58fbdab32ac9e3d34c43a83c5';

/*const apiURL = environment.apiURL;
const apikey = environment.apikey;*/

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private http = inject(HttpClient);

  constructor() { }

  getMovies(){
    return this.http.get(`${apiURL}?api_key=${apikey}`);
  }
}