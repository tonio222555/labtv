import { Component } from '@angular/core';
import { LoginDto } from '../../models/auth.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userModel = new LoginDto();
  errorMessage = "";

  constructor(private authService: AuthService, private router: Router){}

  login() {
    this.authService.login(this.userModel)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error;
          return of(undefined);
        }),
      )
      .subscribe(user => {
        if (user) {
          this.router.navigate(["/homepage"]);
        }
      });
  }
}
