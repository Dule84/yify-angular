import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {MovieService} from './movie.service';
import {TruncatePipe} from './truncate.pipe';
import { MovieComponent } from './movie/movie.component';
import { YoutubePipe } from './youtube.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TruncatePipe,
    MovieComponent,
    YoutubePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
