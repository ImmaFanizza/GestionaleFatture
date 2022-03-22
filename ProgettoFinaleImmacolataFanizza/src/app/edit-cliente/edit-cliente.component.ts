import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../classes/cliente';
import { Comune } from '../classes/comune';
import { ClienteService } from '../services/cliente.service';
import { SedeService } from '../services/sede.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {
  tipoCliente: string[] = [];
  cliente: Cliente = new Cliente();
  arrayComune: Comune[] = [];
  constructor(private serviceClienti: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceSede: SedeService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.serviceClienti.getCliente(params['id']).subscribe(cliente => this.cliente = cliente)
    });

    this.serviceClienti.getTipoCliente().subscribe(data => this.tipoCliente = data);
    this.serviceSede.getAllComune().subscribe(data => this.arrayComune = data.content)

  }
  update() {
    this.serviceClienti.updateCliente(this.cliente).subscribe(response => {
      this.cliente = response;
      this.router.navigate(['clienti'])
    });
  }

  aggiungiSede(){
    this.router.navigate(['province'])
  }
}
