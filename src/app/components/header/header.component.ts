import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() logado: boolean;
  @Output() logout = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  sair() {
    this.logado = false;
    this.logout.emit(this.logado);
  }

}
