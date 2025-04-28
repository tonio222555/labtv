import { Injectable } from '@angular/core';
import { Ricerca } from '../models/ricerca.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RicercaService {

  constructor(private httpClient: HttpClient) { }

  ricerca(q: string): Observable<Ricerca>{
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `${environment.API_KEY_AUTH}`
      })
    };
    return this.httpClient.get<Ricerca>(`https://api.themoviedb.org/3/search/movie?query=${encodeURI(q)}&include_adult=false&language=en-US&page=1`, httpOptions)
  }
}
