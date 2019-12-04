import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie-list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  
  peliculasBuscar: String = '';
  peliculas: Array<Movie> = [];
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    
    this.movieService.getMovies()
    
    
    .subscribe(
      
      res=>this.peliculas=Object.values(res),
      error=>console.log(error)
    )
  }
      peliculasBuscadas(event: any){
        this.peliculasBuscar = event.target.value
  
          this.movieService.getMoviesByGenre(this.peliculasBuscar)
            .subscribe(
              (data) => this.peliculas = Object.values(data),
            (error) => {
              console.error(error)
              this.movieService.getMoviesByTitle(this.peliculasBuscar)
              .subscribe(
                (data) =>this.peliculas = Object.values(data),
                (error) => console.error (error)
              )
            }
            )
            }

          } 
