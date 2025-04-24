import { Component, ElementRef, ViewChild } from '@angular/core';
import { DettaglioFilm, Videos } from '../../models/film.model';
import { Cast } from '../../models/credits.model';
import { FilmCercato } from '../../models/ricerca.model';
import { FilmService } from '../../services/film.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FilmAcquistato } from '../../models/preferiti.model';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrl: './dettaglio.component.css'
})
export class DettaglioComponent {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  detail?: DettaglioFilm;
  video?: Videos[] = [];
  cast?: Cast[] = [];
  similar?: FilmCercato[] = [];
  url: string = "https://image.tmdb.org/t/p/w300";
  selectedVideoKey: string | null = null;
  isDisabled : boolean = false;
  preferiti: FilmAcquistato[] = [];


  constructor(private fs: FilmService, private router: ActivatedRoute, private snackBar: MatSnackBar){}
  
  ngOnInit(): void {
    this.dettaglio();
    this.fs.getFilmAcquistati().subscribe(data => {
      this.preferiti = data;
    });
  }

  dettaglio(){
    const codice = this.router.snapshot.paramMap.get('id');
    const codiceNumber = Number(codice)
    
    this.fs.getDetails(codiceNumber).subscribe((dati) => {
      this.detail = dati;
    })

    this.fs.getCast(codiceNumber).subscribe((dati) => {
      this.cast = dati.cast;
    })

    this.fs.getFilmSimilar(codiceNumber).subscribe((dati) => {
      this.similar = dati.results;
    })
    
    this.fs.getVideos(codiceNumber).subscribe((dati) => {
      this.video = dati.results;
      if(this.video.length === 0){
        this.isDisabled = true;
      }      
    })
  }

  openTrailer(){
    return this.selectedVideoKey = this.video![0].key;
  }

  chiudiVideo() {
    this.selectedVideoKey = null;
  }

  acquistafilm(film: DettaglioFilm) {
    this.fs.acquista(film).subscribe({
      next: f => {
        if (f) {
          this.fs.getFilmAcquistati().subscribe(data => {
            this.preferiti = data;
          });
          this.snackBar.open('Film aggiunto alla lista!', 'X', {
            duration: 3000
          });
        } else {
          this.snackBar.open('Hai già aggiunto questo film.', 'X', {
            duration: 3000
          });
        }
      },
      error: err => {
        if (err.status === 401) {
          this.snackBar.open('Sessione scaduta. Fai di nuovo login.', 'X', {
            duration: 3000
          });
        }
      }
    });
  }

  rimuovi(film: DettaglioFilm) {
    this.fs.rimuoviFilmByDettaglio(film).subscribe(() => {
      this.fs.getFilmAcquistati().subscribe(data => {
        this.preferiti = data;
      });
      this.snackBar.open('Film rimosso dalla lista.', 'Chiudi', {
        duration: 3000
      });
    });
  }

  isFilmAcquistato(film: DettaglioFilm): boolean {
    return this.preferiti.some(f => f.film.id === film.id);
  }
  
  
  isDragging = false;
  startX = 0;
  sLeft = 0;

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  startDrag(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.pageX - this.carousel.nativeElement.offsetLeft;
    this.sLeft = this.carousel.nativeElement.scrollLeft;
  }

  onDrag(event: MouseEvent) {
    if (!this.isDragging) return;
    event.preventDefault();
    const x = event.pageX - this.carousel.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 1.5; // speed
    this.carousel.nativeElement.scrollLeft = this.sLeft - walk;
  }

  endDrag() {
    this.isDragging = false;
  }

}
