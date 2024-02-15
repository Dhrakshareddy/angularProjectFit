// src/app/doctor/doctor-form/doctor-form.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../service/doctor.service';
import { Doctor } from '../model/doctor.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  doctorForm!: FormGroup;
  isEditMode = false;
  doctorId: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.doctorForm = this.formBuilder.group({
      doctorName: ['', Validators.required],
      yearOfExperience: ['', Validators.required],
      contactNumber: ['', Validators.required],
      shiftTimings: ['', Validators.required],
      specialization: ['', Validators.required],
      gender: ['', Validators.required]
      // Add other fields as needed
    });
    this.subscription = this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      if (!isNaN(id)) {
        this.isEditMode = true;
        this.doctorId = id;
        this.doctorService.getDoctorById(id).subscribe((doctor: Doctor) => {
          this.doctorForm.patchValue(doctor);
        });
       
      }
     });
   
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // src/app/doctor/doctor.component.ts
// src/app/doctor/doctor.component.ts
onSubmit(): void {
  const doctor: Doctor = this.doctorForm.value;
  console.log(doctor);

  if (this.isEditMode) {
    doctor.doctorId = this.doctorId; // Use the correct property name
  }

  this.doctorService.saveDoctor(doctor).subscribe(() => {
    this.router.navigate(['/doctors']);
  });
}


}
