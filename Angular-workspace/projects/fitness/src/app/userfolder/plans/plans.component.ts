
import { Component } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent {
  isChecked = false;
  isButtonDisabled = false;

  enableCheckbox() {
    this.isChecked = true;
    this.isButtonDisabled = true;
  }

  removeButtons() {
    this.isChecked = false;
    this.isButtonDisabled = false;
  }
  fitnessPlans = [
    {
      name: 'Basic Plan',
      description: 'Access to basic workout routines and nutrition tips.',
      price: 29.99
    },
    {
      name: 'Premium Plan',
      description: 'Full access to advanced workouts, personalized plans, and nutrition guidance.',
      price: 49.99
    },
    {
      name: 'Pro Plan',
      description: 'All-inclusive package with personalized coaching, meal plans, and workout tracking.',
      price: 79.99
    }
  ];

  // buyPlan(plan: any) {
  //   alert(`You have purchased the ${plan.name} for $${plan.price}.`);
  //   // Add additional logic for handling the purchase
  // }
}

