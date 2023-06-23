import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  @Input() experiencias: Array<any>;
  expFiltradas: Array<any>;
  filtrarAno: string;
  date = new Date();

  constructor() { }

  ngOnInit(): void {
    this.filtrarAno = 'todas';
    this.expFiltradas = this.experiencias;
  }

  radioButtonOnChange(event: any) {
    if (event.value === 'todas') {
      this.findAll();
    } else if (event.value === `${this.date.getFullYear()}`) {
      this.currentAno(event.value)
    } else {
      this.expFiltradas = this.experiencias.filter(exp => (exp.periodo.inicioAno === event.value));
    }
  }

  findAll() {
    this.expFiltradas = this.experiencias;
    return this.expFiltradas;
  }

  currentAno(ano: any) {
    this.expFiltradas = this.experiencias.filter(exp => (exp.periodo.finalAno === ano));
    return this.expFiltradas;
  }
}
