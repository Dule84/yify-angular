import {Component, OnInit} from '@angular/core';
import { Data } from '../data.interface';
import {MovieService} from '../movie.service';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    data: Data;

    constructor(private movieService: MovieService) {
    }
    getMovies(): void {
        this.movieService.getMovies()
            .subscribe(
                (data: Data) => this.data = data,
                (error: Response) => console.log(error)
            );
    }

    ngOnInit() {
        this.getMovies();
    }
}
