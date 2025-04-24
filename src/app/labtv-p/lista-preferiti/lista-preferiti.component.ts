import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { FilmAcquistato } from '../../models/preferiti.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lista-preferiti',
  templateUrl: './lista-preferiti.component.html',
  styleUrl: './lista-preferiti.component.css'
})
export class ListaPreferitiComponent implements OnInit{

  constructor ( private film: FilmService){}

  preferiti: FilmAcquistato[] = []

  ngOnInit(): void {
    this.film.getFilmAcquistati().subscribe(data => {
      this.preferiti = data
    })
  }
  
}
