import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Contato } from "../models/contato";

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private http: HttpClient) { }

  contato(): Observable<Contato> {
    return this.http.get<Contato>(`${API_CONFIG.baseUrl}`);
  }
}
