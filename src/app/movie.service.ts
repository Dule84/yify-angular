/**
 * Created by Dule on 29/07/2017.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Data} from './data.interface';

@Injectable()
export class MovieService {
    constructor(private http: Http) {

    }
    getMovies(): Observable<Data> {
        return this.http.get('https://yts.ag/api/v2/list_movies.json')
            .map(
                (response: Response) => {
                    return response.json().data;
                }
            );
    }
    getMovie(id: number): Promise<Data> {
        return this.http.get('https://yts.ag/api/v2/movie_details.json?movie_id=' + id)
            .toPromise()
            .then(response => response.json().data as Data)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
