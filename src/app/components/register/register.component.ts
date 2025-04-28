import { Component } from '@angular/core';
import { SignUp } from '../../models/auth.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  errorMessage = "";
  email!: string
  
  constructor(private as: AuthService, private router: Router ){}

  onAddEmail(email: string){
    this.as.addEmail(email)
    if(email){
      this.router.navigate(['/register'])
    }
  }
}
