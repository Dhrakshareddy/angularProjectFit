import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { DataService } from './data-source.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent {
 // formData:any={};
  // onSubmit(){
  //   console.log('Doctor registration submitted:',this.formData);
  // }

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.myForm = this.fb.group({

      userName:this.fb.control('sreelatha'),
      email:this.fb.control('0'),
      dob:this.fb.control('0'),
      contactNumber:this.fb.control('0'),
      age:this.fb.control('0'),
      password:this.fb.control('0'),

    
	

      // Define your form controls here
      // Example:
      // name: [''],
      // email: [''],
      // ...
    });
  }

  sendData() {
    console.log("welcome");
    console.log(this.myForm.value);
    const formData = this.myForm.value;

    // Call the service to send data to the backend
    this.dataService.sendData(formData).subscribe(
      (response) => {
        console.log('Data sent successfully', response);
        // Handle success, e.g., show a success message
      },
      (error) => {
        console.error('Error sending data', error);
        // Handle error, e.g., show an error message
      }
    );
}
}
