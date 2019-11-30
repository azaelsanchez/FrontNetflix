import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie-list';
@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss']
})
export class MoviedetailComponent implements OnInit {
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
