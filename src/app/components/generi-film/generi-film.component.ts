import { Component, Input} from '@angular/core';
import { DiscoverMovie } from '../../models/generi.model';

@Component({
  selector: 'app-generi-film',
  templateUrl: './generi-film.component.html',
  styleUrl: './generi-film.component.css'
})
export class GeneriFilmComponent{
  @Input()
  mGenre?: DiscoverMovie[]
}