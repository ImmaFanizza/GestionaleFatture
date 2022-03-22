import { Cliente } from "./cliente";
import { Stato } from "./stato";

export class Fattura {

    id!: number;
    data!: string;
    numero!: number;
    anno !: number;
    importo!: number;
    stato!:Stato;
    cliente!: Cliente;

    constructor() {
        this.stato = new Stato();
        this.cliente = new Cliente();
    }

}

