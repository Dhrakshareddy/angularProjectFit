import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Workout } from "./workout.model";

@Injectable({providedIn : "root"})
export class Datasource{
    constructor(private http:HttpClient){}

    saveWorkout(workout : Workout):Observable<Workout>{
        return this.http.post<Workout>(`http://localhost:8082/workout/save`,workout)
    }
}