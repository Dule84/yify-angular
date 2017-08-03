import {Routes, RouterModule} from '@angular/router';
import {MoviesComponent} from './movies/movies.component';
import {ModuleWithProviders} from '@angular/core';
import {MovieComponent} from "./movie/movie.component";

/**
 * Created by Dule on 29/07/2017.
 */

const APP_ROUTES: Routes = [
    {path: '', component: MoviesComponent},
    { path: 'movie/:id', component: MovieComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);


