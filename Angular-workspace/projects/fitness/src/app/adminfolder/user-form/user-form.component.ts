import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class  UserFormComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  userForm!: FormGroup;
  isEditMode = false;
  userId: number = 0; 
  
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      contactNumber: ['', Validators.required]
    });

     this.subscription = this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      if (!isNaN(id)) {
        this.isEditMode = true;
        this.userId = id;

        this.userService.getUserById(id).subscribe((user: User) => {
          this.userForm.patchValue(user);
        });
      
      }
     });
     
    
  } ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSubmit(): void {
    const user: User = this.userForm.value;
    console.log(user);
    
    if (this.isEditMode) {
      user.userId = this.userId;
    }
    

    this.userService.saveUser(user).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }
}
