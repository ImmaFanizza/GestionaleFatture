import { Stato } from "../classes/stato";

export interface DatiStato {

    content: Array<Stato>;
    pageable: Object;
    last: boolean;
    totalPages: number;
    totalElements: number;
    number: number;
    numberOfElements: number;
    size: number;
    sort: Object;
    first: boolean;
    empty: boolean;

}
