import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Exercise } from "./exercise.model";

@Injectable({providedIn : "root"})
export class Datasource{
    constructor(private http:HttpClient){}

    saveExercise(exercise : Exercise):Observable<Exercise>{
        return this.http.post<Exercise>(`http://localhost:8082/exercise/save`,exercise)
    }
}