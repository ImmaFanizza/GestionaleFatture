import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { FatturaService } from '../services/fattura.service';

@Component({
  selector: 'app-tabella-fatture',
  templateUrl: './tabella-fatture.component.html',
  styleUrls: ['./tabella-fatture.component.css']
})
export class TabellaFattureComponent implements OnInit {

  arrayFatture: Fattura[] = [];

  constructor(private serviceFatture: FatturaService,
    private router: Router) { }

  ngOnInit(): void {

    this.serviceFatture.getAllFatture().subscribe(data => {

      this.arrayFatture = data.content
    })
  }


  dettagli(item: Fattura) {

    this.router.navigate(['fatture', item.id])

  }


  
  delete(item: Fattura) {

    this.serviceFatture.deleteFattura(item).subscribe(response => {
      this.arrayFatture = this.arrayFatture.filter(el => el !== item)
    });
  }

  
}
