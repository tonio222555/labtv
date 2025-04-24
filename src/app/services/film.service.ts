import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { DettaglioFilm, Result2, ResultFilm, VideoRes } from '../models/film.model';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Credits } from '../models/credits.model';
import { Ricerca } from '../models/ricerca.model';
import { FilmAcquistato, NuovoFilmAcquistato } from '../models/preferiti.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  
  private serverUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient, private as: AuthService, private router: Router) {}

  getFilms(): Observable<ResultFilm>{
    return this.httpClient.get<ResultFilm>(`${environment.MOVIE_API_BASE_URL}/popular?api_key=${environment.MOVIE_API_KEY}&language=it&page=1`)
  }

  getNowPlaying(): Observable<Result2>{
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        Authorization: `${environment.API_KEY_AUTH}`
      })
    };

    return this.httpClient.get<Result2>(`${environment.MOVIE_API_BASE_URL}/now_playing?language=it&page=2`, httpOptions)
  }

  getTopRated(): Observable<ResultFilm>{
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        Authorization: `${environment.API_KEY_AUTH}`
      })
    };

    return this.httpClient.get<ResultFilm>(`${environment.MOVIE_API_BASE_URL}/top_rated?language=it&page=1`, httpOptions)
  }

  getUpcoming(): Observable<Result2>{
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        Authorization: `${environment.API_KEY_AUTH}`
      })
    };

    return this.httpClient.get<Result2>(`${environment.MOVIE_API_BASE_URL}/upcoming?language=it&page=2`, httpOptions)
  }

  getDetails(id: number): Observable<DettaglioFilm>{
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        Authorization: `${environment.API_KEY_AUTH}`
      })
    };

    return this.httpClient.get<DettaglioFilm>(`${environment.MOVIE_API_BASE_URL}/${id}?language=it`, httpOptions)
  }

  getVideos(id: number): Observable<VideoRes>{
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        Authorization: `${environment.API_KEY_AUTH}`
      })
    };

    return this.httpClient.get<VideoRes>(`${environment.MOVIE_API_BASE_URL}/${id}/videos?api_key=${environment.MOVIE_API_KEY}&language=it`, httpOptions)
  }

  getCast(id: number): Observable<Credits>{
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        Authorization: `${environment.API_KEY_AUTH}`
      })
    };

    return this.httpClient.get<Credits>(`${environment.MOVIE_API_BASE_URL}/${id}/credits?language=it`, httpOptions)
  }

  getFilmSimilar(id: number){
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        Authorization: `${environment.API_KEY_AUTH}`
      })
    };

    return this.httpClient.get<Ricerca>(`${environment.MOVIE_API_BASE_URL}/${id}/similar?language=it&page=1&pageSize=5`, httpOptions)
  }

  acquista(film: DettaglioFilm): Observable<FilmAcquistato | undefined> {
    if (!this.as.isUserLogged) {
      return of(undefined);
    }
  
    const user = this.as.getLoggedUser();
    if (!user) {
      return of(undefined);
    }
  
    const userId = user.user.id;
    const token = user.accessToken;
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    const httpOptions = { headers };
  
    return this.getFilmAcquistati().pipe(
      switchMap(filmAcquistati => {
        const presente = filmAcquistati.some(f => f.film.id === film.id);
  
        if (presente) {
          return of(undefined);
        }
  
        const model = new NuovoFilmAcquistato(userId, film);
        return this.httpClient.post<FilmAcquistato>(
          `${this.serverUrl}/film`,
          model,
          httpOptions
        ).pipe(
          catchError(error => {
            if (error.status === 401){
              this.as.logout();
              this.router.navigate(['/login']);
              
            }
            return throwError(() => error);
          })
        )
      })
    );
  }
  
  getFilmAcquistati(): Observable<FilmAcquistato[]> {
    if (!this.as.isUserLogged) {
      return of([]);
    }
  
    const user = this.as.getLoggedUser();
    if (!user) {
      return of([]);
    }
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${user.accessToken}`
    });
  
    const httpOptions = { headers };
    const url = `${this.serverUrl}/film?userId=${user.user.id}`;
  
    return this.httpClient.get<FilmAcquistato[]>(url, httpOptions);
  }

  rimuoviFilmByDettaglio(film: DettaglioFilm): Observable<any> {
    if (!this.as.isUserLogged) return of();
  
    const user = this.as.getLoggedUser();
    const userId = user?.user.id;
    const token = user?.accessToken;
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.httpClient.get<FilmAcquistato[]>(
      `${this.serverUrl}/film?userId=${userId}&film.id=${film.id}`,
      { headers }
    ).pipe(
      switchMap(acquisti => {
        if (acquisti.length === 0) return of();
        const idAcquisto = acquisti[0].id;
        return this.httpClient.delete(`${this.serverUrl}/film/${idAcquisto}`, { headers });
      })
    );
  }
  
  
}
