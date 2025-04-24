import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ResultDiscover, ResultDiscover2, ResultGenre } from '../models/generi.model';

@Injectable({
  providedIn: 'root'
})
export class GeneriService {


  constructor(private httpClient: HttpClient) { }

  
  getFilmGenre(): Observable<ResultGenre>{
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        Authorization: `${environment.API_KEY_AUTH}`
      })
    };

    return this.httpClient.get<ResultGenre>("https://api.themoviedb.org/3/genre/movie/list?language=it", httpOptions)
  }

  getSerieGenre(): Observable<ResultGenre>{
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        Authorization: `${environment.API_KEY_AUTH}`
      })
    };

    return this.httpClient.get<ResultGenre>("https://api.themoviedb.org/3/genre/tv/list?language=it", httpOptions)
  }

  discoverMovie(query: string): Observable<ResultDiscover2>{
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        Authorization: `${environment.API_KEY_AUTH}`
      })
    };

    return this.httpClient.get<ResultDiscover2>(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=it&page=1&sort_by=popularity.desc&with_genres=${query}`, httpOptions)
  }

  discoverSerie(query: string): Observable<ResultDiscover>{
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        Authorization: `${environment.API_KEY_AUTH}`
      })
    };

    return this.httpClient.get<ResultDiscover>(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=it&page=1&sort_by=popularity.desc&with_genres=${query}`, httpOptions)
  }
}
