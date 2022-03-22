import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Fattura } from '../classes/fattura';
import { DatiFatture } from '../interfaces/dati-fatture';
import { DatiStato } from '../interfaces/dati-stato';

@Injectable({
  providedIn: 'root'
})
export class FatturaService {

  urlFatture = 'api/fatture?page=0&size=20&sort=id,DESC';
  urlModificaFattura='api/fatture/';
  urlStatoFatture='api/statifattura?page=0&size=20&sort=id,DESC';


  constructor(private http: HttpClient) { }


  getAllFatture() {

    return this.http.get<DatiFatture>(environment.serverEpicode + this.urlFatture)
  }


  getFattura(id: number) {

    return this.http.get<Fattura>(environment.serverEpicode +this.urlModificaFattura + id)
  }


  editFattura(fattura: Fattura) {

    return this.http.put(environment.serverEpicode + this.urlModificaFattura + fattura.id, fattura)
  }


  updateFattura(fattura: Fattura) {

    return this.http.put<Fattura>(environment.serverEpicode + this.urlModificaFattura + fattura.id, fattura)
  }


  deleteFattura(fattura:Fattura){

    return this.http.delete(environment.serverEpicode + this.urlModificaFattura+ fattura.id)
  }

  createFattura(fattura:Fattura){

    return this.http.post<Fattura>(environment.serverEpicode +'api/fatture',fattura)
  }


  getAllStato(){

    return this.http.get<DatiStato>(environment.serverEpicode + this.urlStatoFatture)
  }

  
  getByClient(id: number) {
    return this.http.get<DatiFatture>(environment.serverEpicode + 'api/fatture/cliente/'+id+'?page=0&size=20&sort=id,ASC')
  }


}