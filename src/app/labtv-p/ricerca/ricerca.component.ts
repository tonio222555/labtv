import { Component } from '@angular/core';
import { FilmCercato } from '../../models/ricerca.model';
import { RicercaService } from '../../services/ricerca.service';
import { FilmService } from '../../services/film.service';
import { ListaFilm } from '../../models/film.model';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrl: './ricerca.component.css'
})
export class RicercaComponent {
  ricerca: string = "";

  filmCercati?: FilmCercato[];
  films: ListaFilm[] = [];

  constructor(private ricercaService : RicercaService, private film : FilmService){}

  ngOnInit(): void {
    this.cerca()
    this.film.getFilms().subscribe(data => {
      this.films = data.results.filter(film => film.backdrop_path)
    })
  }

  cerca(){
    this.ricercaService.ricerca(this.ricerca).subscribe(dati => {
      this.filmCercati = dati.results.filter(film => film.backdrop_path )
    })
  }

  cancella(){
    this.ricerca = ""
  }
}
