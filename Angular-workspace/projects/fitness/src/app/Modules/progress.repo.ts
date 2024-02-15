import { Injectable } from "@angular/core";
import { Progress } from "./progress.model";
import { Datasource } from "./progress.datasource";

@Injectable({providedIn:"root"})
export class ProgressRepo{
    public progress:Progress[]=[]
    constructor(private dataSource:Datasource) {}

    saveProgress(progress:Progress){
        this.dataSource.saveProgress(progress).subscribe(
          (data)=>{
           console.log(data);
         },
        (error)=>{
         console.error("error no data found");
        }
        )
      }
}