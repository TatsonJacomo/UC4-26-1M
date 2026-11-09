import { IGerente } from "./interfaces/IGerente";
import { ITrabalhador } from "./interfaces/ITrabalhador";

export class Gerente implements ITrabalhador, IGerente {
    nome:string

        constructor(nome:string) {
            this.nome = nome
        }

       trabalhar(): void {
           console.log(`${this.nome} está trabalhando na oficina de Caminhão...`)
       } 

       gerenciar(): void {
           console.log(`${this.nome} está gerenciando a entrada do manicomio...`)
       }

}
