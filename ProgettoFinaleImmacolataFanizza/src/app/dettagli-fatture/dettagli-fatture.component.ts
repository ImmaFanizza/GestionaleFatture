import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { FatturaService } from '../services/fattura.service';

@Component({
  selector: 'app-dettagli-fatture',
  templateUrl: './dettagli-fatture.component.html',
  styleUrls: ['./dettagli-fatture.component.css']
})
export class DettagliFattureComponent implements OnInit {

  fattura: Fattura = new Fattura();

  constructor(private serviceFattura: FatturaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.serviceFattura.getFattura(params['id']).subscribe(data => {
        this.fattura = data
      });
    });
  }

  modifica(fattura:Fattura) {
    this.router.navigate(['fatture',fattura.id,'edit'])
   }

   ritornaTabella(){

    this.router.navigate(['fatture'])
   }
  
}
