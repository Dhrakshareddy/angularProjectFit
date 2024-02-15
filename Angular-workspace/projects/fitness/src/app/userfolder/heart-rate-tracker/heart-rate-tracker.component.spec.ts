import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartRateTrackerComponent } from './heart-rate-tracker.component';

describe('HeartRateTrackerComponent', () => {
  let component: HeartRateTrackerComponent;
  let fixture: ComponentFixture<HeartRateTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeartRateTrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeartRateTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
