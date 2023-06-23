import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Contato } from 'src/app/models/contato';
import { FooterService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
  contact: Contato;
  contactSub: Subscription;

  constructor(
    private service: FooterService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.contato();
  }

  contato() {
    this.contactSub = this.service.contato().subscribe({
      next: (resp) => {
        this.contact = resp;
      },
      error: (error) => {
        this.toast.error(`${error}`, 'Error', { timeOut: 5000 })
      }
    })
  }

  ngOnDestroy() {
    if (this.contactSub) {
      this.contactSub.unsubscribe();
    }
  }

}
