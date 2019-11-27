import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie-list';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  peliculas:Array<Movie>=[];
  constructor(private movieService:MovieService) { }
  
  ngOnInit() {
    this.movieService.getMovies()
    
    .subscribe(
      
      res=>this.peliculas=Object.values(res),
      error=>console.log(error)
    )
    
  }
 
}
