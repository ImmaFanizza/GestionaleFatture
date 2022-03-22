import { Cliente } from "../classes/cliente";

export interface DatiClienti {
    content:Array<Cliente>,
    pageable: Object;
    last:boolean;
    totalPages:number;
    totalElements: number;
    number: number;
    numberOfElements: number;
    size:number;
    sort: Object;
    first: boolean;
    empty: false;
    
   
    
}

