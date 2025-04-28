import { Component } from '@angular/core';
import { SignUp } from '../../models/auth.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrl: './register2.component.css'
})
export class Register2Component {
  errorMessage = "";
  name!: string
  password!: string
  account!: SignUp
  
  constructor(public authService: AuthService, private router: Router ){}

  register(){
    this.account= new SignUp(this.name, this.authService.email, this.password)
    this.authService.register(this.account).pipe(
      catchError((err: HttpErrorResponse) => {
        this.errorMessage = err.error;
      return of(undefined);     
    })
    ).subscribe(user => {
      if(user){
        this.router.navigate(["/login"])
      }
    })
  }
}
