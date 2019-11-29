import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'
import { Movie } from '../models/movie-list'
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl='http://localhost:3000';
  constructor(private httpClient:HttpClient) { }
  getMovies(): Observable<object> {
    return this.httpClient.get(this.apiUrl + '/movie')
    
  }
  
  getMoviesByTitle(title: string | String):Observable<object>{
    console.log("Buscaste "+title)
    return this.httpClient.get(`http://localhost:3000/movie/title/${title}`)
  }
  // getMoviesByGenre(genre: string | String):Observable<object>{
  //   console.log("Buscaste "+genre)
  //   return this.httpClient.get(`http://localhost:3000/movie/genre/${genre}`)
  //  }
}

