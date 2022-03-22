import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comune } from '../classes/comune';
import { Provincia } from '../classes/provincia';
import { DatiComune } from '../interfaces/dati-comune';
import { DatiProvincia } from '../interfaces/dati-provincia';

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  urlComuni='api/comuni?page=0&size=20&sort=id,ASC';
  urlProvince='api/province?page=0&size=20&sort=id,DESC';

  constructor(private http:HttpClient) { }

  getAllComune(){

    return this.http.get<DatiComune>(environment.serverEpicode + this.urlComuni)
  }
  getAllProvince(){

    return this.http.get<DatiProvincia>(environment.serverEpicode + this.urlProvince)
  }

  aggiungiProvincia(provincia:Provincia){

    return this.http.post<Provincia>(environment.serverEpicode + 'api/province',provincia)
  }

  aggiungiComune(comune:Comune){

    return this.http.post<Comune>(environment.serverEpicode +'api/comuni',comune)
  }

}
