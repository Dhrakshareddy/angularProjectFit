// src/app/user/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor.model';



@Injectable({
  providedIn: 'root'
})
export class DoctorService {
 
  
  // getdoctorById(id: number) {
  //   throw new Error('Method not implemented.');
  // }
  private apiUrl = 'http://localhost:8082/api/doctor_profile';
  getDoctorById: any;

  constructor(private http: HttpClient) {}

   getDoctors(): Observable<Doctor[]> {
     return this.http.get<any[]>(`${this.apiUrl}/getAll`);
   }

  //  getUserById(id: number): Observable<User> {
  //    return this.http.get<User>(`${this.apiUrl}/get/${id}`);
  // }

  saveDoctor(doctor: Doctor): Observable<Doctor> {
    console.log(doctor);
    return this.http.post<Doctor>(`${this.apiUrl}/add`, doctor);
  }

  deleteDoctor(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/deleteById/${id}`, { responseType: 'text' });
  }
  
}

