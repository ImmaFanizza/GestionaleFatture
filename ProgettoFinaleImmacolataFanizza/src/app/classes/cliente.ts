import { SedeLegale } from "./sede-legale";
import { SedeOperativa } from "./sede-operativa";

export class Cliente {

    id?: number;
    ragioneSociale!: string;
    partitaIva!: string;
    tipoCliente!: string;
    email!: string;
    pec!: string;
    telefono!: string;
    nomeContatto!: string;
    cognomeContatto!: string;
    telefonoContatto!: string;
    emailContatto!: string;
    indirizzoSedeOperativa: SedeOperativa;
    indirizzoSedeLegale: SedeLegale;
    dataInserimento?: string;
    dataUltimoContatto?: string;
    fatturatoAnnuale?: number;

    constructor() {
        this.indirizzoSedeOperativa = new SedeOperativa();
        this.indirizzoSedeLegale = new SedeLegale();
    }
}
