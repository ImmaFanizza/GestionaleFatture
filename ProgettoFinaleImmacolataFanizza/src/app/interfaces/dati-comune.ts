import { Comune } from "../classes/comune";

export interface DatiComune {
    content:Array<Comune>,
    pageable: Object;
    last:boolean;
    totalPages:number;
    totalElements: number;
    number: number;
    numberOfElements: number;
    size:number;
    sort: Object;
    first: boolean;
    empty: false
}
