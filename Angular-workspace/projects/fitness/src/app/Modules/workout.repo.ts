import { Injectable } from "@angular/core";
import { Datasource } from "./workout.datasource";
import { Workout } from "./workout.model";

@Injectable({providedIn:"root"})
export class WorkoutRepo{
    public workout:Workout[]=[]
    constructor(private dataSource:Datasource) {}

    saveWorkout(workout:Workout){
        this.dataSource.saveWorkout(workout).subscribe(
          (data)=>{
           console.log(data);
         },
        (error)=>{
         console.error("error no data found");
        }
        )
      }
}