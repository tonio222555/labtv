import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ListaFilm } from '../../models/film.model';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-cards-film',
  templateUrl: './cards-film.component.html',
  styleUrl: './cards-film.component.css',
})
export class CardsFilmComponent implements OnInit{
  films: ListaFilm[] = [];
  nowPlaying: ListaFilm[] = [];
  topRated: ListaFilm[] = [];
  upcoming: ListaFilm[] = [];
  
  constructor(private filmService: FilmService){}


  ngOnInit(): void{
    this.filmService.getFilms().subscribe(data => {
      this.films = data.results.filter(film => film.backdrop_path);
    })

    this.filmService.getNowPlaying().subscribe(data => {
      this.nowPlaying = data.results.filter(film => film.backdrop_path);
    })

    this.filmService.getTopRated().subscribe(data => {
      this.topRated = data.results.filter(film => film.backdrop_path);
    })

    this.filmService.getUpcoming().subscribe(data => {
      this.upcoming = data.results.filter(film => film.backdrop_path);
    })
  }

  @ViewChildren('carousel') carousel!: QueryList<ElementRef>;
  hovered = '';

  scrollCarousel(direction: 'left' | 'right', index: number) {
    const element = this.carousel.toArray()[index].nativeElement;
    const scrollAmount = 300;
    element.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  }
  
  isDown: boolean[] = [];
  startX: number[] = [];
  scrollLeft: number[] = [];

  ngAfterViewInit() {
    this.carousel.forEach((carousel, index) => {
      const el = carousel.nativeElement;
  
      this.isDown[index] = false;
  
      el.addEventListener('pointerdown', (e: PointerEvent) => {
        this.isDown[index] = true;
        el.classList.add('dragging');
        this.startX[index] = e.pageX - el.offsetLeft;
        this.scrollLeft[index] = el.scrollLeft;
      });
  
      el.addEventListener('pointerleave', () => {
        this.isDown[index] = false;
        el.classList.remove('dragging');
      });
  
      el.addEventListener('pointerup', () => {
        this.isDown[index] = false;
        el.classList.remove('dragging');
      });
  
      el.addEventListener('pointermove', (e: PointerEvent) => {
        if (!this.isDown[index]) return;
        e.preventDefault();
        const x = e.pageX - el.offsetLeft;
        const walk = (x - this.startX[index]) * 1.5;
        el.scrollLeft = this.scrollLeft[index] - walk;
      });
    });
  }  
}

