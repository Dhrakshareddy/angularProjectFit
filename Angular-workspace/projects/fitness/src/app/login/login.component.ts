import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { Login } from '../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  public login = new Login('', '');
  public loginForm: any;
  public values: any[] = [];
  public details: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(2)]],
    });
  }
  onSubmit(): void {
    alert('hello');
     if(this.login.name=="admin" && this.login.password=="0000"){
      alert(' trainer response');
      this.router.navigate(['/about']);
    }
    else if (this.loginForm.valid) {
      this.login.name = this.loginForm.value.name;
      this.login.password = this.loginForm.value.password;
      console.log(this.login.name);
      console.log(this.login.password);

      // this.values = this.loginForm.value;
      // this.details = JSON.stringify(this.values);
      // alert("formDetails"+this.details)
      // console.log(this.details);



      this.service.loginDetails(this.login).subscribe(
        (response: any) => {
          alert('response');
          const json = response.JSON;
          console.log('Response user:', response);

          // Check for success or failure based on your server response
          if (response != null) {
            // Login successful logic
            if (response.role === 'USER') {
              this.router.navigate(['/verticalnav']);
            }

            console.log('Login successful');
          } else {
            // Login failed logic
            this.router.navigate(['/verticalnav']);
          }
        },
        (error: any) => {
          console.error('Error:', error);

          // Handle specific error cases if needed
          if (error.status === 401) {
            console.log('Unauthorized - Incorrect credentials');
          } else {
            console.log('Login failed - Unexpected error');
          }
        }
      );

      this.service.doctorLoginDetails(this.login).subscribe(
        (response: any) => {
          alert(' Doctor response');
          const json = response.JSON;
          console.log('Response:', response);

          // Check for success or failure based on your server response
          if (response != null) {
            // Login successful logic
            if (response.role == 'DOCTOR') {
              this.router.navigate(['/home']);
            }

            console.log('Login successful');
          } else {
            // Login failed logic
          }
        },
        (error: any) => {
          console.error('Error:', error);

          // Handle specific error cases if needed
          if (error.status === 401) {
            console.log('Unauthorized - Incorrect credentials');
          } else {
            console.log('Login failed - Unexpected error');
          }
        }
      );

      this.service.trainerLoginDetails(this.login).subscribe(
        (response: any) => {
          alert(' trainer response');
          const json = response.JSON;
          console.log('Response 000000000000:', response);

          // Check for success or failure based on your server response
          if (response != null) {
            // Login successful logic
            if (response.role === 'TRAINER') {
              this.router.navigate(['/trainer']);
            } 

           
            else {
              this.router.navigate(['/about']);
            }

            console.log('Login successful');
          }
         
          else {
            // Login failed logic
            this.router.navigate(['/home']);
          }
        },
        (error: any) => {
          console.error('Error:', error);
          this.router.navigate(['/varticalnav']);
          // Handle specific error cases if needed
          if (error.status === 401) {
            console.log('Unauthorized - Incorrect credentials');
          } else {
            console.log('Login failed - Unexpected error');
          }
        }
      );
    }
  }

  // onSubmit(): void {
  //   if (this.loginForm.valid) {
  //     const email = this.loginForm.value.email;
  //     const password = this.loginForm.value.password;
  //     this.values=this.loginForm.value;
  //     this.details=JSON.stringify(this.values)

  //     alert(email);
  //     alert(password);
  //     alert("submit values"+JSON.stringify(this.values))
  //     //  alert(this.loginForm.value)
  //      console.log("values"+this.values);

  //     // Add your login logic here (e.g., call a service to authenticate)
  //     // console.log('Email:', email);
  //     // console.log('Password:', password);
  //     this.service.loginDetails(this.details).subscribe(items=>
  //       (console.log("items"+items)),
  //     (error: any)=>console.log("login faild")

  //     )
  //   }
  // }
}
