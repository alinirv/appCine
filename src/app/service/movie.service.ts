import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const apiURL = environment.apiURL;
const apikey = environment.apikey

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