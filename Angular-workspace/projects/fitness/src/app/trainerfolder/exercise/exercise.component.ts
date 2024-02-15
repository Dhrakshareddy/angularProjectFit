import { Component } from '@angular/core';
import { Exercise } from '../../Modules/exercise.model';
import { ExerciseRepo } from '../../Modules/exercise.repo';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css'
})
export class ExerciseComponent {
  exercise:Exercise=new Exercise(0,"","","","",0,"");
  constructor(private exerciserepo:ExerciseRepo) { }

  saveExercise(exercise:Exercise){
    console.log("*********"+exercise);
    alert(JSON.stringify(exercise));
   this.exerciserepo.saveExercise(exercise);
  }
}
