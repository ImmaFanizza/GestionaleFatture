import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../classes/cliente';
import { Comune } from '../classes/comune';
import { ClienteService } from '../services/cliente.service';
import { SedeService } from '../services/sede.service';

@Component({
  selector: 'app-input-clienti',
  templateUrl: './input-clienti.component.html',
  styleUrls: ['./input-clienti.component.css']
})
export class InputClientiComponent implements OnInit {
  cliente: Cliente = new Cliente();
  tipoCliente: string[] = [];
  arrayComune: Comune[] = [];



  constructor(private serviceClienti: ClienteService, private router: Router, private serviceSede: SedeService) { }

  ngOnInit(): void {

    this.serviceClienti.getTipoCliente().subscribe(data => this.tipoCliente = data);
    this.serviceSede.getAllComune().subscribe(data => this.arrayComune = data.content)
    

     
    

  }

  
  create() {
   //this.cliente.dataInserimento = '';
  // this.cliente.dataUltimoContatto = '2021-04-03T22:53:38.389+00:00';
    //console.log(this.cliente)
    this.serviceClienti.createCliente(this.cliente).subscribe(data => {
      console.log(data)

      this.router.navigate(['clienti'])
    });



  }
  aggiungiSede(){
    this.router.navigate(['province'])
  }

  
}
