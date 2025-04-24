import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { ListaFilm } from '../../models/film.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider-principale',
  templateUrl: './slider-principale.component.html',
  styleUrl: './slider-principale.component.css'
})
export class SliderPrincipaleComponent implements OnInit{
  
  films: ListaFilm[] = [];
  numFilm? :number;
  filmCasuale: any;

  constructor(private fs: FilmService){}

  ngOnInit(): void {
    this.fs.getFilms().subscribe(data => {
      this.films = data.results.filter(film =>film.backdrop_path);
      this.numFilm = Math.floor(Math.random()*this.films.length)
      this.filmCasuale = this.films[this.numFilm]
      console.log(this.numFilm)
    })
  }
}
