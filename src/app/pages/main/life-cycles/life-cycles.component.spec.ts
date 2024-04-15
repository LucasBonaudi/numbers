import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCiclesComponent } from './life-cycles.component';

describe('LifeCiclesComponent', () => {
  let component: LifeCiclesComponent;
  let fixture: ComponentFixture<LifeCiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifeCiclesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifeCiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
