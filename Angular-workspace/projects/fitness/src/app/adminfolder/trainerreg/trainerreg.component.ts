

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user.model';
import { Subscription } from 'rxjs';
import { TrainerService } from '../service/trainer.service';
import { Trainer } from '../model/trainer.model';

@Component({
  selector: 'app-trainerreg',
  
  templateUrl: './trainerreg.component.html',
  styleUrl: './trainerreg.component.css'
})
export class  TrainerregComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  trainerForm!: FormGroup;
  isEditMode = false;
  trainerId: number = 0; 
  
  constructor(
    private formBuilder: FormBuilder,
    private trainerService: TrainerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.trainerForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      yearOfExperience: ['', Validators.required],
      shiftTimings: ['', Validators.required],
      certification: ['', Validators.required],
     
      contactNumber: ['', Validators.required]
    });

     this.subscription = this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      if (!isNaN(id)) {
        this.isEditMode = true;
        this.trainerId = id;

        this.trainerService.getTrainerById(id).subscribe((user: User) => {
          this.trainerForm.patchValue(user);
        });
      
      }
     });
     
    
  } ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSubmit(): void {
    const trainer: Trainer = this.trainerForm.value;
    console.log(trainer);
    
    if (this.isEditMode) {
      trainer.trainerId = this.trainerId;
    }
    

    this.trainerService.saveTrainer(trainer).subscribe(() => {
      this.router.navigate(['/trainers']);
    });
  }
}
