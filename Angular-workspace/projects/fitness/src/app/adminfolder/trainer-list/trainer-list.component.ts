
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user.model';
import { Trainer } from '../model/trainer.model';
import { TrainerService } from '../service/trainer.service';


@Component({
  selector: 'app-trainer-list',
 
  templateUrl: './trainer-list.component.html',
  styleUrl: './trainer-list.component.css'
})
export class TrainerListComponent implements OnInit {
  trainers: Trainer[] = [];

 

  constructor(private trainerService: TrainerService) {}

  ngOnInit(): void {
    this.trainerService.getTrainers().subscribe((trainers: Trainer[]) => {
      // Now 'users' has a defined type of User[]
      console.log(trainers);
      this.trainers=trainers

    });
    // this.getAll();
  }
 
  deleteTrainer(id: number): void {
    console.log(id);
    
    this.trainerService.deleteTrainer(id).subscribe((res) => {
      // this.users = this.users.filter(user => user.userId !== id);
      alert((res))
    });
  }
}

