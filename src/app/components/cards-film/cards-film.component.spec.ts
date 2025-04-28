import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsFilmComponent } from './cards-film.component';

describe('CardsFilmComponent', () => {
  let component: CardsFilmComponent;
  let fixture: ComponentFixture<CardsFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsFilmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
