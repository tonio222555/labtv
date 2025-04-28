import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneriFilmComponent } from './generi-film.component';

describe('GeneriFilmComponent', () => {
  let component: GeneriFilmComponent;
  let fixture: ComponentFixture<GeneriFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneriFilmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneriFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
