import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Fattura } from '../classes/fattura';
import { Stato } from '../classes/stato';


import { FatturaService } from '../services/fattura.service';

@Component({
  selector: 'app-input-fattura',
  templateUrl: './input-fattura.component.html',
  styleUrls: ['./input-fattura.component.css']
})
export class InputFatturaComponent implements OnInit {
  arrayFatture: Stato[] = [];
  fattura: Fattura = new Fattura();
  // cliente: Cliente = new Cliente();
  //fattura = {"data":"2019-07-31T16:09:43.763+00:00","numero":0,"anno":2019,"importo":1692.16,"stato":{
  // "id": 2,
  // "nome": "NON PAGATA"
  //},
  // "cliente":{"id":1}
  //}


  constructor(private serviceFattura: FatturaService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.fattura.cliente.id = data['id'];
    });

    this.serviceFattura.getAllStato().subscribe(data => {
      this.arrayFatture = data.content
    });




    //this.route.params.subscribe(params => {
    // this.serviceCliente.getCliente(params['id']).subscribe(cliente => this.cliente = cliente)
    // })
  }

  create() {

    //this.fattura.data = '2021-02-25T05:27:10.111+00:00';
   


    this.serviceFattura.createFattura(this.fattura).subscribe(data => {
      this.fattura = data
      this.router.navigate(['fatture'])
    }

    );



    //console.log(this.fattura)
  }
}


