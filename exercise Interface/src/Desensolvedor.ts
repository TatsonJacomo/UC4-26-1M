import { IProgramador } from "./interfaces/IProgramador";
import { ITrabalhador } from "./interfaces/ITrabalhador";

export class Desenvolvedor implements ITrabalhador, IProgramador  {
    nome:string 

    constructor(nome:string) {
        this.nome = nome
    }

    trabalhar(): void {
        console.log(`${this.nome} está trabalhando com os crazys frogs...`)
    }

    programar(): void {
        console.log(`${this.nome} está programando sair do manicomio do Valdibras...`)
    }

} 