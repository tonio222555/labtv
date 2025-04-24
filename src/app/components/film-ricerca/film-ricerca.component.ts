import { Component, Input } from '@angular/core';
import { FilmCercato } from '../../models/ricerca.model';

@Component({
  selector: 'app-film-ricerca',
  templateUrl: './film-ricerca.component.html',
  styleUrl: './film-ricerca.component.css'
})
export class FilmRicercaComponent {
  @Input()
  fCercato?: FilmCercato[];

  hovered = "";

}
