import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  creds: Credenciais = {
    email: '',
    senha: ''
  }

  constructor(private fb: FormBuilder,
    private service: AuthService,
    private router: Router,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.formLogin = this.fb.group({
      email: this.fb.control('', Validators.email),
      senha: this.fb.control('', Validators.minLength(3))
    })
  }

  logar() {
    this.creds.email = this.formLogin.controls['email'].value;
    this.creds = this.formLogin.controls['senha'].value;

    this.service.authenticate(this.creds);
    this.router.navigate(['home']);
    this.toast.success('Login realizado com sucesso', 'Login', { timeOut: 3000 })
  }

  validaCampos(): boolean {
    return this.formLogin.controls['email'].valid && this.formLogin.controls['senha'].valid;
  }
}
