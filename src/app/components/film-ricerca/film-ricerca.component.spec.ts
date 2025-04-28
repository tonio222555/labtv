import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmRicercaComponent } from './film-ricerca.component';

describe('FilmRicercaComponent', () => {
  let component: FilmRicercaComponent;
  let fixture: ComponentFixture<FilmRicercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmRicercaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmRicercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
