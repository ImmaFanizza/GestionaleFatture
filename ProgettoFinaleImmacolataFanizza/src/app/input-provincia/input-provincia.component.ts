import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comune } from '../classes/comune';
import { Provincia } from '../classes/provincia';
import { SedeService } from '../services/sede.service';

@Component({
  selector: 'app-input-provincia',
  templateUrl: './input-provincia.component.html',
  styleUrls: ['./input-provincia.component.css']
})
export class InputProvinciaComponent implements OnInit {

  provincia: Provincia = new Provincia();

 comune: Comune = new Comune();
 arrayProvince: Provincia[] = [];

  constructor(private serviceSede:SedeService,
              private router: Router) { }

  ngOnInit(): void {
    
    this.serviceSede.getAllProvince().subscribe(data => {
      this.arrayProvince = data.content
    });
  }

  aggiungi() {

    this.serviceSede.aggiungiProvincia(this.provincia).subscribe(data => this.provincia = data);
    //this.router.navigate(['comune'])
  }
 aggiungiC(){
   this.serviceSede.aggiungiComune(this.comune).subscribe(data=>{

     this.comune= data

      this.router.navigate(['clienti','new'])
   });
 }
 
}
