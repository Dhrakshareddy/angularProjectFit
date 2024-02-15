import { Component } from '@angular/core';

@Component({
  selector: 'app-drinkwater',
 
  templateUrl: './drinkwater.component.html',
  styleUrl: './drinkwater.component.css'
})
export class DrinkwaterComponent {
  currentWater: number = 0;
  alertMessage: string = '';

  checkWaterIntake() {
    if (this.currentWater >= 8) {
      this.alertMessage = 'Great job! You have reached the recommended daily intake.';
    } else {
      const remainingWater = 8 - this.currentWater;
      this.alertMessage = `You need to drink ${remainingWater} more liters of water.`;
    }
  }
}
