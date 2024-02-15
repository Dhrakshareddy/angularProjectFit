import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespiratoryRateTrackerComponent } from './respiratory-rate-tracker.component';

describe('RespiratoryRateTrackerComponent', () => {
  let component: RespiratoryRateTrackerComponent;
  let fixture: ComponentFixture<RespiratoryRateTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespiratoryRateTrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RespiratoryRateTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
