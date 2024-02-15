
import { Component } from '@angular/core';

@Component({
  selector: 'app-track-steps',
  templateUrl: './tracksteps.component.html', // Update the file path
  styleUrls: ['./tracksteps.component.css']
})
export class TrackStepsComponent {
  trackedSteps: number | null = null;

  trackSteps() {
    if (this.trackedSteps !== null) {
      alert(`You've tracked ${this.trackedSteps} steps today!`);
    }
  }
}


