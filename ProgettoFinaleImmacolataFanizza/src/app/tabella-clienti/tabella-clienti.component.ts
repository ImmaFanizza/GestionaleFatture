import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../classes/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-tabella-clienti',
  templateUrl: './tabella-clienti.component.html',
  styleUrls: ['./tabella-clienti.component.css']
})
export class TabellaClientiComponent implements OnInit {

  cliente: Cliente = new Cliente();
  arrayClienti: Cliente[] = [];


  constructor(private serviceClienti: ClienteService,
    private router: Router) { }

  ngOnInit(): void {

    this.serviceClienti.getAllClienti().subscribe(data => this.arrayClienti = data.content)
  }
  detail(item: Cliente) {

    this.router.navigate(['clienti', item.id])
  }
  delete(item: Cliente) {

    this.serviceClienti.deleteCliente(item).subscribe(data => {
      this.arrayClienti = this.arrayClienti.filter(el => el !== item)
    })


  }
  edit(item: Cliente) {
    this.router.navigate(['clienti', item.id, 'edit'])
  }
}



