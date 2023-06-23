import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  logado: boolean;
  experiencias = [
    {
      empresa: "Pacto Soluções",
      cargo: "Desenvolvedor Front End",
      local: 'Goiânia - GO',
      periodo: {
        inicioAno: '2022',
        finalAno: '2023',
        inicioMes: 'Julho',
        finalMes: 'Janeiro'

      },
      atribuicoes: 'Desenvolvimento de novas aplicações e manutenções em sistemas.Tecnologias usadas Angular, HTML, CSS, JavaScript, React, NodeJS,Versionamento de código, Jira.',
      tecnologias: 'Angular, HTML, CSS, TypeScript, Git, Jira'
    },
    {
      empresa: "PSV Sistemas",
      cargo: "Desenvolvedor Front End",
      local: 'Ouro Branco - MG',
      periodo: {
        inicioAno: '2021',
        finalAno: '2022',
        inicioMes: 'Dezembro',
        finalMes: 'Julho'

      },
      atribuicoes: 'Desenvolvimento de aplicação voltadas para siderúrgicas, tecnologias usadasAngular, Typescript, Mysql, Versionamento de código, CSS, HTML.',
      tecnologias: 'Angular, HTML, CSS, TypeScript, Git, MySQL'
    },
    {
      empresa: "BUUS",
      cargo: "Desenvolvedor Front End",
      local: 'Rio de Janeiro - RJ',
      periodo: {
        inicioAno: '2021',
        finalAno: '2021',
        inicioMes: 'Julho',
        finalMes: 'Dezembro'
      },
      atribuicoes: 'Desenvolvimento de aplicações web para transporte.',
      tecnologias: 'Angular, HTML, CSS, TypeScript, Git, MySQL'
    },
    {
      empresa: "Rota Seguros",
      cargo: "Desenvolvedor Front End",
      local: 'Belo Horizonte - MG',
      periodo: {
        inicioAno: '2021',
        finalAno: '2022',
        inicioMes: 'Janeiro',
        finalMes: 'Junho'
      },
      atribuicoes: 'Desenvolvimento de aplicações web.',
      tecnologias: 'React, HTML, CSS, TypeScript'
    },
    {
      empresa: "Universidade Federal de Ouro Preto",
      cargo: "Monitoria em Interação Humano-Computador",
      local: 'Ouro Preto - MG',
      periodo: {
        inicioAno: '2018',
        finalAno: '2019',
        inicioMes: 'Agosto',
        finalMes: 'Janeiro'
      },
      atribuicoes: 'Fui monitor da disciplina Interação Humano-Computador, área dacomputação que' +
        'envolve a interação entre pessoas (usuários) eequipamentos computacionais desenvolvendo métodos e' +
        'ferramentas paradesign, criação, implementação e manutenção de sistemas computacionais adequados' +
        'ao uso humano. Como monitor da disciplina foi responsávelpor participar e dar suporte aos' +
        'alunos durante todo processo de criação edesenvolvimento (levantamento de requisitos,' +
        'metáforas, personas, modelode tarefas, modelo de interação, modelo de dados, cenário de' +
        'interação eimplementação) até a avaliação do aplicativo proposto pela disciplina.',
      tecnologias: 'levantamento de requisitos, metáforas, personas, modelode tarefas, modelo de interação,' +
        'modelo de dados, cenário de interação eimplementação'
    }
  ];

  constructor(
    private router: Router,
    private authService: AuthService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.logado = true;
  }

  sairConta() {
    this.router.navigate(['login']);
    this.authService.logout();
    this.toast.success('Logout realizado com sucesso', 'Logout', { timeOut: 3000 })
  }

  ngOnDestroy() {
    this.authService.logout();
  }
}
