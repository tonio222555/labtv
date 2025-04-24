import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPrincipaleComponent } from './slider-principale.component';

describe('SliderPrincipaleComponent', () => {
  let component: SliderPrincipaleComponent;
  let fixture: ComponentFixture<SliderPrincipaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderPrincipaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderPrincipaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
