import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inizio',
  templateUrl: './inizio.component.html',
  styleUrl: './inizio.component.css'
})
export class InizioComponent {
 email!: string;

 constructor( public authService: AuthService, private router: Router){}

 onAddEmail(email: string){
  this.authService.addEmail(email)
  if(email){
    this.router.navigate(['/register'])
  }
 }
}
