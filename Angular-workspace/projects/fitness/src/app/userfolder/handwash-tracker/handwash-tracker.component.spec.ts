import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandwashTrackerComponent } from './handwash-tracker.component';

describe('HandwashTrackerComponent', () => {
  let component: HandwashTrackerComponent;
  let fixture: ComponentFixture<HandwashTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandwashTrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandwashTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
