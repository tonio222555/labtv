import { Component, OnInit } from '@angular/core';
import { DiscoverMovie, Genre } from '../../models/generi.model';
import { GeneriService } from '../../services/generi.service';
import { FilmService } from '../../services/film.service';
import { ListaFilm } from '../../models/film.model';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrl: './film.component.css'
})
export class FilmComponent implements OnInit{
  genere?: any;
  generiMovie: Genre[] = [];
  movieGenre: DiscoverMovie[] = [];
  films: ListaFilm[] = [];
  loading: boolean = false;

  constructor( private gs: GeneriService, private fs: FilmService){}

  ngOnInit(): void {
    this.gs.getFilmGenre().subscribe(data => {
      this.generiMovie = data.genres;
    });

    this.getMovie();

    this.fs.getFilms().subscribe(dati => {
      this.films = dati.results.filter(film =>film.backdrop_path)
    })
  }

  movie(event: any) {
    this.genere = event.target.value;
    this.getMovie();
    this.loading = true
  }

  getMovie() {
    this.gs.discoverMovie(this.genere).subscribe((movie) => {
      this.movieGenre = movie.results.filter(film => film.backdrop_path);
      console.log(this.movieGenre);
    });
  }
}

