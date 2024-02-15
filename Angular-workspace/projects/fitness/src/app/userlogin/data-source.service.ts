import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { create } from 'domain';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:8082/api/user'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  sendData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save`, data);
  }
}