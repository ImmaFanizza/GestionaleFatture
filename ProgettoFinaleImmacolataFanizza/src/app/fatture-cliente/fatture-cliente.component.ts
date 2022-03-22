import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { FatturaService } from '../services/fattura.service';

@Component({
  selector: 'app-fatture-cliente',
  templateUrl: './fatture-cliente.component.html',
  styleUrls: ['./fatture-cliente.component.css']
})
export class FattureClienteComponent implements OnInit {

  // fattura:Fattura= new Fattura();
   arrayFatture:Fattura[]=[];
  constructor(
          private serviceFatture:FatturaService,
          private route:ActivatedRoute

  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params=>{
      
      this.serviceFatture.getByClient(params['id']).subscribe(response=>{
        this.arrayFatture= response.content
      })
    });
  }

}
