import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { Stato } from '../classes/stato';
import { FatturaService } from '../services/fattura.service';

@Component({
  selector: 'app-edit-fattura',
  templateUrl: './edit-fattura.component.html',
  styleUrls: ['./edit-fattura.component.css']
})
export class EditFatturaComponent implements OnInit {

  fattura: Fattura = new Fattura();
  arrayFatture:Stato[]=[];
  constructor(private route: ActivatedRoute,
    private serviceFattura: FatturaService,
    private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.serviceFattura.getFattura(params['id']).subscribe(fattura => this.fattura = fattura)
    });
    
    this.serviceFattura.getAllStato().subscribe(data => {
      this.arrayFatture = data.content
    });

  }
  
  update() {
    //this.fattura.data='2021-04-03T22:53:38.389+00:00';
   // this.fattura.stato.nome='PAGATA'

    this.serviceFattura.updateFattura(this.fattura).subscribe(response => {
      this.fattura = response;
      this.router.navigate(['fatture'])
    });
  }
}




