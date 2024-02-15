import { Component } from '@angular/core';

import { Workout } from '../../Modules/workout.model';
import { WorkoutRepo } from '../../Modules/workout.repo';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.css'
})
export class WorkoutComponent {
 
  workout:Workout=new Workout(0,new Date(),"","","",0);
  constructor(private workoutRepo:WorkoutRepo) { }

  saveWorkout(workout:Workout){
    console.log("*********"+workout);
    alert(JSON.stringify(workout));
   this.workoutRepo.saveWorkout(workout);
  }

}
