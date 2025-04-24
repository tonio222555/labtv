import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoggedUser, LoginDto, SignUp } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private serverUrl = 'http://localhost:3000'
  email!: string
  
  constructor(private http : HttpClient) {}

  login(model: LoginDto): Observable<LoggedUser>{
    return this.http.post<LoggedUser>(`${this.serverUrl}/login`, model).pipe(
      tap(user => this.setLoggedUser(user))
    )
  }

  register(model: SignUp): Observable<LoggedUser>{
    return this.http.post<LoggedUser>(`${this.serverUrl}/register`, model)
  } 

  setLoggedUser(user: LoggedUser){
    localStorage.setItem("user", JSON.stringify(user))
  }

  getLoggedUser(): LoggedUser | null {
    let userStorage = localStorage.getItem("user");

    if (userStorage != null) {
      let u: LoggedUser = JSON.parse(userStorage);
      return u;
    }else{
      return null;
    }
  }

  get isUserLogged(): boolean {
    return this.getLoggedUser() != null;
  }

  logout() {
    localStorage.removeItem("user");
  }

  addEmail(email: string){
    this.email = email
  }
}
