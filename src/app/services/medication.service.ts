import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMedication } from '../interfaces/medication';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  API_URI = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getMedications() {
    return this.http.get(`${this.API_URI}/medication`);
  }

  getMedication(id: string) {
    return this.http.get(`${this.API_URI}/medication/${id}`);

  }

  deleteMedication(id: string){
    return this.http.delete(`${this.API_URI}/medication/${id}`);
  }

  saveMedication(game: IMedication) {

    return this.http.post(`${this.API_URI}/medication/create`, game);

  }

  updateMedication(id: string|number, updatedMedication: IMedication):Observable<any> {

    return this.http.put(`${this.API_URI}/games/update/${id}`, updatedMedication);

  }
}
