// src/app/api.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get(`${this.apiUrl}/events`);
  }

  createEvent(event: any) {
    return this.http.post(`${this.apiUrl}/events`, event);
  }
}
