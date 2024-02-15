import { Injectable } from "@angular/core";
import { Exercise } from "./exercise.model";
import { Datasource } from "./exercise.datasource";

@Injectable({providedIn:"root"})
export class ExerciseRepo{
    public exercise:Exercise[]=[]
    constructor(private dataSource:Datasource) {}

    saveExercise(exercise:Exercise){
        this.dataSource.saveExercise(exercise).subscribe(
          (data)=>{
           console.log(data);
         },
        (error)=>{
         console.error("error no data found");
        }
        )
      }
}