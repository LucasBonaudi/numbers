import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterTransitComponent } from './letter-transit.component';

describe('LetterTransitComponent', () => {
  let component: LetterTransitComponent;
  let fixture: ComponentFixture<LetterTransitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LetterTransitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetterTransitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
