// src/app/user/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainer } from '../model/trainer.model';



@Injectable({
  providedIn: 'root'
})
export class TrainerService {
 
  
  // getdoctorById(id: number) {
  //   throw new Error('Method not implemented.');
  // }
  private apiUrl = 'http://localhost:8082/api/trainer';
  getTrainerById: any;

  constructor(private http: HttpClient) {}

   getTrainers(): Observable<Trainer[]> {
     return this.http.get<any[]>(`${this.apiUrl}/getAll`);
   }

  //  getUserById(id: number): Observable<User> {
  //    return this.http.get<User>(`${this.apiUrl}/get/${id}`);
  // }

  saveTrainer(trainer: Trainer): Observable<Trainer> {
    console.log(trainer);
    return this.http.post<Trainer>(`${this.apiUrl}/add`, trainer);
  }

  deleteTrainer(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/deleteById/${id}`, { responseType: 'text' });
  }
  
}

