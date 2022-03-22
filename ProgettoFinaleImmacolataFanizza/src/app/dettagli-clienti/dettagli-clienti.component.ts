import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../classes/cliente';
import { Fattura } from '../classes/fattura';
import { ClienteService } from '../services/cliente.service';
import { FatturaService } from '../services/fattura.service';

@Component({
  selector: 'app-dettagli-clienti',
  templateUrl: './dettagli-clienti.component.html',
  styleUrls: ['./dettagli-clienti.component.css']
})
export class DettagliClientiComponent implements OnInit {

  cliente:Cliente= new Cliente();
  arrayFatture:Fattura[]=[];

  constructor( private serviceClienti:ClienteService,
               private route:ActivatedRoute,
               private router:Router,
               private serviceFatture:FatturaService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.serviceClienti.getCliente(params['id']).subscribe(cliente=>this.cliente=cliente)
     
    });

  }
  aggiungiFattura(cliente:Cliente){

    this.router.navigate(['fattura',cliente.id,'new'])
  }
  ritorna(){

    this.router.navigate(['clienti'])
  }

  dettagliFattura(cliente:Cliente){
    this.router.navigate(['fatture',cliente.id,'cliente'])
  }
}