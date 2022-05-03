import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../classes/cliente';
import { Comune } from '../classes/comune';
import { Provincia } from '../classes/provincia';
import { DatiClienti } from '../interfaces/dati-clienti';
import { DatiComune } from '../interfaces/dati-comune';
import { DatiFatture } from '../interfaces/dati-fatture';
import { DatiProvincia } from '../interfaces/dati-provincia';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {



  urlClienti = "api/clienti?page=0&size=20&sort=id,ASC";
  urlModificaClienti = "api/clienti/";

  urlComuni = 'api/comuni?page=0&size=20&sort=id,DESC';
  urlProvince = 'api/province?page=0&size=20&sort=id,DESC';

  //tenantId='fe_0621';
  //bearerToken='Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA0MTEzMSwiZXhwIjoxNjQzOTA1MTMxfQ.ucyqmUEydEy4QV54EMM-hk6RHCD7Z_yFQ1ZazOW7iyiO04tAwG6MvtW_sOYwHj1pXT3lTgnfwU5rHee67Tlp9A'
  //headers= new HttpHeaders();
  constructor(private http: HttpClient) {
    // this.headers= this.headers.set("Authorization",this.bearerToken)
    //                            .set("X-TENANT-ID",this.tenantId)
  }
  
  getAllClienti() {

    //return this.http.get<DatiClienti>(environment.clienti,/{headers:this.headers})
    return this.http.get<DatiClienti>(environment.serverEpicode + this.urlClienti)
  }


  createCliente(cliente: Cliente) {

    return this.http.post<Cliente>(environment.serverEpicode + 'api/clienti', cliente)
  }


  getCliente(id: number) {
    return this.http.get<Cliente>(environment.serverEpicode + this.urlModificaClienti + id)
  }


  deleteCliente(cliente: Cliente) {

    return this.http.delete<Cliente>(environment.serverEpicode + this.urlModificaClienti + cliente.id)
  }


  updateCliente(cliente: Cliente) {

    return this.http.put<Cliente>(environment.serverEpicode + this.urlModificaClienti + cliente.id, cliente)
  }


  getTipoCliente() {

    return this.http.get<string[]>(environment.serverEpicode + this.urlModificaClienti + 'tipicliente')
  }


 
}