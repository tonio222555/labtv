import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFilmComponent } from './home-film.component';

describe('HomeFilmComponent', () => {
  let component: HomeFilmComponent;
  let fixture: ComponentFixture<HomeFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeFilmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
