import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Progress } from "./progress.model";

@Injectable({providedIn : "root"})
export class Datasource{
    constructor(private http:HttpClient){}

    saveProgress(progress : Progress):Observable<Progress>{
        return this.http.post<Progress>(`http://localhost:8082/progress/save`,progress)
    }
}