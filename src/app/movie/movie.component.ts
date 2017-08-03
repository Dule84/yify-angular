import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Data} from '../data.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  data: Data;

  constructor(
      private movieService: MovieService,
      private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
        .switchMap((params: ParamMap) => this.movieService.getMovie(+params.get('id')))
        .subscribe(data => this.data = data);
  }

}
