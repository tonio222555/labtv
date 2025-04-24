import { DettaglioFilm } from "./film.model"

export class NuovoFilmAcquistato {
    constructor(
      public userId: number,
      public film: DettaglioFilm
    ){}
}
  
export interface FilmAcquistato {
    id: number
    userId: number
    film: DettaglioFilm
}