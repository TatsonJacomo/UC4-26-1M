import { IGerente } from "./interfaces/IGerente";
import { IProgramador } from "./interfaces/IProgramador";
import { ITrabalhador } from "./interfaces/ITrabalhador";

export class liderTecnico implements IGerente, IProgramador, ITrabalhador {
    nome:string

    constructor(nome:string) {
        this.nome = nome
    }

    trabalhar(): void {
        console.log(`${this.nome} está trabalhando há 15 dias sem comer e sem dormir...`)
    }

    programar(): void {
        console.log(`${this.nome} está programando uma invasão com DaniCrazy...`)
    }


    gerenciar(): void {
        console.log(`${this.nome} está gerenciando os oreias secas do Senac...`)
    }


}