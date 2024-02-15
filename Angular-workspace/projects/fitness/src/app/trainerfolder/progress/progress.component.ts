import { Component } from '@angular/core';
import { Progress } from '../../Modules/progress.model';
import { ProgressRepo } from '../../Modules/progress.repo';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {
  progress:Progress=new Progress(0,0,new Date(),0,0);
  constructor(private progressrepo:ProgressRepo) { }

  saveProgress(progress:Progress){
    console.log("*********"+progress);
    alert(JSON.stringify(progress));
   this.progressrepo.saveProgress(progress);
  }
}
