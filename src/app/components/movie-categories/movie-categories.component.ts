import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie-list';

@Component({
  selector: 'app-movie-categories',
  templateUrl: './movie-categories.component.html',
  styleUrls: ['./movie-categories.component.scss']
})
export class MovieCategoriesComponent implements OnInit {
  movie:Movie;
  constructor(
    private movieService : MovieService,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      const _id=params.get('_id');
      this.movieService.getMovieById(_id)
      .subscribe(()=>{
        this.movie[0];
      })
    })
  }
}