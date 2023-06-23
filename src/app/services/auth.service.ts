import { Injectable } from '@angular/core';
import { Credenciais } from '../models/credenciais';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authenticate(creds: Credenciais) {
    sessionStorage.setItem('logado', 'true');
  }

  isAuthenticated() {
    let logado = sessionStorage.getItem('logado')
    if (logado === 'true') {
      return true
    }
    return false
  }

  logout() {
    sessionStorage.clear();
  }
}