import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-categories',
  templateUrl: './movie-categories.component.html',
  styleUrls: ['./movie-categories.component.scss']
})
export class MovieCategoriesComponent implements OnInit {
  movie:any;
  constructor(
    private movieService : MovieService,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      const id=params.get('id');
      this.movieService.getMovieById(id)
      .subscribe(movie=>{
        this.movie=movie;
      })
    })
  }
}