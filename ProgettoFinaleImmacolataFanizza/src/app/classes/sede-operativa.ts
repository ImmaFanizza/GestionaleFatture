import { Comune } from "./comune";

export class SedeOperativa {
    id!: number;
    via!: string;
    civico!: string;
    cap!: string;
    localita!: string;
    comune:Comune;

    constructor(){

     this.comune= new Comune();
   }
      
}
